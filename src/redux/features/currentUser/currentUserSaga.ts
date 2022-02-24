import { currentUserApi } from "api";
import { UserCard1 } from "models";
import { toast } from "react-toastify";
import { call, fork, put } from "redux-saga/effects";
import { currentUserDataActions } from "./currentUserDataSlice";
import { currentUserActions } from "./currentUserSlice";


function* getCurrentUser() {
    try {
        const { status, data } = yield call(currentUserApi.self);
        if (status === 200 && data.status === 'success') {
            yield put(currentUserActions.setCurrentUser(data.data.user))
        }
    } catch (error) {        
        toast.error("ユーザー情報は所得できませんでした。", {
            autoClose: 7000
        });
    }
}

export function* registerCustomerToPayjp() {
    try {
        yield call(currentUserApi.registerPayCustomerID);        
    } catch (error) {        
        toast.error("カードは登録できませんでした。", { autoClose: 7000 });
    }
}


export function* getUserCards() {
    console.log("Get Current Card of User");
    try {
        const res = yield call(currentUserApi.getCard);
        const data: UserCard1 = res.data.data;
        yield put(currentUserDataActions.setDefaultCard(data.default_card));
        yield put(currentUserDataActions.setCurrentUserCard(data.cards));        
    } catch (error) {        
        console.log(error);
    }
}


export function* currentUserSaga() {        
    yield fork(getCurrentUser);
    yield fork(registerCustomerToPayjp);
}
