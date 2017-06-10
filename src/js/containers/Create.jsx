import React from 'react';
import {Link} from 'react-router-dom';

import CitiesMap from '../components/citiesmap/';

const Create = () => {
  return (
    <section>
      <Link to='/' >
        <p>Terug</p>
      </Link>
      <header>
        <h1>Welke steden vind je interessant?</h1>
      </header>
      <CitiesMap />
    </section>

  );
};

export default Create;
