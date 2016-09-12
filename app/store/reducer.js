import { combineReducers } from 'redux';
import navigationState from '../modules/navigation/NavigationState'
import configState from '../modules/config/ConfigState';

const rootReducer = combineReducers({
  navigationState,
  configState,
});

export default rootReducer;
