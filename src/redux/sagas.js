import {fork, all} from 'redux-saga/effects';

import photosSaga from './photos/saga'
import topicsSaga from './topics/saga'
import searchSaga from './search/saga'


function* sagas() {
    yield all(
        [
            fork(photosSaga),
            fork(topicsSaga),
            fork(searchSaga)
        ])
}

export default sagas;