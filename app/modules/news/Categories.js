import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../../components/PixScrollableTabBar';

const Categories = (props) => {
  return (
    <ScrollableTabView
      tabBarActiveTextColor="#000000"
      tabBarInactiveTextColor="#9e9e9e"
      tabBarUnderlineColor="#FFFFFF"
      tabBarTextStyle={{ fontFamily: 'HelveticaNeue', fontSize: 13 }}
      renderTabBar={() => <ScrollableTabBar />}
    >
      {props.children}
    </ScrollableTabView>
  );
};

export default Categories;
