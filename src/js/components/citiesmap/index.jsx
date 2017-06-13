import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer, PropTypes} from 'mobx-react';
import classNames from 'classnames';
import EuropeMap from './EuropeMap';
import CityDetails from './CityDetails';
import LovedCities from './LovedCities';

const CitiesMap = ({store}) => {

  const {selectedCity, nTotalCities} = store;
  let enoughCitiesSeleted;

  (nTotalCities >= 3) ? enoughCitiesSeleted = false : enoughCitiesSeleted = true;

  return (
    <section>
      <EuropeMap />
      <CityDetails {...selectedCity} />
      <LovedCities />

      <p>{nTotalCities} {nTotalCities === 1 ? `stad` : `steden`} geselecteerd</p>
      <Link to='/create/stats' >
        <p className={classNames({hidden: enoughCitiesSeleted})}>Volgende</p>
      </Link>

    </section>
  );
};

CitiesMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(CitiesMap));
