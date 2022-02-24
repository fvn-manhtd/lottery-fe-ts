import { currentUserApi } from "api";
import { User } from "models";
import { all, call, put } from "redux-saga/effects";
import { authActions, authSaga, currentUserActions, registerCustomerToPayjp } from "redux/features";
import { Route as ROUTES } from "utils";

function* checkAuth() {
    const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
    if (!isLoggedIn) {
        console.log("Check Auth");
        try {
            const res = yield call(currentUserApi.self);            
            const data: User = res.data.data.user 
            yield put(authActions.loginSucess());
            window.location.href = ROUTES.HOME;
            localStorage.setItem("isLoggedIn", "yes");               
            yield put(currentUserActions.setCurrentUser(data))                        
            yield call(registerCustomerToPayjp);
            
        } catch (error) {
            console.log(error);
            yield put(authActions.loginFailed());
            localStorage.removeItem("isLoggedIn");            
        }
    }    
}

export default function* rootSaga() {    
    yield all([
        checkAuth(),
        authSaga(),
    ]);
}