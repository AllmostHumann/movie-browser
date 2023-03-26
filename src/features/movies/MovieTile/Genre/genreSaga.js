import { call, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../../ApiPaths";
import { getApi } from "../../../../getApi";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genreSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(
      getApi,
      `${baseUrl}/genre/movie/list${apiKey}${language}`
    );
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
