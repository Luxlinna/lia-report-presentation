// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import Summary from './pages/Summary';
import Introduction from './pages/Introduction';
import PurposeGoals from './pages/PurposeGoals';
import MethodMaterial from './pages/MethodMaterial';
import Results from './pages/Results';
import Analysis from './pages/Analysis';
import Conclusion from './pages/Conclusion';
import SourceList from './pages/SourceList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableOfContents />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/purpose-goals" element={<PurposeGoals />} />
        <Route path="/method-material" element={<MethodMaterial />} />
        <Route path="/results" element={<Results />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/source-list" element={<SourceList />} />
      </Routes>
    </Router>
  );
};

export default App;
