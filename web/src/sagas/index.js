import { watcherSaga as fetchData } from './fetchData';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    fetchData(),
  ])
};
