import { createSlice } from '@reduxjs/toolkit';

const filters = createSlice({
  name: 'filters',
  initialState: { _limit: 6 },
  reducers: {
    setName(state, action) {
      state.name_like = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload.toString();
    },
    setRate(state, action) {
      state.rate = action.payload.toString();
    },
    setStartReleaseYear(state, action) {
      state.releaseYear_gte = action.payload;
    },
    setEndReleaseYear(state, action) {
      state.releaseYear_lte = action.payload;
    },
    setPage(state, action) {
      state._page = action.payload;
    },
    setLimit(state, action) {
      state._limit = action.payload;
    },
    resetFilter(state) {
      state._limit = 6;
      state.name_like = '';
      state.genre = '';
      state.rate = '';
      state.releaseYear_gte = '';
      state.releaseYear_lte = '';
      state._page = 1;
    },
  },
});

export const {
  setName,
  setGenre,
  setRate,
  setStartReleaseYear,
  setEndReleaseYear,
  setLimit,
  setPage,
  resetFilter,
} = filters.actions;
export default filters.reducer;
