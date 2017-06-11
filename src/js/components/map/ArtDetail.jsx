import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const ArtDetail = ({store}) => {

  const {selectedArtwork} = store;
  let {detailShown} = store;
  const {city, desc, image, name, painter, period} = selectedArtwork;

  const clickShowDetailHandler = e => {
    e.preventDefault;
    if (detailShown) {
      detailShown = false;
    } else if (!detailShown) {
      detailShown = true;
    }
  };

  if (name) {
    return (
      <article className='map_detail_container'>
        <img src={`../../../assets/img/${image}.jpg`} alt={`${image}`} className='map_detail_image' />
        <h1>{name}</h1>
        <p>{painter}</p>
        <button onClick={clickShowDetailHandler}>Meer Weten</button>
        <div className={(detailShown) ? `hide` : ``}>
          <p>{city}, {period}</p>
          <p>{desc}</p>
        </div>
      </article>
    );
  } else {
    return (
        <div></div>
    );
  }

};

ArtDetail.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(ArtDetail));
