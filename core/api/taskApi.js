import { api } from './api';

export const taskApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: 'task/getTasks',
                method: 'GET',
            }),
            transformResponse: (response) => ({
                ...response,
                message: 'Tasks fetched successfully'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Failed to fetch tasks'
                }
            }),
            // Optional: Specify cache behavior
            providesTags: ['Tasks']
        }),
        createTask: builder.mutation({
            query: (task) => ({
                url: 'tasks',
                method: 'POST',
                body: task,
            }),
            transformResponse: (response) => ({
                ...response,
                message: 'Task created successfully!'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Failed to create task'
                }
            }),
            // Optional: Invalidate the Tasks cache after creation
            invalidatesTags: ['Tasks']
        }),

        // deleteTask: builder.mutation({
        //     query: (task) => ({
        //         url: 'task/deleteTask',
        //         method: 'DELETE',
        //         body: task,
        //     }),
        //     transformResponse: (response) => ({
        //         ...response,
        //         message: 'Task created successfully!'
        //     }),
        //     transformErrorResponse: (response) => ({
        //         status: response.status,
        //         data: {
        //             message: response.data?.message || 'Failed to create task'
        //         }
        //     }),
        //     // Optional: Invalidate the Tasks cache after creation
        //     invalidatesTags: ['Tasks']
        // }),
    }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = taskApi;
