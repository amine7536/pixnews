import React from 'react';

import StatusBarBackground from '../../components/StatusBarBackground';
import PixViewContainer from '../../components/PixViewContainer';
import PixSpacer from '../../components/PixSpacer';
import PixListCell from '../../components/PixListCell';

import AuthorCell from './AuthorCell';
import NewsCell from './NewsCell';

const NewsDetailScreen = (props) => {
  const { news } = props;
  return (
    <PixViewContainer>
      <StatusBarBackground style={{ backgroundColor: 'white' }} />
      <PixListCell>
        <AuthorCell news={news} />
        <PixSpacer />
        <NewsCell news={news} />
      </PixListCell>
    </PixViewContainer>
  );
};

export default NewsDetailScreen;
