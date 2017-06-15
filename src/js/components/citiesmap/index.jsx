import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer, PropTypes} from 'mobx-react';
import classNames from 'classnames';
import EuropeMap from './EuropeMap';
import CityDetails from './CityDetails';
import LovedCities from './LovedCities';

const CitiesMap = ({store}) => {

  const {selectedCity, enoughCitiesSeleted} = store;

  return (
    <section className='create__container'>
      <EuropeMap />
      <div className='create__right'>
        <CityDetails {...selectedCity} />
        <LovedCities />
        <Link to='/create/stats' className='create__next-container'>
          <button disabled={!enoughCitiesSeleted}
            className={classNames(`create__next`, {'button-disabled': !enoughCitiesSeleted})}>
            Ga op reis › </button>
        </Link>
      </div>
    </section>
  );
};

CitiesMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(CitiesMap));
