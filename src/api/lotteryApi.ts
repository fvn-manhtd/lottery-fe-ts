import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api';
import { LotteryListModel, LotteryModel } from 'models';
import { ApiRoute } from "utils";

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const lotteryApi = createApi({
    reducerPath: "lotteryApi",
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 60 * 5,
    refetchOnMountOrArgChange: 60 * 30, 
    refetchOnFocus: false,
    refetchOnReconnect: true,
    endpoints: (build) => ({
        getLotteries: build.query<LotteryListModel, { limitArg: number; pageArg: number}>({
            query: (arg) => {
                const { limitArg, pageArg } = arg;
                return {
                    url: `${ApiRoute.LOTTERY_INDEX}?limit=${limitArg}&page=${pageArg}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }                
            },
            transformResponse: (response: { data: LotteryListModel }) => {
                return response.data;
            },                
        }),
        getLottery: build.query<LotteryModel, number>({
            query: (id) => ({
                url: `${ApiRoute.LOTTERY_DETAIL}/${id}`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError
            }),
            transformResponse: (response: { data: LotteryModel }) => {                     
                return response.data;
            },
        }),
    }),
})

export const { useGetLotteryQuery, useGetLotteriesQuery } = lotteryApi;

