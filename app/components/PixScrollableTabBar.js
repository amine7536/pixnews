/* Taken from https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/ScrollableTabBar.js */
/*eslint-disable */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  findNodeHandle,
  Dimensions,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;


class PixScrollableTabBar extends Component {
  static propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    underlineColor: PropTypes.string,
    underlineHeight: PropTypes.number,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: View.propTypes.style,
    tabStyle: View.propTypes.style,
    tabsContainerStyle: View.propTypes.style,
    textStyle: Text.propTypes.style,
  }

  static defaultProps = {
    scrollOffset: 52,
    activeTextColor: 'navy',
    inactiveTextColor: 'black',
    underlineColor: 'navy',
    backgroundColor: null,
    underlineHeight: 4,
    style: {},
    tabStyle: {},
    tabsContainerStyle: {},
  }

  constructor() {
    super();
    this._tabsMeasurements = [];
    this.state = {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
    };

    this.onTabContainerLayout = this.onTabContainerLayout.bind(this);
    // this.updateTabPanel = this.updateTabPanel.bind(this);
  }

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView.bind(this));
  }

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;

    if (tabCount === 0 || offset.value < 0 || offset.value > tabCount - 1) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  }

  necessarilyMeasurementsCompleted(position) {
    return this._tabsMeasurements[position] && this._tabsMeasurements[position + 1];
  }

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
    newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === 'android') {
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false, });
    } else {
      const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false, });
    }
  }

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
      const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  }

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({ _containerWidth: width, });
  }

  measureTab(page) {
    const tabContainerhandle = findNodeHandle(this.refs.tabContainer);
    // this.refs[`tab_${page}`].measureLayout(tabContainerhandle, (ox, oy, width, height, pageX, pageY) => {
    this.refs[`tab_${page}`].measureLayout(tabContainerhandle, (ox, oy, width, height) => {
      this._tabsMeasurements[page] = { left: ox, right: ox + width, width, height };

      this.updateView({ value: this.props.scrollValue._value });
    });
  }

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? '500' : 'normal';

    return (
      <TouchableOpacity
        key={`${name}_${page}`}
        ref={`tab_${page}`}
        accessible
        accessibilityLabel={name}
        accessibilityTraits="button"
        style={[styles.tab, this.props.tabStyle]}
        onPress={() => this.props.goToPage(page)}
        onLayout={this.measureTab.bind(this, page)}
      >
        <Text style={[{ color: textColor, fontWeight, }, textStyle]}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: this.props.underlineHeight,
      backgroundColor: this.props.underlineColor,
      bottom: 0,
    };

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
    };

    return (
      <View
        style={[styles.container, { backgroundColor: this.props.backgroundColor, }, this.props.style]}
        onLayout={this.onContainerLayout.bind(this)}
      >
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled
          bounces={false}
        >
          <View
            style={[styles.tabs, { width: this.state._containerWidth }, this.props.tabsContainerStyle]}
            ref={'tabContainer'}
            onLayout={this.onTabContainerLayout}
          >
            {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline]} />
          </View>
        </ScrollView>
      </View>
    );
  }

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {
    height: 44,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PixScrollableTabBar;
