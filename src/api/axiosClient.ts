import axios from "axios";

export const axiosClient = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_PUBLIC_API_URL,
    headers: {
        'Context-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
})



