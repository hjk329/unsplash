import { combineReducers } from 'redux';

import popupReducer from './popup/redux';
import photosReducer from './photos/redux';
import topicsReducer from './topics/redux';
import searchReducer from './search/redux';

export const rootReducer = combineReducers({
  popup: popupReducer,
  photos: photosReducer,
  topics: topicsReducer,
  search: searchReducer,
})
