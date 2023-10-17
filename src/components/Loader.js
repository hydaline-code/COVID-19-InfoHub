import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
import '../components/styles/Loader.css';


const FullPageLoader = () => {
  return (
    <div className="spinner">
      <FidgetSpinner className="spinner"
        color="rgba(0, 128, 255, 0.5)"
        height={100}
        width={100}
        ballColors={['#ff0000', '#ff0000', '#ff0000']}
        backgroundColor="	#cc0000"
        
      />
    
    </div>
  );
};

export default FullPageLoader;
