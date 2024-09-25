import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const Analysis = () => {
  const { title, content } = slidesData[6];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default Analysis;
