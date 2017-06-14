import React from 'react';
import {string} from 'prop-types';

const Artwork = ({painter, name, image}) => {
  return (
    <li className='create__artworks__item'>
      <img className='create__artworks__image' src={`../../../assets/img/artworks/${image}.jpg`} alt='artwork' />
      <ul className='create__artworks__details'>
        <li className='create__artworks__title'>{name}</li>
        <li className='create__artworks__painter'>{painter}</li>
      </ul>
    </li>
  );
};

Artwork.propTypes = {
  painter: string.isRequired,
  name: string.isRequired,
  image: string.isRequired
};

export default Artwork;
