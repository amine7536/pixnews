import React from 'react';

import StatusBarBackground from '../../components/StatusBarBackground';
import PixViewContainer from '../../components/PixViewContainer';
import Categories from './Categories';
import NewsList from './NewsList';

const yourNews = require('../../ghost-api.json');

const NewsScreen = () => {
  return (
    <PixViewContainer>
      <StatusBarBackground style={{ backgroundColor: 'white' }} />
      <Categories>
        <NewsList tabLabel="For you" data={yourNews.posts} />
        <NewsList tabLabel="World" data={yourNews.posts} />
        <NewsList tabLabel="Arts" data={yourNews.posts} />
        <NewsList tabLabel="Life" data={yourNews.posts} />
        <NewsList tabLabel="Sport" data={yourNews.posts} />
        <NewsList tabLabel="Technology" data={yourNews.posts} />
        <NewsList tabLabel="Top Stories" data={yourNews.posts} />
      </Categories>
    </PixViewContainer>
  );
};

export default NewsScreen;
