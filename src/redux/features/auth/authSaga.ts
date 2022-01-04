import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from 'api';
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
    console.log("Handle Login");

    try {                    
        const response = yield call(authApi.login, payload);
        const { status } = response;
        if (status === 200) {
            yield put(authActions.loginSucess());
            localStorage.setItem("isLoggedIn", "yes");
            yield put(push("/"));    
        }        
        
    } catch (error) {
        yield put(authActions.loginFailed())
        toast.error("ご登録のメールアドレスとパスワードが一致しません。ご確認の上、もう一度ご入力ください。", { autoClose: 7000 });
        yield fork(authSaga);
    }    
}

function* handleLogout() {
    // Redirect to Login page
    console.log("Handle Logout");
    try {
        const response = yield call(authApi.logout);
        const { status } = response;
        if (status === 200) {
            yield put(authActions.logout());
            yield put(push('/user/login'));
            localStorage.removeItem("isLoggedIn");
        }
    } catch (error) {
        console.log(error);        
    }
    
}


function* watchLoginFlow() {
    while (true) {
        console.log("Watch Login");
        const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
        
        if (!isLoggedIn) {                     
            // get action from dispatch
            const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type)
            yield fork(handleLogin, action.payload)
            
        }
        
        // Listening dispatch action logout from user    
        yield take(authActions.logout.type)
        yield call(handleLogout)
    }
}

function* handleSocialLogin(payload: string) {
    console.log("Handle Social Login");
    
    try {   
        if (payload === 'twitter') {
            const response = yield call(authApi.loginWithTwitter);
            const { data, status } = response;
            if (status === 200) {
               window.location.href = data.data;
            } 
        } else if (payload === 'facebook') {
            const response = yield call(authApi.loginWithFacebook);
            const { data, status } = response;
            if (status === 200) {
               window.location.href = data.data;
            } 
        }         
        
    } catch (error) {
        yield put(authActions.loginFailed())
        toast.error("ログインに失敗しました。", { autoClose: 7000 });
        yield fork(authSaga);
    }    
}

function* watchSocialLoginFlow() {
    while (true) {
        console.log("Watch Social Login");
        const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
        if (!isLoggedIn) {
            const action: PayloadAction<string> = yield take(authActions.socialLogin.type)
            yield fork(handleSocialLogin, action.payload);
            
        }        
        // Listening dispatch action logout from user    
        yield take(authActions.logout.type)
        yield call(handleLogout)
    }
}

export function* authSaga() {    
    yield fork(watchLoginFlow)
    yield fork(watchSocialLoginFlow)
}
