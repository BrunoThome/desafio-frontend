import { createSearchParams } from 'react-router-dom';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_MOVIES } from '../../API';
import { fetchError, fetchStarted, fetchSuccess } from '../core/slices/movies';

function* handleFilters() {
  const filters = yield select((state) => state.filters);
  const tempFilter = Object.assign({}, filters);
  for (let filter in tempFilter) {
    if (typeof tempFilter[filter] !== 'number') {
      if (tempFilter[filter].length > 0) {
        tempFilter[filter] = tempFilter[filter].split(',');
      } else {
        delete tempFilter[filter];
      }
    }
  }
  return tempFilter;
}

function* fetchMovies() {
  try {
    yield put(fetchStarted());
    const filters = yield call(handleFilters);
    const params = yield call(createSearchParams, filters);
    const fetchInfo = yield call(GET_MOVIES, params.toString());
    const response = yield call(fetch, fetchInfo.url, fetchInfo.options);
    const totalMovies = response.headers.get('X-Total-Count');
    const json = yield call([response, 'json']);
    yield put(fetchSuccess({ total: totalMovies, movies: json }));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

function* watchFetchMovies() {
  // throttle para busca enquanto usuário digita
  //yield throttle(1000, 'FETCH_MOVIES', fetchMovies);
  yield takeLatest('FETCH_MOVIES', fetchMovies);
}

export default function* root() {
  yield all([watchFetchMovies()]);
}
