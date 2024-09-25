import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const Results = () => {
  const { title, content } = slidesData[5];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default Results;
