import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const PurposeGoals = () => {
  const { title, content } = slidesData[3];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default PurposeGoals;
