import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/sagas';
import movies from './slices/movies';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];
const reducer = combineReducers({ movies });
const store = configureStore({ reducer, middleware });
sagaMiddleware.run(rootSaga);

export default store;
