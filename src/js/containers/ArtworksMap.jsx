import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

import ArtDetail from '../components/map/ArtDetail';

import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const ArtworksMap = ({store}) => {

  const {artworks, getArtworkById, setSelectedArtwork} = store;

  const handleAnnotationClick = args => {
    const clickedAnnotationId = parseInt(args.feature.layer.id);
    const clickedArtwork = getArtworkById(clickedAnnotationId);
    setSelectedArtwork(clickedArtwork);
  };

  return (
    <section>
      <Link to='/' >
        <div>Terug</div>
      </Link>
      <ArtDetail />
      <ReactMapboxGl
        style='mapbox://styles/wouterlanduydt/cj3r5guiy000c2rp6kzb1vcjw'
        accessToken='pk.eyJ1Ijoid291dGVybGFuZHV5ZHQiLCJhIjoiY2lwMTEyMnJ0MDBncXZrbTI3OHNkdXNhZCJ9.ygWvm76D7cOx3Ev3VLDYjw'
        center={[7.8774936, 47.1212712]}
        zoom={[5]}
        minZoom={5}
        maxZoom={6}
        containerStyle={{height: `100vh`, width: `100vw`}}>

        {
          artworks.map(
          a => (
            <Layer
              type='symbol'
              id={a._id.toString()}
              key={a._id}
              layout={{"icon-image": `marker-15`}}>
              <Feature onClick={handleAnnotationClick} coordinates={[a.lat, a.lon]} />
            </Layer>
            )
          )
        }

      </ReactMapboxGl>
    </section>
  );
};

ArtworksMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(ArtworksMap));
