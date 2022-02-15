import { axiosClient } from "api";
import { ApiRoute } from "utils";


export const cartApi = {
    list() {
        const url = ApiRoute.CART.LIST;
        return axiosClient.get(url);
    },
    verify(credentials) {        
        const url = ApiRoute.CART.VERIFY;
        return axiosClient.post(url, credentials);
    },
    delete() {        
        const url = ApiRoute.CART.DELETE;
        return axiosClient.delete(url);
    },
    shop_config() {        
        const url = ApiRoute.CART.SHOP_CONFIG;
        return axiosClient.get(url);
    },
    order(credentials) {        
        const url = ApiRoute.CART.ORDER;
        return axiosClient.post(url, credentials);
    },
}

