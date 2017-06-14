import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';
import {Link} from 'react-router-dom';
import TourResultActions from './TourResultActions';

const TourResult = ({id, desc, title, map, store}) => {

  const {clearLovedCities} = store;

  const handleClickHome = () => clearLovedCities();

  return (
    <section className='result'>
      <div className='result__container-left'>
        <Link to='/' >
          <span className='red-back-btn result__back-btn' onClick={handleClickHome}>Home</span>
        </Link>
        <img className='result__tour' src={`../../../assets/svg/${map}.svg`} alt={`${map}`} />
      </div>
      <div className='result__container-right'>
        <div className='result__container-right-top'>
          <header>
            <h1 className='result__title'>{title}</h1>
          </header>
          <p className='result__desc'>{desc}</p>
          <TourResultActions id={id} />
        </div>
        <img src={`../../../assets/img/tour_img${id}.jpg`} alt={`tour_img${id}`} className='result__tour-img' />
      </div>
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
