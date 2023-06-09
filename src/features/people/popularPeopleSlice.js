import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    status: "loading",
    people: [],
    totalPages: 0,
    totalResults: 0,
  },
  reducers: {
    fetchPeopleLoading: () => ({
      status: "loading",
    }),
    fetchPeopleError: () => ({
      status: "error",
    }),
    fetchPeopleSuccess: (_, { payload: people }) => ({
      status: "success",
      people: people.results,
      totalPages: people.total_pages,
      totalResults: people.total_results,
    }),
  },
});

export const { fetchPeopleLoading, fetchPeopleError, fetchPeopleSuccess } =
  popularPeopleSlice.actions;

export const selectPopularPeopleState = (state) => state.popularPeople;

export const selectPopularPeopleStatus = (state) =>
  selectPopularPeopleState(state).status;
export const selectPopularPeople = (state) =>
  selectPopularPeopleState(state).people;
export const selectPopularPeopleTotalPages = (state) =>
  selectPopularPeopleState(state).totalPages;
export const selectTotalPeopleResults = (state) => 
  selectPopularPeopleState(state).totalResults;

export default popularPeopleSlice.reducer;
