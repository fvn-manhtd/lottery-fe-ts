import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import axios from "axios";


//Call API Using axios
export const axiosClient = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_PUBLIC_API_URL,
    headers: {
        'Context-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
})


//Call API using fetchBaseQuery from RTK Query
export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
      headers.set("Context-Type", "application/json");
      headers.set("X-Requested-With", "XMLHttpRequest");      
    return headers;
  }
});

