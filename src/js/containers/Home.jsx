import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <section className='homepage'>
      <header>
        <h1 className='homepage__title'>Zoek cultuur <br />niet te ver</h1>
        <h2 className='homepage__subtitle'>Ontdek jouw perfecte cultuurtrip.<br />Stel hier je reis samen.</h2>
      </header>
      <p className='homepage__introtext'>Reis je graag en hou je van cultuur? Zou je graag alles willen weten over bekende kunstenaars en hun kunstwerken?</p>
      <Link to='/tours' >
        <p className='homepage__discover-btn'>Ontdek de touren</p>
      </Link>
      <Link to='/create' >
        <button className='homepage__create-btn'>Stel je cultuurtrip samen</button>
      </Link>
    </section>
  );

};

export default Home;
