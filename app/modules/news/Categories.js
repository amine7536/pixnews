import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PixScrollableTabBar from '../../components/PixScrollableTabBar';

import { Colors, Fonts } from '../../theme';

const Categories = (props) => {
  return (
    <ScrollableTabView
      tabBarActiveTextColor={Colors.black}
      tabBarInactiveTextColor={Colors.gray}
      tabBarUnderlineColor={Colors.white}
      tabBarTextStyle={Fonts.normal}
      renderTabBar={() => <PixScrollableTabBar />}
    >
      {props.children}
    </ScrollableTabView>
  );
};

export default Categories;
