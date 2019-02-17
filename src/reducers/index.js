import { combineReducers } from 'redux';
// combineReducers将多个reducer合并为一个reducer
import article from './article'
const reducer = combineReducers({
    article
});

export default reducer;
