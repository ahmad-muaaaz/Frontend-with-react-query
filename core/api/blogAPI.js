import { api } from './api';

export const taskApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => ({
                url: 'blog/blog',
                method: 'GET',
            }),
            transformResponse: (response) => ({
                ...response,
                message: 'Blogs fetched successfully'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Failed to fetch blogs'
                }
            }),
            providesTags: ['Blogs']
        }),
        createBlog: builder.mutation({
            query: (blog) => ({
                url: 'blog/createBlog',
                method: 'POST',
                body: blog,
            }),
            transformResponse: (response) => ({
                ...response,
                message: 'Blog created successfully!'
            }),
            transformErrorResponse: (response) => ({
                status: response.status,
                data: {
                    message: response.data?.message || 'Failed to create blog'
                }
            }),
            invalidatesTags: ['Blogs']
        }),
    }),
});

export const {
    useGetBlogsQuery,
    useCreateBlogMutation
} = taskApi;