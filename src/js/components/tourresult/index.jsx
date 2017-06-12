import React from 'react';
import {string} from 'prop-types';
import {Link} from 'react-router-dom';

const TourResult = ({desc, title, map}) => {
  return (
    <section>
      <img src={`../../../assets/svg/${map}.svg`} alt={`${map}`} />
      <header>
        <h1>{title}</h1>
      </header>
      <p>{desc}</p>

      <Link to='/' >
        <p>Home</p>
      </Link>
    </section>
  );
};

TourResult.propTypes = {
  desc: string.isRequired,
  title: string.isRequired,
  map: string.isRequired
};

export default TourResult;
