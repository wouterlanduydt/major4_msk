import React from 'react';
import {Link} from 'react-router-dom';

const TourResult = () => {
  return (
    <section>

      <header>
        <h1>De gepaste tour</h1>
      </header>

      <Link to='/' >
        <p>Home</p>
      </Link>
    </section>
  );
};

export default TourResult;
