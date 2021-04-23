import { createSearchParams } from 'react-router-dom';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { GET_MOVIES, GET_MOVIES_FILTER_BY_NAME } from '../../API';
import { fetchError, fetchStarted, fetchSuccess } from '../core/slices/movies';

function* createQueryString() {
  const filters = yield select((state) => state.filters);
  const params = createSearchParams(filters);
}

function* fetchMovies(action) {
  try {
    yield put(fetchStarted());
    let fetchInfo = {};
    const filters = yield select((state) => state.filters);
    const params = yield call(createSearchParams, filters);
    if (filters) {
      fetchInfo = yield call(GET_MOVIES_FILTER_BY_NAME, params.toString());
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
  // throttle para busca enquanto usuário digita
  //yield throttle(1000, 'FETCH_MOVIES', fetchMovies);
  yield takeEvery('FETCH_MOVIES', fetchMovies);
}

export default function* root() {
  yield all([watchFetchMovies()]);
}
