import React from 'react';
import {Link} from 'react-router-dom';

const CreateStats = () => {
  return (
    <section>

      <Link to='/create'>
        <p>Terug</p>
      </Link>

      <header>
        <h1>Waarom zou je...</h1>
      </header>

      <ul>
        <li>2432km reizen</li>
        <li>door 4 verschillende landen</li>
        <li>om 23 kunstenaars te zien</li>
      </ul>

      <p>Die je ook gewoon in het Museum voor Schone Kunsten kan bewonderen?</p>

      <Link to='/create/result'>
        <p>Bereken jouw tour</p>
      </Link>

    </section>
  );
};

export default CreateStats;
