import { PayloadAction } from "@reduxjs/toolkit";
import { loginApi } from "api";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
    console.log("Handle Login");

    try {                    
        const response = yield call(loginApi.login, payload);        
        const { data } = response;
        yield put(authActions.loginSucess(data));
        localStorage.setItem("isLoggedIn", "yes");            
        yield put(push("/"));        
        
    } catch (error) {        
        yield put(authActions.loginFailed(error.message))
        toast.error("ご登録のメールアドレスとパスワードが一致しません。ご確認の上、もう一度ご入力ください。", { autoClose: 7000 });
        yield fork(watchLoginFlow);
    }    
}

function* handleLogout() {
    // Redirect to Login page
    console.log("Handle Logout");
    yield put(push('/user/login'));
    localStorage.removeItem("isLoggedIn");
}


function* watchLoginFlow() {
    while (true) {
        console.log("Watch Login");
        const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
        
        if (!isLoggedIn) {
            // Listening dispatch action login from user
            const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type)
            yield fork(handleLogin, action.payload)
        }
        
        // Listening dispatch action logout from user    
        yield take(authActions.logout.type)
        yield call(handleLogout)
    }
}

export function* authSaga() {    
    yield fork(watchLoginFlow)
}
