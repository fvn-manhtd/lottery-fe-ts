import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api';
import { ApiRoute } from "utils";

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const staticPageApi = createApi({
    reducerPath: "staticPageApi",
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 60 * 100, // 100 mins 
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (build) => ({
        getStaticPages: build.query({
            query: () => {                
                return {
                    url: `${ApiRoute.STATIC_API}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }
            },
            transformResponse: (response: any ) => {
                return response.data.pages;
            },
                
        }),
        getStaticPage: build.query<any, string>({
            query: (name) => {                           
                return {
                    url: `${ApiRoute.STATIC_API}/${name}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }
            },
            transformResponse: (response:any ) => {
                return response.data.page;
            },
        }),
    }),
})

export const { useGetStaticPagesQuery, useGetStaticPageQuery } = staticPageApi;

