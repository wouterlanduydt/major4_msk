import React from 'react';
import {number} from 'prop-types';

const TourResultActions = ({id}) => {
  return (
    <div className='result__container-actions'>
      <a download='mijn-persoonlijke-tour.jpg' href={`../../../assets/tourimgs/tour${id}.jpg`} title='Tour' className='result__link-dwnld result__link' >Download deze tour</a>
      <a href='https://maps.google.com?saddr=Current+Location&daddr=Museum+voor+Schone+Kunsten' target='_blank' className='result__link-route result__link' >Op naar het museum!</a>
    </div>
  );
};

TourResultActions.propTypes = {
  id: number.isRequired
};

export default TourResultActions;
