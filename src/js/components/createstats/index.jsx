import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

const CreateStats = ({store}) => {

  const {nTotalDistance, nTotalPainters, nTotalCities} = store;

  return (
    <section>

      <Link to='/create'>
        <p>Terug</p>
      </Link>

      <header>
        <h1>Waarom zou je...</h1>
      </header>

      <ul>
        <li>{nTotalDistance}km reizen</li>
        <li>door {nTotalCities} verschillende steden</li>
        <li>om {nTotalPainters} kunstenaars te zien</li>
      </ul>

      <p>Die je ook gewoon in het Museum voor Schone Kunsten kan bewonderen?</p>

      <Link to='/create/result'>
        <p>Bereken jouw tour</p>
      </Link>

    </section>
  );
};

CreateStats.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(CreateStats));
