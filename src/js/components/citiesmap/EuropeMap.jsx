import React from 'react';
import {PropTypes} from 'mobx-react';

const EuropeMap = ({cities}) => {

  return (
    <ul>
      {
        cities.map(
        c => (
          <li key={c.name}>{c.name} {c.country} {c.artStyle} {c.artStyle_id} {c.nPainters} {c.nMusea} {c.distance} {c.lon} {c.lat}</li>
          )
        )
      }
    </ul>
  );
};

EuropeMap.propTypes = {
  cities: PropTypes.observableArray.isRequired
};

export default EuropeMap;
