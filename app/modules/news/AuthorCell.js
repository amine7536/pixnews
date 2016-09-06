
import React, { Component } from 'react';
import PixTouchableIOS from '../../components/PixTouchable';
import Author from './Author';

class AuthorCell extends Component {
  render() {
    const { news } = this.props;

    let cell = <Author {...news} />;

    if (this.props.onPress) {
      cell = (
        <PixTouchableIOS onPress={this.props.onPress}>
          {cell}
        </PixTouchableIOS>
      );
    }

    return cell;
  }
}

export default AuthorCell;
