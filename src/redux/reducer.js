import {combineReducers} from "redux";

import photosReducer from './photos/redux';
import topicsReducer from './topics/redux';
import searchReducer from './search/redux';


export const rootReducer = combineReducers({
    photos : photosReducer,
    topics : topicsReducer,
    search : searchReducer,
})