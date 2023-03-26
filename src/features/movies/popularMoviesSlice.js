import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    status: "loading",
    movies: [],
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.status = "loading";
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movies = movies.results;
      state.page = movies.page;
    },
  },
});

export const { fetchMoviesLoading, fetchMoviesError, fetchMoviesSuccess } =
  popularMoviesSlice.actions;

const selectMoviesState = (state) => state.popularMovies;

export const selectStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPage = (state) => selectMoviesState(state).page;

export default popularMoviesSlice.reducer;
