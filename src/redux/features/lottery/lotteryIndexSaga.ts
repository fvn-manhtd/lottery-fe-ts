import { call, put } from "redux-saga/effects";
import { setLotteries } from "./lotteryIndexSlice";
import { lotteryApi } from "api";

export function* handleGetLotteryIndex(){
    try {
        const response = yield call(lotteryApi.getAll);
        const {data} = response;
        yield put(setLotteries(data));
    } catch(error){
        console.log(error);
    }
};


