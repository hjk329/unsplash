import {
  takeLatest, call, put, select,
} from 'redux-saga/effects'

import { Action } from './redux';
import { API } from '../../api';

function* getPhotos(action) {
  const result = yield call(API.getPhotos, action.payload)
  const state = yield select();
  const prevPhotos = state.photos.list;
  yield put(Action.Creators.setPhotos([
    ...prevPhotos,
    ...result.data,
  ]))
}

function* getPhotosRelated({ id }) {
  const result = yield call(API.getPhotosRelated, id)
  yield put(Action.Creators.setPhotosRelated(result.data))
}

function* getPhotoById({ payload }) {
  const result = yield call(API.getPhotoById, payload)
  yield put(Action.Creators.setPhotoById(result.data))
}

function* getPhotoPage({ payload }) {
  yield put(Action.Creators.getPhotoById(payload))
  yield put(Action.Creators.getPhotosRelated(payload))
}

function* saga() {
  yield takeLatest(Action.Types.GET_PHOTOS, getPhotos)
  yield takeLatest(Action.Types.GET_PHOTOS_RELATED, getPhotosRelated)
  yield takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoById)
  yield takeLatest(Action.Types.GET_PHOTO_PAGE, getPhotoPage)
}

export default saga;
