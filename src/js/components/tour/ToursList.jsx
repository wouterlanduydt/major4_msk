import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
import classNames from 'classnames';

const ToursList = ({store}) => {

  const {tours, getTourById, setSelectedTour, selectedTour} = store;

  const onTitleClick = id => {
    const selectedTour = getTourById(id);
    setSelectedTour(selectedTour);
  };

  return (
    <nav>
      <ul className='tours__nav__list'>
        {
          tours.map(
            t => (
              <li className='tours__nav__list-li' key={t.id}>
                <a
                  className={classNames(`tours__nav__list__text`, {
                    'tours__nav__list__text-selected': selectedTour.id === t.id ? true : false
                  })}
                  onClick={() => onTitleClick(t.id)}
                  href='#' >{t.title}</a>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
};

ToursList.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(ToursList));
