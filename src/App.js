import React, { useState, useEffect } from 'react';
import FullPageLoader from './components/Loader';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, e.g., by fetching data or other initialization
    setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Simulated loading time: 2 seconds
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div>Your app content goes here</div>
      )}
    </div>
  );
};

export default App;
