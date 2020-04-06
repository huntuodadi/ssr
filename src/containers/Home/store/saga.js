import { select, call, takeLatest, all, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetchNews } from './api';


function* getNews() {
  console.log('get news');
  fetchNews();
  const { data } = yield call(fetchNews);
  yield put({
    type: 'GET_NEWS_SUCCESS',
    newsList: data,
  });
}

function* watchFetchWidgetList() {
  yield takeLatest('GET_NEWS', getNews);
}

export default function* rootSaga() {
  yield all([watchFetchWidgetList()]);
}
