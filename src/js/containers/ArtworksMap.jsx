import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const ArtworksMap = ({store}) => {

  const {artworks, getArtworkById} = store;

  const handleAnnotationClick = args => {
    const clickedAnnotationId = parseInt(args.feature.layer.id);
    const clickedArtwork = getArtworkById(clickedAnnotationId);
    console.log(clickedArtwork);
  };

  return (
    <section>
      <Link to='/' >
        <div>Terug</div>
      </Link>
      <ReactMapboxGl
        style='mapbox://styles/mapbox/light-v9'
        accessToken='pk.eyJ1Ijoid291dGVybGFuZHV5ZHQiLCJhIjoiY2lwMTEyMnJ0MDBncXZrbTI3OHNkdXNhZCJ9.ygWvm76D7cOx3Ev3VLDYjw'
        center={[2.1563452, 48.6742713]}
        zoom={[4]}
        minZoom={4}
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
