import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <section>
      <header>
        <h1>Zoek cultuur niet te ver</h1>
      </header>
      <p>Naar welke steden zou jij willen reizen? Hou je van cultuur, en wil je hier graag alles over weten? Stel je reis samen, en ontdek wat jou perfecte citytrip zou zijn.</p>
      <ul>
        <Link to='/create' >
          <li>Stel je reis samen</li>
        </Link>
        <Link to='/tours' >
          <li>Ontdek de tours</li>
        </Link>
        <Link to='/map' >
          <li>Op de kaart</li>
        </Link>
      </ul>
    </section>
  );

};

export default Home;
