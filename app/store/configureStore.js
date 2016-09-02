import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from './reducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

const enhancer = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(enhancer)(rootReducer);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  return store;
}
