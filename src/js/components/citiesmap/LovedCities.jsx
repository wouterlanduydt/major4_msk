import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

import LovedCity from './LovedCity';

const LovedCities = ({store}) => {

  const {lovedCities} = store;

  return (
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
  );
};

LovedCities.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(LovedCities));
