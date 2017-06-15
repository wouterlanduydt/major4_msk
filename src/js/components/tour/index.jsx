import React from 'react';
import {string, number} from 'prop-types';
import {observer} from 'mobx-react';
import ToursList from './ToursList';
import createFilename from '../../lib/createFilename';

const Tour = ({map, title, desc, id}) => {
  return (
    <section className='tours'>
      <div className='tours__left'>
        <img className='tours__left__map' src={`../../../assets/svg/${map}.svg`} alt={map} />
        <img className='tours__left__image' src={`../../../assets/img/tour_img${id}.jpg`} alt={title} />
      </div>
      <div className='tours__right'>
        <ToursList />
        <header>
          <h2 className='tours__right__title'>{title}</h2>
        </header>
        <p className='tours__right__desc'>{desc}</p>
        <a download={`${createFilename(title)}.pdf`} href={`../../../assets/tickets/ticket_web_${id}.pdf`} title='Tour' className='result__link-dwnld result__link' >Download deze tour</a>
      </div>
    </section>
  );
};

Tour.propTypes = {
  map: string.isRequired,
  title: string.isRequired,
  desc: string.isRequired,
  id: number.isRequired
};

export default observer(Tour);
