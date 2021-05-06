import { put, takeLatest } from 'redux-saga/effects';
import { dataTableActions as actions } from '.';
import axios from 'axios';

function* getData() {
  try {
    const data = yield axios
      .get(`${process.env.REACT_APP_BASE_API_URL}`)
      .then(response => response.data);

    yield put(actions.successGetData(data));
  } catch (errors) {
    yield put(actions.failGetData(errors));
  }
}

function* updateEmployee(action) {
  const { name, email, position } = action.payload;
  try {
    yield axios
      .post(`${process.env.REACT_APP_BASE_API_URL}`, {
        name,
        email,
        position,
      })
      .then(response => response.data);
    yield put(actions.getData());
    yield put(actions.successUpdateEmployee());
  } catch (errors) {
    yield put(actions.failGetData(errors));
  }
}

export function* dataTableSaga() {
  yield takeLatest(actions.getData, getData);
  yield takeLatest(actions.updateEmployee, updateEmployee);
}
