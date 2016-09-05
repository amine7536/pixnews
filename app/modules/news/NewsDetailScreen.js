import React from 'react';
import { Text } from 'react-native';

import StatusBarBackground from '../../components/StatusBarBackground';
import ViewContainer from '../../components/ViewContainer';

const yourNews = require('../../ghost-api.json');

const NewsDetailScreen = (props) => {
  const { navigator } = props;
  return (
    <ViewContainer>
      <StatusBarBackground style={{ backgroundColor: 'white' }} />
      <Text>
        Place Holder
      </Text>
    </ViewContainer>
  );
};

export default NewsDetailScreen;
