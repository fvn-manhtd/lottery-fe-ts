import { axiosClient } from "api";
import { ApiRoute } from "utils";


export const authApi = {
    checkAuth() {
        const url = ApiRoute.AUTH.CHECK_AUTH;
        return axiosClient.get(url);
    },
    login(credentials) {        
        const url = ApiRoute.AUTH.LOGIN;
        return axiosClient.post(url, credentials);
    },
    loginWithTwitter() {
        const url = ApiRoute.AUTH.OAUTH_TWITTER;
        return axiosClient.get(url);
    },
    loginWithFacebook() {
        const url = ApiRoute.AUTH.OAUTH_FACEBOOK;
        return axiosClient.get(url);
    },
    logout() {
        const url = ApiRoute.AUTH.LOGOUT;
        return axiosClient.get(url);
    }

}

