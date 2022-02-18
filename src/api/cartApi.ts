import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api';
import { Cart } from 'models';
import { ApiRoute } from 'utils';


const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });
export const cartApi = createApi({
    reducerPath: "cartApi",
    tagTypes: ['Cart'],
    baseQuery: baseQueryWithRetry,
    keepUnusedDataFor: 2 * 60,
    endpoints: (build) => ({

        listCart: build.query<Cart,any>({
            query: () => {
                return {
                    url: `${ApiRoute.CART.LIST}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }    
            },
            providesTags: (result) => [{ type: 'Cart', result }],
            transformResponse: (response : {data : Cart}) => {
                return response.data;
            }
        }),
        deleteCart: build.mutation({
            query: () => {
                return {
                    url: `${ApiRoute.CART.DELETE}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: (result) => [{ type: 'Cart', result }],
        }),
        addCoupon: build.mutation<any, {coupon_code: string}>({
            query: args => {
                return {
                    url: `${ApiRoute.CART.COUPON}`,
                    method: 'POST',
                    body: { "coupon_code": args.coupon_code }
                }
            },
            transformResponse: (response : any) => {
                return response;
            }
        }),
        shopConfig: build.query<any, any>({
            query: () => {
                return {
                    url: `${ApiRoute.CART.SHOP_CONFIG}`,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.isError
                }
            },
            transformResponse: (response) => {
                return response;
            }
        }),
    }),
})

export const { useDeleteCartMutation,  useListCartQuery, useShopConfigQuery, useAddCouponMutation } = cartApi;

