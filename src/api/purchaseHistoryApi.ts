import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api';
import { OrderItem, OrderList } from 'models';
import { ApiRoute } from 'utils';


const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });
export const purchaseHistoryApi = createApi({
    reducerPath: "purchaseHistoryApi",
    tagTypes: ['PurchaseHistory'],
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 60 * 5,
    endpoints: (build) => ({
        
        listPurchaseHistory: build.query<OrderList,void>({
            query: () => {                
                return {
                    url: `${ApiRoute.CURRENT_USER.PURCHASE_HISTORY.LIST}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }    
            },
            providesTags: ['PurchaseHistory'],
            transformResponse: (response: { data: OrderList }) => {                
                return response.data;
            },
        }),

        detailPurchaseHistory: build.query<OrderItem,{id: number}>({
            query: (args) => {                
                return {
                    url: `${ApiRoute.CURRENT_USER.PURCHASE_HISTORY.LIST}/${args.id}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }    
            },
            providesTags: ['PurchaseHistory'],
            transformResponse: (response: { data: OrderItem }) => {
                return response.data;
            },
        }),
    }),
})

export const { useListPurchaseHistoryQuery, useDetailPurchaseHistoryQuery } = purchaseHistoryApi;

