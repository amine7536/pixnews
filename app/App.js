import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, StyleSheet } from 'react-native';
import { Scene } from 'react-native-router-flux';

import NavigationRouterRedux from './modules/navigation/NavigationRouterContainer'
import NewsScreen from './modules/news/NewsScreen';


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
      <NavigationRouterRedux>
        <Scene key="root" hideNavBar hideTabBar>
          <Scene key="home" component={NewsScreen} initial />
          <Scene key="newsView" direction="vertical" component={NewsScreen} />
        </Scene>
      </NavigationRouterRedux>
    );
  }
}

export default App;
