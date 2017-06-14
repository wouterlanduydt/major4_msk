import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';
import classNames from 'classnames';

const CityDetails = ({id, name, store}) => {

  const {addLoved, enoughCitiesSeleted} = store;

  const handleAddLoved = () => {
    addLoved(id);
  };

  if (name === ``) {
    return (
      <section className='create__detail create__detail-no-selected'>
        <p>Klik op een stad voor meer info</p>
      </section>
    );
  } else {
    return (
      <section className='create__detail'>
        <header>
          <h1 className='create__detail__title'>{name}</h1>
        </header>
        <p className='create__detail__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          {/* Lijst van de kunstenaars */}
          <li>
            <img></img>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
        </ul>
        <button
          disabled={enoughCitiesSeleted}
          className={classNames(`create__detail__add-btn`, {'button-disabled': enoughCitiesSeleted})}
          onClick={handleAddLoved}>Hier wil ik naartoe!
        </button>
      </section>
    );
  }
};

CityDetails.propTypes = {
  id: number,
  name: string,
  store: PropTypes.observableObject.isRequired
};

CityDetails.defaultProps = {
  id: 0,
  name: ``,
  nMusea: 0,
  nPainters: 0,
  distance: 0,
  loved: false
};

export default inject(`store`)(observer(CityDetails));
