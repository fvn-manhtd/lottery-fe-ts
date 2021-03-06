import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from 'api';
import { push } from "connected-react-router";
import { call, fork, put, take } from "redux-saga/effects";
import { Route as ROUTES } from "utils";
import { currentUserActions } from "..";
import { registerCustomerToPayjp } from "../currentUser/curentUserSaga";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
    console.log("Handle Login");

    try {                    
        const {status, data} = yield call(authApi.login, payload);        
        if (status === 200 && data.status === 'success') {
            yield put(authActions.loginSucess());
            localStorage.setItem("isLoggedIn", "yes");
            yield put(push(ROUTES.HOME));
            yield put(currentUserActions.setCurrentUser(data.data.user));
            yield call(registerCustomerToPayjp);
        }        
        
    } catch (error) {
        
        yield put(authActions.loginFailed());
        localStorage.removeItem("isLoggedIn");
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
        yield put(push(ROUTES.HOME));
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("persist:gacha");
        yield put(authActions.reset());
        yield call(authApi.logout);        
    } catch (error) {
        console.log(error);
    }
    
    
}

export function* authSaga() {    
    yield fork(watchLoginFlow)
    yield fork(watchSocialLoginFlow)
}
