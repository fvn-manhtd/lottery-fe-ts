import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
    
    try {
        // Call API - Set payload currentUser if login Sucess
        yield put(authActions.loginSucess({
            id: 1,
            email: "manh@test.com"
        }))

        console.log(payload)
    


        // If Call API OK - Save token to localStorage        

        
        // Dispatch action get user cart

        // Dispatch action get user bookmark

        //Redirect to Home Page
        yield put(push("/"))
    } catch (error) {
        yield put(authActions.loginFailed(error.message))
    }    
}

function* handleLogout() {
    // Redirect to Login page
    yield put(push('/user/login'))
}


function* watchLoginFlow() {
    while (true) {
        
            // Listening dispatch action login from user
            const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type)
            yield fork(handleLogin, action.payload)

        
        
        // Listening dispatch action logout from user
        yield take(authActions.logout.type)
        yield fork(handleLogout)
    }
}

export function* authSaga() {    
    yield fork(watchLoginFlow)
}
