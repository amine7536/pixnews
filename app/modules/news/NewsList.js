import React, { Component } from 'react';
import { NavigationActions } from '../navigation/NavigationState';

import NewsCell from './NewsCell';
import AuthorCell from './AuthorCell';

import PureListView from '../../components/PureListView';
import PixListCell from '../../components/PixListCell';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this._innerRef = null;

    this.renderRow = this.renderRow.bind(this);
    this.renderEmptyList = this.renderEmptyList.bind(this);
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
      <PixListCell>
        <AuthorCell
          onPress={NavigationActions.AuthorDetailScreen}
          news={news}
        />
        <NewsCell
          onPress={NavigationActions.NewsDetailScreen}
          news={news}
        />
      </PixListCell>
    );
  }

  renderEmptyList() {
    const { renderEmptyList } = this.props;
    return renderEmptyList && renderEmptyList(this.props.day);
  }
}

export default NewsList;
