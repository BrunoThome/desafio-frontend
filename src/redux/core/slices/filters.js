import { createSlice } from '@reduxjs/toolkit';
import { initFilter } from '../helper/initFilter';

const filters = createSlice({
  name: 'filters',
  initialState: initFilter(),
  reducers: {
    setName(state, action) {
      state.name_like = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setRate(state, action) {
      state.rate = action.payload;
    },
    setReleaseDate(state, action) {
      state.releaseDate = action.payload;
    },
    setFilter(state, action) {
      state.name_like = action.payload.name_like;
      state.genre = action.payload.genre;
      state.rate = action.payload.rate;
    },
  },
});

export const {
  setName,
  setGenre,
  setRate,
  setReleaseDate,
  setFilter,
} = filters.actions;
export default filters.reducer;
