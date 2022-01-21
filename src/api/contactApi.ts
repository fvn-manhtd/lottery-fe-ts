import { axiosClient } from "api";
import { ApiRoute } from "utils";

export const contactApi = {
    send(data){        
        const url = ApiRoute.CONTACT;
        return axiosClient.post(url, data);
    },
};



