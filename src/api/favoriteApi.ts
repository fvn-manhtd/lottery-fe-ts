import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api';
import { ListResponse, UserFavorite } from 'models';
import { ApiRoute } from 'utils';


const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });
export const favoriteApi = createApi({
    reducerPath: "favoriteApi",
    // tagTypes: ['Favorite'],
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 60 * 5,
    endpoints: (build) => ({
        
        listFavoriteLottery: build.query<ListResponse<UserFavorite>,{ page: number }>({
            query: (arg) => {                
                return {
                    url: `${ApiRoute.CURRENT_USER.FAVORITE}?page=${arg.page}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }    
            },
            // providesTags: ['Favorite'],
            transformResponse: (response: { data: ListResponse<UserFavorite>}) => {
                return response.data;
            },
        }),
        removeFavoriteLottery: build.mutation<ListResponse<UserFavorite>, {shop_id: number; lotttery_id: number}>({
           query: credentials => ({
                url:`${ApiRoute.CURRENT_USER.FAVORITE}`,
                method: 'DELETE',
                body: { "shop_id" : credentials.shop_id, "lottery_id": credentials.lotttery_id },
            }), 
            // invalidatesTags: ['Favorite'],
            transformResponse: (response : {data: ListResponse<UserFavorite>}) => {
                return response.data;
            },
        }),
    }),
})

export const { useRemoveFavoriteLotteryMutation, useListFavoriteLotteryQuery } = favoriteApi;

