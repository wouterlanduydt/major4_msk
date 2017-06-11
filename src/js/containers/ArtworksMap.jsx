import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

import ArtDetail from '../components/map/ArtDetail';
import MapboxMap from '../components/map';

const ArtworksMap = ({store}) => {

  const {resetSelectedArtwork, selectedArtwork} = store;

  const handleBackClick = () => resetSelectedArtwork();

  return (
    <section>
      <Link to='/' >
        <div onClick={handleBackClick}>Terug</div>
      </Link>
      <ArtDetail {...selectedArtwork} />
      <MapboxMap />
    </section>
  );
};

ArtworksMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(ArtworksMap));
