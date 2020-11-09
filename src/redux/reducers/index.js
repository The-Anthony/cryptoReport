import {combineReducers} from 'redux';

import urlReducer from './modifyUrls';
import saveDataReducer from './saveData';

const rootReducer = combineReducers({
    urlReducer,
    saveDataReducer,
})

export default rootReducer;