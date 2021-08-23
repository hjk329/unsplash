import { put, takeLatest } from 'redux-saga/effects'

import { Action } from './redux';
import { Action as PhotoAction } from '../photos/redux'

function* showPopup({ payload }) {
  document.body.classList.add('fixed')
  yield put(Action.Creators.handlePopup(true))
  yield put(PhotoAction.Creators.getPhotoById(payload))
  yield put(PhotoAction.Creators.getPhotosRelated(payload))
}

function* closePopup({ payload }) {
  document.body.classList.remove('fixed')
  yield put(Action.Creators.handlePopup(false))
}

function* saga() {
  yield takeLatest(Action.Types.SHOW_POPUP, showPopup)
  yield takeLatest(Action.Types.CLOSE_POPUP, closePopup)
}

export default saga;
