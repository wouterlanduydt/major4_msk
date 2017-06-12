import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';
import {Link} from 'react-router-dom';
import TourResultActions from './TourResultActions';

const TourResult = ({id, desc, title, map, store}) => {

  const {clearLovedCities} = store;

  const handleClickHome = () => clearLovedCities();

  return (
    <section>
      <img src={`../../../assets/svg/${map}.svg`} alt={`${map}`} />
      <header>
        <h1>{title}</h1>
      </header>
      <p>{desc}</p>
      <TourResultActions id={id} />

      <Link to='/' >
        <p onClick={handleClickHome}>Home</p>
      </Link>
    </section>
  );
};

TourResult.propTypes = {
  id: number.isRequired,
  desc: string.isRequired,
  title: string.isRequired,
  map: string.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(TourResult));
