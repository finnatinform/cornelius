import { combineReducers } from 'redux';
import { displayReducer } from './display/reducers';

const rootReducer = combineReducers({
  display: displayReducer
});

export type AppState = ReturnType<typeof rootReducer>;
