import { api } from './api';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response) => ({
                ...response,
                message: response.message || 'Login successful!'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Login failed'
                }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch { }
            },
        }),

        codeVerification: builder.mutation({
            query: (data) => ({
                url: 'auth/two-step-verification',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response) => ({
                ...response,
                message: response.message || 'Login successful!'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Login failed'
                }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch { }
            },
        }),

        signup: builder.mutation({
            query: (userData) => ({
                url: 'auth/signup',
                method: 'POST',
                body: userData,
            }),
            transformResponse: (response) => ({
                ...response,
                message: response.message || 'Signup successful!'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Signup failed'
                }
            }),
        }),

        refreshToken: builder.mutation({
            query: (refreshToken) => ({
                url: 'auth/refresh-token',
                method: 'POST',
                body: { refreshToken },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useCodeVerificationMutation,
    useRefreshTokenMutation
} = authApi;