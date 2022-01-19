import { axiosClient } from "api";
import { ApiRoute } from "utils";

export const lotteryApi = {
    getAll(){
        const searchQuery=location.search;
        const url = ApiRoute.LOTTERY_INDEX+searchQuery;
        return axiosClient.get(url);
    },
};



