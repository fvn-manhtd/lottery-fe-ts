import { axiosClient } from "api";
import { ApiRoute } from "utils";

export const currentUserApi = {
    self() {
        const url = ApiRoute.CURRENT_USER.SELF;
        return axiosClient.get(url);
    },
    account(accountInfo) {
        const url = ApiRoute.CURRENT_USER.ACCOUNT;
        return axiosClient.post(url, accountInfo);
    },
    address(addressInfo) {
        const url = ApiRoute.CURRENT_USER.ADDRESS;
        return axiosClient.post(url, addressInfo);
    },
    getCard() {
        const url = ApiRoute.CURRENT_USER.CARD;
        return axiosClient.get(url);
    },
    saveCard(cardInfo) {
        const url = ApiRoute.CURRENT_USER.CARD;
        return axiosClient.post(url, cardInfo);
    },
    deleteCard(cardID) {        
        const url = ApiRoute.CURRENT_USER.CARD;
        return axiosClient.delete(url, { data: cardID });
    },
    registerPayCustomerID() {
        const url = ApiRoute.CURRENT_USER.REGISTER_PAY_CUSTOMER_ID;
        return axiosClient.get(url);
    },
    leave() {
        const url = ApiRoute.CURRENT_USER.LEAVE;
        return axiosClient.get(url);
    }

}

