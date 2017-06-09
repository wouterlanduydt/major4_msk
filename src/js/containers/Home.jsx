import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
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
  );

};

export default Home;
