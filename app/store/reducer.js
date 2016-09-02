import { combineReducers } from 'redux';
import config from '../modules/config/ConfigState';

const rootReducer = combineReducers({
  config,
});

export default rootReducer;
