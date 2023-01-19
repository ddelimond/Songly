import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '5aba3f31d2msh39c805469004bc2p14ac8bjsna14d2a37384d');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),

    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;