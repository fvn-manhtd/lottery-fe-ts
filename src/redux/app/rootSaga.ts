import { authApi } from "api";
import { all, call, put } from "redux-saga/effects";
import { authActions, authSaga, handleGetLotteryIndex } from "redux/features";


function* checkAuth() {
    try {
        const response = yield call(authApi.checkAuth);
        const { status } = response;
        if (status === 200) {            
            yield put(authActions.loginSucess());
            localStorage.setItem("isLoggedIn", "yes");
        }        
    } catch (error) {
        yield put(authActions.loginFailed());
        localStorage.removeItem("isLoggedIn");
        console.log(error);
    }
}

export default function* rootSaga() {    
    yield all([
        checkAuth(),
        authSaga(),
        handleGetLotteryIndex(),
    ]);
}