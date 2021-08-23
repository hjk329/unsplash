import { takeLatest, call, put } from 'redux-saga/effects';

import { API } from '../../api';
import { Action } from './redux';

function* getTopics({ payload }) {
  const result = yield call(API.getTopics, payload)
  yield put(Action.Creators.setTopics(result.data))
}

function* getTopicBySlug({ slug }) {
  yield put(Action.Creators.getTopicPhotos(slug))
  const result = yield call(API.getTopicBySlug, slug)
  yield put(Action.Creators.setTopicBySlug(result.data))
}

function* getTopicPhotos({ slug }) {
  const result = yield call(API.getTopicPhotos, slug)
  yield put(Action.Creators.setTopicPhotos(result.data))
}

function* saga() {
  yield takeLatest(Action.Types.GET_TOPICS, getTopics)
  yield takeLatest(Action.Types.GET_TOPIC_BY_SLUG, getTopicBySlug)
  yield takeLatest(Action.Types.GET_TOPIC_PHOTOS, getTopicPhotos)
}

export default saga;
