import {fork, all} from 'redux-saga/effects';

import popupSaga from './popup/saga'
import photosSaga from './photos/saga'
import topicsSaga from './topics/saga'
import searchSaga from './search/saga'


function* sagas() {
    yield all(
        [
            fork(popupSaga),
            fork(photosSaga),
            fork(topicsSaga),
            fork(searchSaga)
        ])
}

export default sagas;