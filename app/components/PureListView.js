import React, { Component } from 'react';
import { ListView, Dimensions, Platform, StyleSheet, View } from 'react-native';

// FIXME: Android has a bug when scrolling ListView the view insertions
// will make it go reverse. Temporary fix - pre-render more rows
const LIST_VIEW_PAGE_SIZE = Platform.OS === 'android' ? 20 : 1;

class PureListView extends Component {
  static defaultProps = {
    data: [],
    contentInset: { top: 0, bottom: 0 },
    // TODO: This has to be scrollview height + fake header
    minContentHeight: Dimensions.get('window').height + 20,
    renderSeparator: (sectionID, rowID) => <View style={styles.separator} key={rowID} />,
  }

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      contentHeight: 0,
      dataSource: cloneWithData(dataSource, props.data),
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: cloneWithData(this.state.dataSource, nextProps.data),
      });
    }
  }

  render() {
    const { contentInset } = this.props;
    const bottom = contentInset.bottom +
      Math.max(0, this.props.minContentHeight - this.state.contentHeight);
    return (
      <ListView
        ref="listview"
        initialListSize={10}
        pageSize={LIST_VIEW_PAGE_SIZE}
        {...this.props}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter}
        contentInset={{ bottom, top: contentInset.top }}
        onContentSizeChange={this.onContentSizeChange}
      />
    );
  }

  onContentSizeChange(contentWidth, contentHeight) {
    if (contentHeight !== this.state.contentHeight) {
      this.setState({ contentHeight });
    }
  }

  scrollTo(...args) {
    this.refs.listview.scrollTo(...args);
  }

  getScrollResponder() {
    return this.refs.listview.getScrollResponder();
  }

  renderFooter() {
    if (this.state.dataSource.getRowCount() === 0) {
      return this.props.renderEmptyList && this.props.renderEmptyList();
    }

    return this.props.renderFooter && this.props.renderFooter();
  }
}

function cloneWithData(dataSource, data) {
  if (!data) {
    return dataSource.cloneWithRows([]);
  }
  if (Array.isArray(data)) {
    return dataSource.cloneWithRows(data);
  }
  return dataSource.cloneWithRowsAndSections(data);
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#eeeeee',
    height: 1,
  },
});

export default PureListView;
