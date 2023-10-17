// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Third-party library import
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'; // Another third-party library import
// import FullPageLoader from './components/Loader'; 



// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading, e.g., by fetching data or other initialization
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 7000); // Simulated loading time: 2 seconds
//   }, []);

//   return (
//     <div className="app">
//       {isLoading ? (
//         <FullPageLoader />
//       ) : (
//         <div>Your app content goes here
//            <FontAwesomeIcon icon={faCheckSquare} />
//         </div>
        
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import FullPageLoader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {  getData } from './redux/home/HomeSlice';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.home.state);

  useEffect(() => {
    // Initiate data fetching when the component mounts
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    // Listen for changes in the data state and stop loading when data is successfully fetched
    if (dataState === 'Success') {
      setIsLoading(false);
    }
  }, [dataState]);

  return (
    <div className="app">
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div>
          <FontAwesomeIcon icon={faCheckSquare} />
          Your data is been fetched sucessfully
        </div>
      )}
    </div>
  );
};

export default App;

