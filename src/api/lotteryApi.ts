import { axiosClient } from "api";
import { ListResponse, LotteryModel } from "models";
import { ApiRoute, suspend } from "utils";

const lotteryApi={
    getAll(): Promise<ListResponse<LotteryModel>> {
        console.log("call api herer");
        const searchQuery=location.search;
        const url = ApiRoute.LOTTERY_INDEX+searchQuery;
        return axiosClient.get(url); 
    }
};

export default suspend(lotteryApi.getAll());
