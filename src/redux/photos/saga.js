import {takeLatest, call, put, select} from 'redux-saga/effects'

import {Action} from "./redux";
import {API} from "../../api";

function* getPhotos(action) {
 const result = yield call(API.getPhotos, action.payload)
 const state = yield select();
 const prevPhotos = state.photos.list;
 yield put(Action.Creators.setPhotos([
     ...prevPhotos,
     ...result.data
 ]))
}

function* getPhotosRelated({id}) {
 const result = yield call(API.getPhotosRelated, id)
 yield put(Action.Creators.setPhotosRelated(result.data))
}

function* saga() {
 yield takeLatest(Action.Types.GET_PHOTOS, getPhotos)
 yield takeLatest(Action.Types.GET_PHOTOS_RELATED, getPhotosRelated)
}

export default saga;