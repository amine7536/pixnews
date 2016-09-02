import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  AppState,
  StyleSheet,
} from 'react-native';

import {
  Scene,
  Reducer,
  Router,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import NewsScreen from './modules/news/NewsScreen';
// import PixInfoView from './modules/info/PixInfoView';

const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

class App extends Component {
  static propTypes = {
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'active') {
      console.log(appState);
    }
  }

  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="root" hideNavBar hideTabBar>
          <Scene key="home" component={NewsScreen} initial />
          <Scene key="newsView" direction="vertical" component={NewsScreen} />
        </Scene>
      </Router>
    );
  }
}

export default App;
