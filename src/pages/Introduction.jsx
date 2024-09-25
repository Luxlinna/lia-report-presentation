import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const Introduction = () => {
  const { title, content } = slidesData[2];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default Introduction;
