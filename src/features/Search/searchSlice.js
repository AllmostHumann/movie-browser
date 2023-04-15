import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: "loading",
        movies: [],
    },
    reducers: {
        fetchSearch: () => ({}),
        fetchSearchSuccess: (state, { payload: movies }) => ({
            status: "success",
            movies: movies.results,
        }),
        fetchSearchError: () => ({
            status: "error",
            movies: [],
        }),
    },
});

export const {
    fetchSearch,
    fetchSearchError,
    fetchSearchSuccess
} = searchSlice.actions;

export const selectSearchState = (state) => state.search;

export const selectSearchMovies = (state) => selectSearchState(state).movies;
export const selectSearchStatus = (state) => selectSearchState(state).status;

export default searchSlice.reducer;