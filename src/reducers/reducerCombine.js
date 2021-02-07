import { combineReducers } from 'redux';
import { reducerFatch, reducerHasErrored, reducerIsLoading } from './reducersList';

export default combineReducers({
    characters: reducerFatch,
    episodes: reducerFatch,
    locations: reducerFatch,
    reducerHasErrored,
    reducerIsLoading
});
