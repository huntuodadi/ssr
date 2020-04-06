import { fork } from 'redux-saga/effects';

import home from '../containers/Home/store/saga.js';

export default function* rootSaga() {
  yield fork(home);
}
