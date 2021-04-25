import {
  createSearchParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { GET_MOVIES, GET_MOVIES_FILTER_BY_NAME } from '../../API';
import { fetchError, fetchStarted, fetchSuccess } from '../core/slices/movies';

function* handleFilters() {
  const filters = yield select((state) => state.filters);
  const tempFilter = Object.assign({}, filters);
  for (let filter in tempFilter) {
    console.log(filter, tempFilter[filter]);
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

function* fetchMovies(action) {
  try {
    yield put(fetchStarted());
    let fetchInfo = {};
    const filters = yield call(handleFilters);
    const params = yield call(createSearchParams, filters);
    if (filters) {
      fetchInfo = yield call(GET_MOVIES_FILTER_BY_NAME, params.toString());
    } else {
      fetchInfo = yield call(GET_MOVIES);
    }
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
