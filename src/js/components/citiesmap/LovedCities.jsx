import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import LovedCity from './LovedCity';

const LovedCities = ({store}) => {

  const {lovedCities, nTotalCities} = store;
  const citiesToSelect = 3 - nTotalCities;
  const citiesToSelectItems = [];

  for (let i = 0;i < citiesToSelect;i ++) {
    citiesToSelectItems.push(<li key={i} className='create__loved__item create__loved__item-empty'></li>);
  }

  return (
    <section className='create__loved'>
      <h2 className='create__loved__title'>Gekozen landen</h2>
      <ul>
        {
          lovedCities.map(
          l => (
            <LovedCity
              {...l}
              key={l.id}
            />
            )
          )
        }
        {citiesToSelectItems}
      </ul>
    </section>
  );
};

LovedCities.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(LovedCities));
