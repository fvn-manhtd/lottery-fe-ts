import { authApi } from "api";
import { all, call, put } from "redux-saga/effects";
import { authActions, authSaga, currentUserSaga } from "redux/features";

function* checkAuth() {
    const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
    if (!isLoggedIn) {
        console.log("Check Auth");
        try {
            const response = yield call(authApi.checkAuth);
            const { status } = response;
            if (status === 200) {            
                yield put(authActions.loginSucess());
                localStorage.setItem("isLoggedIn", "yes");
                yield call(currentUserSaga);
            } 
        } catch (error) {
            yield put(authActions.loginFailed());
            localStorage.removeItem("isLoggedIn");
            console.log(error.response);
        }
    }    
}

export default function* rootSaga() {    
    yield all([
        checkAuth(),
        authSaga(),        
    ]);
}