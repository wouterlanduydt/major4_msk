import React from 'react';
import {string, number} from 'prop-types';

import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

const Tour = ({map, title, desc, id}) => {
  return (
    <li>
      <img src={`../../../assets/svg/${map}.svg`} alt={`${map}`} />
      <header>
        <h2>{title}</h2>
      </header>
      <p>{desc}</p>

      <Link to={`tour/${id}`} >
        <p>Ontdek meer</p>
      </Link>

    </li>
  );
};

Tour.propTypes = {
  map: string.isRequired,
  title: string.isRequired,
  desc: string.isRequired,
  id: number.isRequired
};

export default observer(Tour);
