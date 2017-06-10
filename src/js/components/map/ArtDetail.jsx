import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';

const ArtDetail = ({store}) => {

  const {selectedArtwork} = store;
  const {city, desc, image, name, painter, period} = selectedArtwork;


  if (name) {
    return (
      <article>
        <img src={`../../../assets/img/${image}.jpg`} alt={`${image}`} />
        <h1>{name}</h1>
        <p>{painter}</p>
        <p>{city}, {period}</p>
        <p>{desc}</p>
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
