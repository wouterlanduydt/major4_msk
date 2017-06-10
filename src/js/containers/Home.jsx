import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <section>
      <header>
        <h1>Zoek cultuur niet te ver</h1>
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <Link to='/create' >
          <li>Stel je reis samen</li>
        </Link>
        <Link to='/tours' >
          <li>Ontdek de touren</li>
        </Link>
        <Link to='/map' >
          <li>Op de kaart</li>
        </Link>
      </ul>
    </section>
  );

};

export default Home;
