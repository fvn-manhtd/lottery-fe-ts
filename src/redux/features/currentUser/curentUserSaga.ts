import { currentUserApi } from "api";
import { toast } from "react-toastify";
import { call, fork, put } from "redux-saga/effects";
import { currentUserActions } from "./curentUserSlice";


function* getCurrentUser() {
    try {
        const { status, data } = yield call(currentUserApi.self);
        if (status === 200 && data.status === 'success') {
            yield put(currentUserActions.setCurrentUser(data.data.user))
        }
    } catch (error) {        
        toast.error("ユーザー情報が所得できませんでした。", {
            autoClose: 7000
        });
    }
}

export function* registerCustomerToPayjp() {
    try {
        yield call(currentUserApi.registerPayCustomerID);        
    } catch (error) {        
        toast.error("カードが登録できませんでした。", { autoClose: 7000 });
    }
}


export function* currentUserSaga() {        
    yield fork(getCurrentUser);
    yield fork(registerCustomerToPayjp);
}
