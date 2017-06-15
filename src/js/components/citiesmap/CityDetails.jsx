import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';
import classNames from 'classnames';
import Artwork from './Artwork';

const CityDetails = ({id, name, desc, store}) => {

  const {addLoved, enoughCitiesSeleted, randomArtworks} = store;

  const handleAddLoved = () => {
    addLoved(id);
  };

  if (name === ``) {
    return (
      <section className='create__detail create__detail-no-selected'>
        <p>Klik op een stad voor meer info.</p>
      </section>
    );
  } else {
    return (
      <section className='create__detail'>
        <header>
          <h1 className='create__detail__title'>{name}</h1>
        </header>
        <div className='create__detail__container'>
          <p className='create__detail__desc'>{desc}</p>
          <ul className='create__artworks'>
            {
              randomArtworks.map(
              r => (
                <Artwork {...r} key={r.id} />
                )
              )
            }
          </ul>
        </div>
        <button
          disabled={enoughCitiesSeleted}
          className={classNames(`create__detail__add-btn`, {'button-disabled': enoughCitiesSeleted})}
          onClick={handleAddLoved}>Hier wil ik naartoe
        </button>
      </section>
    );
  }
};

CityDetails.propTypes = {
  id: number,
  name: string,
  desc: string,
  store: PropTypes.observableObject.isRequired
};

CityDetails.defaultProps = {
  id: 0,
  name: ``,
  desc: ``,
  nMusea: 0,
  nPainters: 0,
  distance: 0,
  loved: false
};

export default inject(`store`)(observer(CityDetails));
