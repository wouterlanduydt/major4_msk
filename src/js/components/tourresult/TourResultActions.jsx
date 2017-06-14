import React from 'react';
import {number, string} from 'prop-types';
import createFilename from '../../lib/createFilename';

const TourResultActions = ({id, title}) => {
  return (
    <div className='result__container-actions'>
      <a download={`${createFilename(title)}.pdf`} href={`../../../assets/tickets/ticket_web_${id}.pdf`} title='Tour' className='result__link-dwnld result__link' >Download deze tour</a>
      <a href='https://maps.google.com?saddr=Current+Location&daddr=Museum+voor+Schone+Kunsten' target='_blank' className='result__link-route result__link' >Op naar het museum!</a>
    </div>
  );
};

TourResultActions.propTypes = {
  id: number.isRequired,
  title: string.isRequired
};

export default TourResultActions;
