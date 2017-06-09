import React from 'react';
import {string, number} from 'prop-types';

import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

const Tour = ({tour, tourTitle, tourText, _id}) => {
  return (
    <li>
      <img src={`../../../assets/svg/${tour}.svg`} alt={`${tour}`} />
      <header>
        <h2>{tourTitle}</h2>
      </header>
      <p>{tourText}</p>

      <Link to={`tours/${_id}`} >
        <p>Ontdek meer</p>
      </Link>

    </li>
  );
};

Tour.propTypes = {
  tour: string.isRequired,
  tourTitle: string.isRequired,
  tourText: string.isRequired,
  _id: number.isRequired
};

export default observer(Tour);
