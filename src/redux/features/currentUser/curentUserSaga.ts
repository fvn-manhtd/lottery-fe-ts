import { currentUserApi } from "api";
import { toast } from "react-toastify";
import { call, fork, put } from "redux-saga/effects";
import { currentUserActions } from "./curentUserSlice";


function* getCurrentUserCard() {
    try {
        const { status, data } = yield call(currentUserApi.getCard);
        if (status === 200 && data.status === 'success') {
            yield put(currentUserActions.setCurrentUserCard(data.data.data))
        }
    } catch (error) {
        yield put(currentUserActions.unSetCurrentUserCard);
        toast.error("カード情報のエラーが発生しました", { autoClose: 7000 });
    }
}

function* getCurrentUser() {
    try {
        const { status, data } = yield call(currentUserApi.self);
        if (status === 200 && data.status === 'success') {
            yield put(currentUserActions.setCurrentUser(data.data.user))
        }
    } catch (error) {
        yield put(currentUserActions.unSetCurrentUser);
        toast.error("ユーザー情報のエラーが発生しました", { autoClose: 7000 });
    }
}

function* registerCustomerToPayjp() {
    try {
        const { status, data } = yield call(currentUserApi.registerPayCustomerID);
        if (status === 200 && data.status === 'success') {
            yield put(currentUserActions.setPayjpCustomerID(data.id))
        }
    } catch (error) {
        yield put(currentUserActions.unSetCurrentUser);
        toast.error("ユーザー情報のエラーが発生しました", { autoClose: 7000 });
    }
}

export function* currentUserSaga() {    
    // yield fork(registerCustomerToPayjp);
    yield fork(getCurrentUser);
    // yield fork(getCurrentUserCard);
}
