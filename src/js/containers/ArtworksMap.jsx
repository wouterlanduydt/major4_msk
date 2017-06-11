import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

import ArtDetail from '../components/map/ArtDetail';
import MapboxMap from '../components/map';

const ArtworksMap = ({store}) => {

  const {selectedArtwork} = store;

  return (
    <section>
      <Link to='/' >
        <div>Terug</div>
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
