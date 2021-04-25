import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/sagas';
import movies from './slices/movies';
import filters from './slices/filters';
import { querySync } from './helper/querySync';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];
const reducer = combineReducers({ movies, filters });
const store = configureStore({ reducer, middleware });
sagaMiddleware.run(rootSaga);

querySync(store);

export default store;
