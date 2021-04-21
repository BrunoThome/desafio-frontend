import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GET_MOVIES, GET_MOVIES_FILTER_BY_NAME } from '../../API';
import { fetchError, fetchStarted, fetchSuccess } from '../core/slices/movies';

function* fetchMovies(action) {
  try {
    yield put(fetchStarted());
    let fetchInfo = {};
    if (action.payload?.name) {
      fetchInfo = yield call(GET_MOVIES_FILTER_BY_NAME, action.payload.name);
    } else {
      fetchInfo = yield call(GET_MOVIES);
    }
    const response = yield call(fetch, fetchInfo.url, fetchInfo.options);
    const json = yield call([response, 'json']);
    yield put(fetchSuccess(json));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

function* watchFetchMovies() {
  yield takeEvery('FETCH_MOVIES', fetchMovies);
}

export default function* root() {
  yield all([watchFetchMovies()]);
}
