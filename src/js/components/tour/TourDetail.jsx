import React from 'react';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';

const TourDetail = ({map, title, desc}) => {
  return (
    <section>

      <Link to={`/tours`} >
        <p>terug</p>
      </Link>

      <img src={`../../../assets/svg/${map}.svg`} alt={`${map}`} />
      <header>
        <h2>{title}</h2>
      </header>
      <p>{desc}</p>
    </section>
  );
};

TourDetail.propTypes = {
  map: string.isRequired,
  title: string.isRequired,
  desc: string.isRequired
};

export default TourDetail;
