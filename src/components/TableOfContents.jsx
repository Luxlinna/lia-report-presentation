// src/components/TableOfContents.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents = () => {
  return (
    <div className="custom-container flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className='content-container w-full flex flex-col justify-center'>
        <h1 className="text-4xl font-bold mb-8 text-green-900">Table of Contents</h1>
        <ul className="text-lg space-y-4 pl-12">
          <li><Link to="/summary" className="text-blue-600 hover:underline">1. Summary</Link></li>
          <li><Link to="/introduction" className="text-blue-600 hover:underline">2. Introduction</Link></li>
          <li><Link to="/purpose-goals" className="text-blue-600 hover:underline">3. Purpose, Goals, and Problem Statement</Link></li>
          <li><Link to="/method-material" className="text-blue-600 hover:underline">4. Method and Material</Link></li>
          <li><Link to="/results" className="text-blue-600 hover:underline">5. Results</Link></li>
          <li><Link to="/analysis" className="text-blue-600 hover:underline">6. Analysis and Discussion</Link></li>
          <li><Link to="/conclusion" className="text-blue-600 hover:underline">7. Conclusion</Link></li>
          <li><Link to="/source-list" className="text-blue-600 hover:underline">8. Source List</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
