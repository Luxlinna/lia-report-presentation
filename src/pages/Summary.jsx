// src/pages/Summary.jsx
import React from 'react';
import Slide from '../components/Slide';
import slidesData from '../SlideData';

const Summary = () => {
  const { title, content } = slidesData[1];  // Accessing Summary data
  return <Slide title={title} content={content} />;
};

export default Summary;
