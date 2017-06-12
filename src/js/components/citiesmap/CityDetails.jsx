import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';

const CityDetails = ({id, name, nMusea, nPainters, distance, store}) => {

  const {addLoved} = store;

  const handleAddLoved = () => {
    addLoved(id);
  };

  if (name === ``) {
    return <p>Klik op een stad voor meer info</p>;
  } else {
    return (
        <section>
          <header>
            <h1>{name}</h1>
          </header>
          <p>{distance} km</p>
          <button onClick={handleAddLoved}>Hier wil ik naartoe!</button>
          <ul>
            <li>{nMusea} musea</li>
            <li>{nPainters} kunstenaars</li>

            {/* Lijst van de kunstenaars */}
            <li>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </li>

          </ul>
        </section>
    );
  }
};

CityDetails.propTypes = {
  id: number,
  name: string,
  nMusea: number,
  nPainters: number,
  distance: number,
  store: PropTypes.observableObject.isRequired
};

CityDetails.defaultProps = {
  id: 0,
  name: ``,
  nMusea: 0,
  nPainters: 0,
  distance: 0,
  loved: false
};

export default inject(`store`)(observer(CityDetails));
