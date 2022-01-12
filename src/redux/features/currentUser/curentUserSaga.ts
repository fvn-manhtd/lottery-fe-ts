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
        toast.error("権限がありませんログインしてからお試しください。", {
            autoClose: 7000
        });
    }
}

function* registerCustomerToPayjp() {
    try {
        const { status, data } = yield call(currentUserApi.registerPayCustomerID);
        if (status === 200 && data.status === 'success') {
            yield put(currentUserActions.setPayjpCustomerID(data.id))
        }
    } catch (error) {        
        toast.error("エラーが発生しました", { autoClose: 7000 });
    }
}


export function* currentUserSaga() {        
    yield fork(getCurrentUser);
    yield fork(registerCustomerToPayjp);
}
