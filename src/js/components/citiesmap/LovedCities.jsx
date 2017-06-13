import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import LovedCity from './LovedCity';

const LovedCities = ({store}) => {

  const {lovedCities} = store;

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
      </ul>
    </section>
  );
};

LovedCities.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(LovedCities));
