import { combineReducers } from 'redux';
import articles from './articles';
import errors from './errors';
import messages from './messages';
import auth from './auth';
export default combineReducers({
    articles,
    errors,
    messages,
    auth,
});