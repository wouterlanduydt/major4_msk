import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number, bool} from 'prop-types';

const CityDetails = ({id, name, nMusea, nPainters, distance, loved, store}) => {

  const {getCityById, toggleLove} = store;

  const handleChange = () => {
    const city = getCityById(id);
    toggleLove(city);
  };

  return (
      <section>
        <header>
          <h1>{name}</h1>
        </header>
        <p>{distance} km</p>
        <input
          type='checkbox'
          value='like'
          onChange={handleChange}
          checked={loved}
         />
        <ul>
          <li>{nMusea} musea</li>
          <li>{nPainters} kunstenaars</li>

          {/* Lijst van de kunstenaars */}
          <ul>
            <li></li>
            <li></li>
          </ul>
        </ul>
      </section>
  );
};

CityDetails.propTypes = {
  id: number,
  name: string,
  nMusea: number,
  nPainters: number,
  distance: number,
  loved: bool,
  store: PropTypes.observableObject.isRequired
};

CityDetails.defaultProps = {
  id: 0,
  name: `Stad`,
  nMusea: 0,
  nPainters: 0,
  distance: 0,
  loved: false
};

export default inject(`store`)(observer(CityDetails));
