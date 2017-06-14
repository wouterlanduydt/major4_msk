import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';

const CreateStats = ({store}) => {

  const {nTotalDistance, nTotalPainters, nTotalCities} = store;

  return (
    <section className='stats'>

      <Link to='/create'>
        <span className='stats__back-btn red-btn'>Terug</span>
      </Link>

      <div className='stats__container'>
        <header>
          <h1 className='stats__title'>Waarom zou je...</h1>
        </header>

        <ul className='stats__list'>
          <li className='stats__list__item stats__list__item1'><span className='stats__list__bold'><CountUp className='stats__list__number' start={0} end={nTotalDistance} duration={2.5} />km</span> reizen</li>
          <li className='stats__list__item stats__list__item2'>door <span className='stats__list__bold'><CountUp className='stats__list__number' start={0} end={nTotalCities} duration={10.5} /> verschillende</span> steden</li>
          <li className='stats__list__item stats__list__item3'>om <span className='stats__list__bold'><CountUp className='stats__list__number' start={0} end={nTotalPainters} duration={5} /> kunstenaars</span> te zien</li>
        </ul>

        <p className='stats__justmsk'>Die je ook gewoon in het <span className='stats__justmsk-bold'>MSK</span> kan bewonderen?</p>

        <Link to='/create/result'>
          <span className='stats__next-btn red-btn'>Bereken jouw tour</span>
        </Link>
      </div>

      <img className='stats__img' src='../../../assets/img/stats-bg-image.jpg' alt='walking in msk' width='1660' height='920' />

    </section>
  );
};

CreateStats.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(CreateStats));
