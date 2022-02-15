import { currentUserApi } from "api";
import { push } from "connected-react-router";
import { all, call, put } from "redux-saga/effects";
import { authActions, authSaga, currentUserActions, registerCustomerToPayjp } from "redux/features";
import { Route as ROUTES } from "utils";

function* checkAuth() {
    const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
    if (!isLoggedIn) {
        console.log("Check Auth");
        try {

            const { status, data } = yield call(currentUserApi.self);
            if (status === 200 && data.status === 'success') {
                yield put(push(ROUTES.HOME));
                localStorage.setItem("isLoggedIn", "yes");                                
                yield put(authActions.loginSucess());
                yield put(currentUserActions.setCurrentUser(data.data.user))                
                yield call(registerCustomerToPayjp);                
                window.location.href = ROUTES.HOME;
                
            }
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