
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import FullPageLoader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {  getData } from './redux/home/HomeSlice';
import Home from './components/Home';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.home.state);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (dataState === 'Success') {
      setIsLoading(false);
    }
  }, [dataState]);

  return (
    <div className="app">

      {isLoading ? (
        <FullPageLoader />
      
      )
     : (
        <div>
          <FontAwesomeIcon icon={faCheckSquare} />
          Your data is been fetched sucessfully
          <Home />
        </div>
        
      )}
    </div>
  );
};

export default App;

