import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';

const CreateStats = ({store}) => {

  const {nTotalDistance, nTotalPainters, nTotalCities} = store;

  return (
    <section className='stats'>

      <Link to='/create'>
        <span className='stats__back-btn red-back-btn'>Terug</span>
      </Link>

      <div className='stats__container'>
        <header>
          <h1 className='stats__title'>Waarom zou je...</h1>
        </header>

        <ul className='stats__list'>
          <li className='stats__list__item'><span><CountUp className='stats__number' start={0} end={nTotalDistance} duration={1.8} />km</span> reizen</li>
          <li className='stats__list__item'>door <span></span><CountUp className='stats__number' start={0} end={nTotalCities} duration={1.8} /> verschillende steden</li>
          <li className='stats__list__item'>om <span></span><CountUp className='stats__number' start={0} end={nTotalPainters} duration={1.8} /> kunstenaars te zien</li>
        </ul>

        <p>Die je ook gewoon in het Museum voor Schone Kunsten kan bewonderen?</p>

        <Link to='/create/result'>
          <span>Bereken jouw tour</span>
        </Link>
      </div>

    </section>
  );
};

CreateStats.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(CreateStats));
