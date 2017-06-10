import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer, PropTypes} from 'mobx-react';
import EuropeMap from './EuropeMap';
import CityDetails from './CityDetails';

const CitiesMap = ({store}) => {

  const {cities} = store;

  return (
    <section>
      <EuropeMap cities={cities} />
      <CityDetails />

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
