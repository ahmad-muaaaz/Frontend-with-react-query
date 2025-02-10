// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logout } from '../redux/features/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5156/api/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);

    if (result?.error?.status === 403) {
        const refreshToken = localStorage.getItem('refreshToken');

        try {
            const refreshResult = await baseQuery(
                {
                    url: 'auth/refreshToken',
                    method: 'POST',
                    body: { refreshToken },
                },
                api,
                extraOptions
            );

            if (refreshResult?.data) {
                const { authToken, refreshToken: newRefreshToken } = refreshResult.data.data;

                // Store the new tokens
                api.dispatch(
                    setCredentials({
                        data: {
                            ...api.getState().auth.user,
                            authToken,
                            refreshToken: newRefreshToken,
                        },
                    })
                );

                // Retry the original query with new token
                result = await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch(logout());
            }
        } catch (error) {
            api.dispatch(logout());
        }
    }

    return result;
};

// Create and export the API with the wrapped base query
export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['User'],
});