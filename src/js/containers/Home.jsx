import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <section className='homepage'>
      <img src='../../assets/img/homepage01.jpg' alt='homepage01' className='homepage__img01' />
      <div className='homepage__container'>
        <div>
          <header>
            <h1 className='homepage__title'>Zoek cultuur <br />niet te ver</h1>
            <h2 className='homepage__subtitle'>Ontdek jouw perfecte cultuurtrip.<br />Stel hier je reis samen.</h2>
          </header>
          <p className='homepage__introtext'>Reis je graag en hou je van cultuur? Zou je graag alles willen weten over bekende kunstenaars en hun kunstwerken?</p>
          <Link to='/create' >
            <button className='homepage__create-btn'>Stel je cultuurtrip samen</button>
          </Link>
        </div>
        <Link to='/tours' >
          <p className='homepage__discover-btn'>Of kies een tour uit het overzicht</p>
        </Link>
        <a href='https://www.mskgent.be' className='homepage__link-msk'>www.mskgent.be</a>
      </div>
    </section>
  );
};

export default Home;
