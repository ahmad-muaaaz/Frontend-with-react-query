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
    }),
});

export const { useLoginMutation, useSignupMutation, useCodeVerificationMutation } = authApi;
