import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

import Tour from '../components/tour';

const Tours = ({store}) => {

  const {selectedTour} = store;

  return (
    <section className='tours__container'>
      <Link to='/' >
        <span className='red-btn tours__back'>Terug</span>
      </Link>
      <Tour {...selectedTour} />
    </section>

  );
};

Tours.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(Tours));
