import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const Conclusion = () => {
  const { title, content } = slidesData[7];  // Accessing Introduction data
  return <Slide title={title} content={content} />;
};

export default Conclusion;
