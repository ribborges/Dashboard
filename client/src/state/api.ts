import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getProductResponse, getTransactionsResponse, getUserResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Custumers", "Transactions"],
    endpoints: (build) => ({
        getUser: build.query<getUserResponse, string>({
            query: (id: string) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: build.query<Array<getProductResponse>, void>({
            query: () => "client/products",
            providesTags: ["Products"]
        }),
        getCustumers: build.query<Array<getUserResponse>, void>({
            query: () => "client/custumers",
            providesTags: ["Custumers"]
        }),
        getTransactions: build.query<Array<getTransactionsResponse>, { page: number, pageSize: number, sort: string, search: string }>({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search }
            }),
            providesTags: ["Transactions"]
        })
    })
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustumersQuery, useGetTransactionsQuery } = api;