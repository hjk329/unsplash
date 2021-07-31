import {takeLatest, call, put, select} from 'redux-saga/effects'

import {Action} from "./redux";
import {Action as PhotoAction} from "../photos/redux";

function* showPopup({payload}) {
    document.body.classList.add('fixed')
    yield put(Action.Creators.handlePopup(true))
    yield put(PhotoAction.Creators.getPhotoById(payload))
    yield put(PhotoAction.Creators.getPhotosRelated(payload))
}

function* saga() {
    yield takeLatest(Action.Types.SHOW_POPUP, showPopup)
}

export default saga;