
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Slide = ({ title, content, isList, listItems }) => {
//   return (
//     <div className="custom-container flex flex-col items-center justify-center h-screen bg-gray-50">
//       <div className='content-container w-full'>
//         <header className="p-2 mx-2 ml-0 self-start">
//           <Link to="/" className="arrow_back text-lg text-blue-600 hover:underline">
//             &lt;
//           </Link>
//         </header>
        
//         <h1 className="text-4xl font-bold mb-6 font-roboto">{title}</h1>
        
//         <div className="w-full bg-white shadow-lg p-6 rounded-lg overflow-auto">
//           {isList ? (
//             <ol className="list-decimal ml-6 space-y-2 text-lg font-roboto">
//               {content ? content.map((item, index) => (
//                 <li key={index} className="leading-relaxed">
//                   {item}
//                 </li>
//               )) : listItems.map((item, index) => (
//                 <li key={index} className="leading-relaxed">
//                   {item}
//                 </li>
//               ))}
//             </ol>
//           ) : (
//             <pre className="text-lg leading-relaxed whitespace-pre-wrap font-roboto">{content}</pre>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slide;


// src/components/Slide.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ title, content, isList, listItems }) => {
  return (
    <div 
      className="custom-container flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className='content-container w-full bg-white text-green-800 bg-opacity-80 rounded-lg shadow-lg p-6'>
        <header className="py-2 mx-2 ml-0 self-start">
          <Link to="/" className="arrow_back text-lg text-blue-600 hover:underline">
            &lt;
          </Link>
        </header>
        
        <h1 className="text-4xl font-bold mb-6 font-roboto">{title}</h1>
        
        <div className="w-full">
          {isList ? (
            <ol className="list-decimal ml-6 space-y-2 text-lg font-roboto">
              {content ? content.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              )) : listItems.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <pre className="text-lg leading-relaxed whitespace-pre-wrap font-roboto">{content}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide;
