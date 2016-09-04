import { Map } from 'immutable';
import { ActionConst, Actions } from 'react-native-router-flux';

const initialState = Map({
  scene: {},
});

/**
Keep RNRF Actions in a more relavant variable name.
Actions var name is to general to my taste
*/
export const  NavigationActions = Actions;

export default function navigationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.JUMP:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.PUSH:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.REPLACE:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.BACK:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.BACK_ACTION:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.POP_TO:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.REFRESH:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.REST:
      return {
        ...state,
        scene: action.scene,
      };
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };

    default:
      return state;
  }
}
