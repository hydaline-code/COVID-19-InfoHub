import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSkull,faPeopleArrows, faChartBar, faMask,} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Details = ({
  date,
  country,
  incident,
  cases,
  deaths,
  ratio,
}) => (
  <div className="component">
    <h2 className="country-name">
      {country} ({date.slice(0, 10)})
    </h2>
    <div className="statistic">
      <div className="statistic-item">
        <div className="icon">
          <FontAwesomeIcon icon={faMask} />
        </div>
        <div className="text">
          <p className="statistic-label">INCIDENT</p>
          <p className="statistic-value">{incident}</p>
        </div>
      </div>
      <div className="statistic-item">
        <div className="icon">
          <FontAwesomeIcon icon={faPeopleArrows} />
        </div>
        <div className="text">
          <p className="statistic-label">CONFIRMED</p>
          <p className="statistic-value">{cases}</p>
        </div>
      </div>
      <div className="statistic-item">
        <div className="icon">
          <FontAwesomeIcon icon={faSkull} />
        </div>
        <div className="text">
          <p className="statistic-label">DEATH(S)</p>
          <p className="statistic-value">{deaths}</p>
        </div>
      </div>
      <div className="statistic-item">
        <div className="icon">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
        <div className="text">
          <p className="statistic-label">RATIO</p>
          <p className="statistic-value">{ratio}</p>
        </div>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  date: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
  deaths: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired,
  incident: PropTypes.string.isRequired,
};

export default Details;
