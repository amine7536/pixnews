import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";

import NewsCell from './NewsCell';
// var SessionsSectionHeader = require('./SessionsSectionHeader');
import PureListView from '../../components/PureListView';

class NewsList extends Component {
  constructor(props) {
    super(props);

    this._innerRef = null;

    // this.renderSectionHeader = this.renderSectionHeader.bind(this);
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
        // renderSectionHeader={this.renderSectionHeader}
        {...this.props}
        renderEmptyList={this.renderEmptyList}
      />
    );
  }

  // renderSectionHeader(sectionData: any, sectionID: string) {
  //   return <SessionsSectionHeader title={sectionID} />;
  // }

  renderRow(news) {
    return (
      <NewsCell
        onPress={Actions.newsView}
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
