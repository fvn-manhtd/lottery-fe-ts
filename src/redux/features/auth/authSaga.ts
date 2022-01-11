import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from 'api';
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, fork, put, take } from "redux-saga/effects";
import { Route as ROUTES } from "utils";
import { currentUserActions, currentUserSaga } from "../currentUser";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
    console.log("Handle Login");

    try {                    
        const {status, data} = yield call(authApi.login, payload);        
        if (status === 200 && data.status === 'success') {
            yield put(authActions.loginSucess());
            localStorage.setItem("isLoggedIn", "yes");
            yield put(push("/"));            
            yield call(currentUserSaga);
        }        
        
    } catch (error) {
        yield put(authActions.loginFailed());
        localStorage.removeItem("isLoggedIn");
        toast.error("ご登録のメールアドレスとパスワードが一致しません。ご確認の上、もう一度ご入力ください。", { autoClose: 7000 });
        yield fork(authSaga);
    }    
}

function* handleSocialLogin(payload: string) {
    console.log("Handle Social Login");
    
    try {   
        if (payload === 'twitter') {
            const { data, status } = yield call(authApi.loginWithTwitter);            
            if (status === 200) {
               window.location.href = data.data;
            } 
        } else if (payload === 'facebook') {
            const { data, status } = yield call(authApi.loginWithFacebook);            
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
        yield take(authActions.logout.type);
        yield call(handleLogout);
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
        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

function* handleLogout() {
    // Redirect to Login page
    console.log("Handle Logout");
    try {
        const { status, data } = yield call(authApi.logout);        
        if (status === 200 && data.status === 'success') {
            yield put(push(ROUTES.USER_LOGIN));
            localStorage.removeItem("isLoggedIn");
            yield put(authActions.logout());
            yield put(currentUserActions.unSetPayjpCustomerID());
        }        
    } catch (error) {
        console.log(error);
    }
    
    
}

export function* authSaga() {    
    yield fork(watchLoginFlow)
    yield fork(watchSocialLoginFlow)
}
