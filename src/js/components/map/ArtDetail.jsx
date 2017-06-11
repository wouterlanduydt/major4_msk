import React from 'react';
import {string} from 'prop-types';

const ArtDetail = ({name, painter, city, period, desc, image}) => {

  return (
    <article>
      <img src={`../../../assets/img/${image}.jpg`} alt={`${image}`} />
      <h1>{name}</h1>
      <p>{painter}</p>
      <p>{city}, {period}</p>
      <p>{desc}</p>
    </article>
  );

};

ArtDetail.propTypes = {
  name: string,
  painter: string,
  city: string,
  period: string,
  desc: string,
  image: string
};

ArtDetail.defaultProps = {
  name: ``,
  painter: ``,
  city: ``,
  period: ``,
  desc: ``,
  image: ``
};

export default ArtDetail;
