import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_STATS, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE } from '../constants'; 

export function* watcherSaga() {
  yield takeLatest(FETCH_STATS, workerSaga);
}

function fetchData() {
  return axios.get('http://localhost:8081', {
    headers: {
      Accept: 'application/json', 
    },
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchData);
    const stats = response.data;

    yield put({ type: FETCH_STATS_SUCCESS, stats });

  } catch (error) {
    yield put({ type: FETCH_STATS_FAILURE, error });
  }
}
