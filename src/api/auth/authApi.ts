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
    sendResetLinkEmail(email) {
        const url = ApiRoute.AUTH.SEND_RESET_PASSWORD_EMAIL;
        return axiosClient.post(url, email);
    },
    resetPassword(credentials) {
        const url = ApiRoute.AUTH.RESET_PASSWORD;
        return axiosClient.post(url, credentials);
    },
    logout() {
        const url = ApiRoute.AUTH.LOGOUT;
        return axiosClient.get(url);
    }

}

