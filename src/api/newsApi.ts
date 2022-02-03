import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api';
import { NewsListModel, NewsModel } from 'models';
import { ApiRoute } from "utils";

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 60 * 100,
    refetchOnFocus: false,
    refetchOnReconnect: true,
    endpoints: (build) => ({
        getNewsList: build.query<NewsListModel, number | void>({
            query: (page = 1) => ({
                url: `${ApiRoute.NEWS_LIST}?page=${page}`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError
            }),
            transformResponse: (response: { data: NewsListModel }) => {
                return response.data;
            },
                
        }),
        getNewsById: build.query<NewsModel, number>({
            query: (id) => ({
                url: `${ApiRoute.NEWS_DETAIL}/${id}`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError
            }),
            transformResponse: (response: { data: { news: NewsModel } }) => {
                return response.data.news;
            },
        }),
    }),
})

export const { useGetNewsListQuery, useGetNewsByIdQuery } = newsApi;

