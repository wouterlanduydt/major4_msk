import React from 'react';
import {Link} from 'react-router-dom';

import CitiesMap from '../components/citiesmap/';

const Create = () => {
  return (
    <section className='create'>
      <Link to='/' >
        <span className='create__back-btn'>Terug</span>
      </Link>
      <CitiesMap />
    </section>
  );
};

export default Create;
