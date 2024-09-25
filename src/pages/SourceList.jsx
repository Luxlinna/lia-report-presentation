import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const SourceLiast = () => {
  const { title, content } = slidesData[8];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default SourceLiast;
