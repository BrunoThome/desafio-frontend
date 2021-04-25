import reduxQuerySync from 'redux-query-sync';
import {
  setGenre,
  setName,
  setPage,
  setRate,
  setStartReleaseYear,
  setEndReleaseYear,
} from '../slices/filters';

export function querySync(store) {
  reduxQuerySync({
    store,
    params: {
      name_like: {
        selector: (state) => state.filters.name_like,
        action: (value) => setName(value),
        defaultValue: '',
      },
      genre: {
        selector: (state) => state.filters.genre,
        action: (value) => setGenre(value),
        stringToValue: (value) =>
          value
            .split(',')
            .filter(function (el) {
              return el.length !== 0;
            })
            .toString(),
        valueToString: (value) => {
          return value.split(',').toString();
        },
        defaultValue: '',
      },
      rate: {
        selector: (state) => state.filters.rate,
        action: (value) => setRate(value),
        stringToValue: (value) =>
          value
            .split(',')
            .filter(function (el) {
              return el.length !== 0;
            })
            .toString(),
        valueToString: (value) => {
          return value.split(',').toString();
        },
        defaultValue: '',
      },
      _page: {
        selector: (state) => state.filters._page,
        action: (value) => setPage(value),
        defaultValue: 1,
      },
      releaseYear_gte: {
        selector: (state) => state.filters.releaseYear_gte,
        action: (value) => setStartReleaseYear(value),
        defaultValue: '',
      },
      releaseYear_lte: {
        selector: (state) => state.filters.releaseYear_lte,
        action: (value) => setEndReleaseYear(value),
        defaultValue: '',
      },
    },
    initialTruth: 'location',
  });
}
