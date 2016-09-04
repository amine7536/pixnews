import React, { Component } from 'react';
import { NavigationActions } from '../navigation/NavigationState';

import NewsCell from './NewsCell';
import PureListView from '../../components/PureListView';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this._innerRef = null;

    this.renderRow = this.renderRow.bind(this);
    this.renderEmptyList = this.renderEmptyList.bind(this);
    this.storeInnerRef = this.storeInnerRef.bind(this);
  }

  render() {
    return (
      <PureListView
        ref={this.storeInnerRef}
        data={this.props.data}
        renderRow={this.renderRow}
        {...this.props}
        renderEmptyList={this.renderEmptyList}
      />
    );
  }

  renderRow(news) {
    return (
      <NewsCell
        onPress={NavigationActions.NewsDetailScreen}
        news={news}
      />
    );
  }

  renderEmptyList() {
    const { renderEmptyList } = this.props;
    return renderEmptyList && renderEmptyList(this.props.day);
  }


  storeInnerRef(ref) {
    this._innerRef = ref;
  }

  scrollTo(...args) {
    this._innerRef && this._innerRef.scrollTo(...args);
  }

  getScrollResponder() {
    return this._innerRef && this._innerRef.getScrollResponder();
  }
}

export default NewsList;
