import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const MethodMaterial = () => {
  const { title, content } = slidesData[4];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default MethodMaterial;
