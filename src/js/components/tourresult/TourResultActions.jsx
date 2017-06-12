import React from 'react';
import {number} from 'prop-types';

const TourResultActions = ({id}) => {
  return (
    <div>
      <a download='mijn-persoonlijke-tour.jpg' href={`../../../assets/tourimgs/tour${id}.jpg`} title='Tour'>Download deze tour</a>
      <a href='https://maps.google.com?saddr=Current+Location&daddr=Museum+voor+Schone+Kunsten' target='_blank'>Op naar het museum!</a>
    </div>
  );
};

TourResultActions.propTypes = {
  id: number.isRequired
};

export default TourResultActions;
