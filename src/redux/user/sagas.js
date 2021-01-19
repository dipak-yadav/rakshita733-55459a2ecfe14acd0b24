import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";

export function* ADD_USER_COUNTRY({ payload }) {
  const { country } = payload;
  yield put({
    type: "user/SET_STATE",
    payload: {
      countryName: country,
    },
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.ADD_USER_COUNTRY, ADD_USER_COUNTRY)]);
}
