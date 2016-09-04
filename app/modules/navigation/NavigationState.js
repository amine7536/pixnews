import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

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
