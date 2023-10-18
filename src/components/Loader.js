// import React from 'react';
// import { FidgetSpinner } from 'react-loader-spinner';
// import '../components/styles/Loader.css';

// const FullPageLoader = () => {
//   return (
    
//     <div className="spinner">
// <h2 className='title'>Welcome to corovirus worlds reports from 2020 till date </h2>
//       <FidgetSpinner className="spinner"
//         color="rgba(0, 128, 255, 0.5)"
//         height={100}
//         width={100}
//         ballColors={['#ffffff', '#ffffff', '#ffffff']}
//         backgroundColor="	#cc2060"
        
//       />
    
//     </div>
//   );
// };

// export default FullPageLoader;

// import React, { useState, useEffect } from 'react';
// import { FidgetSpinner } from 'react-loader-spinner';
// import '../components/styles/Loader.css';

// const FullPageLoader = () => {
//   const [text, setText] = useState('');
//   const loadingText = "Welcome to coronavirus world's reports from 2020 till date";

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setText((prevText) => {
//         if (prevText.length < loadingText.length) {
//           return prevText + loadingText[prevText.length];
//         }
//         clearInterval(interval); 
//         return prevText;
//       });
//     }, 200); 
//     return () => {
//       clearInterval(interval); // Clear the interval on unmount
//     };
//   }, []);

//   return (
//     <div className="spinner">
//       <h2 className="title">{text}</h2>
//       <FidgetSpinner
//         color="rgba(0, 128, 255, 0.5)"
//         height={100}
//         width={100}
//         ballColors={['#ff0f0f', '#ff0f0f', '#ff0f0f']}
//         backgroundColor="#cc2060"
//       />
//        <FidgetSpinner
//         color="rgba(0, 128, 255, 0.5)"
//         height={100}
//         width={100}
//         ballColors={['#ff0f0f', '#ff0f0f', '#ff0f0f']}
//         backgroundColor="#cc2060"
//       />
//        <FidgetSpinner
//         color="rgba(0, 128, 255, 0.5)"
//         height={100}
//         width={100}
//         ballColors={['#ff0f0f', '#ff0f0f', '#ff0f0f']}
//         backgroundColor="#cc2060"
//       />
//     </div>
//   );
// };

// export default FullPageLoader;

import React, { useState, useEffect } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
import '../components/styles/Loader.css';

const FullPageLoader = () => {
  const [text, setText] = useState('');
  const loadingText = "...Exploring a Comprehensive COVID-19 World Statistics: Cases, Deaths, and Confirmations (2020-Present)";

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText.length < loadingText.length) {
          return prevText + loadingText[prevText.length];
        }
        clearInterval(interval); 
        return prevText;
      });
    }, 100); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  const spinners = Array.from({ length: 3 }, (_, index) => (
    <FidgetSpinner
      key={index}
      color="rgba(0, 128, 255, 0.5)"
      height={100}
      width={100}
      ballColors={['#ffffff', '#ffffff', '#ffffff']}
      backgroundColor="#cc2060"
    />
  ));

  return (
    <div className="spinner">
      <h2 className="title">{text}</h2>
      <div className="spinner-circle">{spinners}</div>
    </div>
  );
};

export default FullPageLoader;
