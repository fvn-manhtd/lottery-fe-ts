import { all } from "redux-saga/effects"
import { authSaga } from "redux/features"

export default function* rootSaga() {    
    yield all([
        authSaga(),
    ]);
}