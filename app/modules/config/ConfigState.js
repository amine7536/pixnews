import { Map } from 'immutable';

const initialState = Map({
  version: '0.1.0' // ToDo: Should Be Loaded from package.json
});

// Actions
const LOADED_CONFIG = 'AppState/LOADED_CONFIG';

// Action creators
export function loadConfig() {
  return { type: LOADED_CONFIG };
}

export default function configState(state = initialState, action = {}) {
  switch (action.type) {
    case LOADED_CONFIG:
      return initialState;

    default:
      return state;
  }
}
