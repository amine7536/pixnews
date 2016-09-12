import React from 'react';
import { ScrollView } from 'react-native';

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
      <ScrollView>
        <PixListCell>
          <AuthorCell news={news} />
          <PixSpacer />
          <NewsCell news={news} />
        </PixListCell>
      </ScrollView>
    </PixViewContainer>
  );
};

export default NewsDetailScreen;
