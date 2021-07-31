import {call, put, takeLatest} from 'redux-saga/effects'

import {Action} from "./redux";
import {API} from "../../api";

function* searchPhotos(action) {
    const result = yield call(API.searchPhotos, action.payload)
    yield put(Action.Creators.setSearchResults(result.data))
}

function* saga() {
    yield takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotos)
}

export default saga;