import React from 'react';

import StatusBarBackground from '../../components/StatusBarBackground';
import PixViewContainer from '../../components/PixViewContainer';
import Categories from './Categories';
import NewsList from './NewsList';

/* ToDo: Bad, mock data should be loaded via Redux */
const yourNews = require('../../data/ghost-api.json');
const worldNews = require('../../data/world-api.json');
const artNews = require('../../data/art-api.json');
const techNews = require('../../data/tech-api.json');

const NewsScreen = () => {
  return (
    <PixViewContainer>
      <StatusBarBackground style={{ backgroundColor: 'white' }} />
      <Categories>
        <NewsList tabLabel="For you" data={yourNews.posts} />
        <NewsList tabLabel="World" data={worldNews.posts} />
        <NewsList tabLabel="Arts" data={artNews.posts} />
        <NewsList tabLabel="Life" data={yourNews.posts} />
        <NewsList tabLabel="Sport" data={yourNews.posts} />
        <NewsList tabLabel="Technology" data={techNews.posts} />
        <NewsList tabLabel="Top Stories" data={yourNews.posts} />
      </Categories>
    </PixViewContainer>
  );
};

export default NewsScreen;
