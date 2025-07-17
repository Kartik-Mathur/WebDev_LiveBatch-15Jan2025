import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => `todos`,
        }),
        getTodosNumber: builder.query({
            query: (limit) => `todos/?limit=${limit}`
        })
    }),
})

export const { useGetTodosQuery, useGetTodosNumberQuery } = todosApi