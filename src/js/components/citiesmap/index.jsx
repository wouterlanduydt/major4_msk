import React from 'react';
import {Link} from 'react-router-dom';
import EuropeMap from './EuropeMap';
import CityDetails from './CityDetails';

const CitiesMap = () => {
  return (
    <section>
      <EuropeMap />
      <CityDetails />

      <Link to='/create/stats' >
        <p>Volgende</p>
      </Link>

    </section>
  );
};

export default CitiesMap;
