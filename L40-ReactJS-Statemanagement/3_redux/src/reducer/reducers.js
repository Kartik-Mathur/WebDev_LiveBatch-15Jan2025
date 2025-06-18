import { counterReducer } from "./Counter";
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    counterReducer
})

export default rootReducers;