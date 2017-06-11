import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <section>
      <header>
        <h1>Zoek cultuur niet te ver</h1>
      </header>
      <p>Naar welke steden zou jij willen reizen? Hou je van cultuur, en wil je hier graag alles over weten? Stel je reis samen, en ontdek wat jou perfecte cultuurtrip zou zijn.</p>
      <ul>
        <Link to='/tours' >
          <li>Ontdek de touren</li>
        </Link>
        <Link to='/map' >
          <li>Op de kaart</li>
        </Link>
      </ul>
      <Link to='/create' >
        <button>Stel je cultuurtrip samen</button>
      </Link>
    </section>
  );

};

export default Home;
