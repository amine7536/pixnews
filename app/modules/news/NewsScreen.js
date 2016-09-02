import React from 'react';
import {Actions} from "react-native-router-flux";

import StatusBarBackground from '../../components/StatusBarBackground';
import ViewContainer from '../../components/ViewContainer';
import Categories from './Categories';
import NewsList from './NewsList';

const yourNews = require('../../ghost-api.json');

const NewsScreen = (props) => {
  const { navigator } = props;
  return (
    <ViewContainer>
      <StatusBarBackground style={{ backgroundColor: 'white' }} />
      <Categories>
        <NewsList tabLabel="For you" data={yourNews.posts} />
        <NewsList tabLabel="Orlando" data={yourNews.posts} />
        <NewsList tabLabel="World" data={yourNews.posts} />
        <NewsList tabLabel="Arts" data={yourNews.posts} />
        <NewsList tabLabel="Life" data={yourNews.posts} />
        <NewsList tabLabel="Sport" data={yourNews.posts} />
        <NewsList tabLabel="Technology" data={yourNews.posts} />
        <NewsList tabLabel="Top Stories" data={yourNews.posts} />
      </Categories>
    </ViewContainer>
  );
};

export default NewsScreen;
