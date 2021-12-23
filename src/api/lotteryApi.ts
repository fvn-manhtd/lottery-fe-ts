import { ApiRoute } from "utils";
import { axiosClient } from "api";
import { ListResponse, LotteryModel } from "models";

export const lotteryApi={
    getAll(): Promise<ListResponse<LotteryModel>> {
        const searchQuery=location.search;
        const url = ApiRoute.LOTTERY_INDEX+searchQuery;
        return axiosClient.get(url); 
    }
};

