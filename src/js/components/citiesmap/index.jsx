import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer, PropTypes} from 'mobx-react';
import EuropeMap from './EuropeMap';
import CityDetails from './CityDetails';
import LovedCities from './LovedCities';

const CitiesMap = ({store}) => {

  const {selectedCity, nTotalCities} = store;

  return (
    <section>
      <EuropeMap />
      <CityDetails {...selectedCity} />
      <LovedCities />

      <p>{nTotalCities} steden geselecteerd</p>
      <Link to='/create/stats' >
        <p>Volgende</p>
      </Link>

    </section>
  );
};

CitiesMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(CitiesMap));
