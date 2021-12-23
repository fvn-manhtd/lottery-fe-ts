import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setLotteries } from "./lotteryIndexSlice";
import { ApiRoute } from "utils";

function requestGetLotteryIndex(){
    const searchQuery=location.search;
    return axios.request({
        method:'get',
        url:ApiRoute.LOTTERY_INDEX+searchQuery
    });
};

export function* handleGetLotteryIndex(){
    try {
        const response = yield call(requestGetLotteryIndex);
        const {data} = response;
        yield put(setLotteries(data));
    } catch(error){
        console.log(error);
    }
};


