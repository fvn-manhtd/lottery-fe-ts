import { axiosClient } from "api";
import { ApiRoute } from "utils";


export const loginApi = {
    login(credentials) {
        const url = ApiRoute.AUTH.LOGIN;
        return axiosClient.post(url, credentials);
    }

}

