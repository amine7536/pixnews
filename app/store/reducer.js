import { combineReducers } from 'redux';
import navigationStateReducer from '../modules/navigation/NavigationState'
import configStateReducer from '../modules/config/ConfigState';

const rootReducer = combineReducers({
  navigationStateReducer,
  configStateReducer,
});

export default rootReducer;
