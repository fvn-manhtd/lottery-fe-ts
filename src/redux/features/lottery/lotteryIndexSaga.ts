import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setLotteries } from "./lotteryIndexSlice";

function requestGetLotteryIndex(){
    const searchQuery=location.search;
    console.log(searchQuery)
    return axios.request({
        method:'get',
        url:'http://localhost/api/lotteries'+searchQuery
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


