import { all } from "redux-saga/effects"
import { authSaga, handleGetLotteryIndex } from "redux/features"

export default function* rootSaga() {    
    yield all([
        authSaga(),
        handleGetLotteryIndex(),
    ]);
}