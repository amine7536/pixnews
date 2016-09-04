import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, StyleSheet } from 'react-native';
import { Scene } from 'react-native-router-flux';

import NavigationRouterRedux from './modules/navigation/NavigationRouterContainer'
import NewsScreen from './modules/news/NewsScreen';
import NewsDetailScreen from './modules/news/NewsDetailScreen';


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
          <Scene key="NewsScreen" component={NewsScreen} initial />
          <Scene key="NewsDetailScreen" component={NewsDetailScreen} />
        </Scene>
      </NavigationRouterRedux>
    );
  }
}

export default App;
