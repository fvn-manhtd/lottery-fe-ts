import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const axiosClient = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_PUBLIC_API_URL,
    headers: {
        'Context-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    if (error.response.data.message) {
      error.message = error.response.data.message
    }
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.data.status==="success"){
      return response;
    }else{
      return toast.error((response.data.message), { autoClose: 10000, toastId: 1, });
    }
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data.message) {
      error.message = error.response.data.message
    }
    return Promise.reject(error);
    
  });
