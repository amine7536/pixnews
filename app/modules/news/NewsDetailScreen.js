import React from 'react';
import { Text } from 'react-native';

import StatusBarBackground from '../../components/StatusBarBackground';
import PixViewContainer from '../../components/PixViewContainer';

const NewsDetailScreen = () => {
  return (
    <PixViewContainer>
      <StatusBarBackground style={{ backgroundColor: 'white' }} />
      <Text>
        Place Holder
      </Text>
    </PixViewContainer>
  );
};

export default NewsDetailScreen;
