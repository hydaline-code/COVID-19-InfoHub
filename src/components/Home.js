
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch, faVialVirus, faArrowRight, faAngleLeft, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setDetails } from '../redux/home/HomeSlice';
import FullPageLoader from './Loader';
import Details from './Alldetails';
import './styles/Home.css';


const Info = ({ confirmed, deaths }) => (
  <div className="Info">
    <h2 className="global">  <i>
          <FontAwesomeIcon icon={faEarthAfrica} />
        </i>
    Global Corona-virus  Census Cases</h2>
    <div className="Info-Wrapper">
      <span className="span">
        <p className="confirmed-text-home">CONFIRMED</p>
        <p className="confirmed">{confirmed}</p>
      </span>
      <span>
        <p className="deaths-text">DEATHS</p>
        <p className="deaths">{deaths}</p>
      </span>
    </div>
  </div>
);

const Section = ({ country, cases }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setDetails(country));
  }
  return (
    <div  className="section" >
      <span className='country-info'>
      <p className="country-section-text">{country}</p>
      <p className="cases">{cases}</p>
      </span>
       <button type="button" className="section-btn" onClick={() => handleClick()}>
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </button>
      
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { data, state, details } = useSelector((store) => store.home);
  const [searchData, setSearchData] = useState('');
  const arrowBack = useRef(null);

  useEffect(() => {
    if (data.length < 1) {
      dispatch(getData());
    }
  }, [dispatch, data]);

  function handleArrowBack() {
    dispatch(setDetails(null));
    arrowBack.current.style.display = 'none';
  }

  let content;

  if (state === 'Pending') {
    return <FullPageLoader />;
  }

  if (state === 'Success') {
    content = (
        <div className="second-row">
        {data.rawData
          .slice(0, 700)
          .filter((x) => x.Country_Region.toLowerCase().includes(
            searchData.toLowerCase(),
          ))
          .map((item, index) => (
            <Section
              key={uuidv4()}
              index={index}
              country={item.Combined_Key}
              cases={item.Confirmed}
            />
          ))}
      </div>
    );
  }

  if (state === 'Success' && details !== null && arrowBack.current !== null) {
    arrowBack.current.style.display = 'block';
    const indexOfData = data.rawData.findIndex(
      (obj) => obj.Combined_Key === details
    );
    content = (
      <div className="details-row">
        <Details
          date={data.rawData[indexOfData].Last_Update}
          country={data.rawData[indexOfData].Combined_Key}
          incident={parseFloat(data.rawData[indexOfData].Incident_Rate).toFixed(4)}
          cases={data.rawData[indexOfData].Confirmed}
          deaths={data.rawData[indexOfData].Deaths}
          ratio={parseFloat(data.rawData[indexOfData].Case_Fatality_Ratio).toFixed(4)}
        />
      </div>
    );
  }

  return (
    <div className="home">
      <nav className="navbar">
        <i
          ref={arrowBack}
          role="button"
          tabIndex={0}
          className="goBack"
          onClick={handleArrowBack}
          onKeyDown={handleArrowBack}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>
        <h3 className="covid-19-report">
          <FontAwesomeIcon icon={faVialVirus} />
          COVID-19 REPORTS
        </h3>
        <span className="searchBar">
          <input
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="Search for a country"
          />
          <i className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </span>
      </nav>
      <Info
        confirmed={state === 'Success' ? data.summaryStats.global.confirmed : 0}
        deaths={state === 'Success' ? data.summaryStats.global.deaths : 0}
      />
      {content}
    </div>
  );
};


Info.propTypes = {
  confirmed: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
};

Section.propTypes = {
  cases: PropTypes.string.isRequired,
};

export default Home;


