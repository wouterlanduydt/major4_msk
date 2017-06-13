import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const MapboxMap = ({store}) => {

  const {getArtworkById, setSelectedArtwork, artworks} = store;

  const handleAnnotationClick = args => {
    const clickedAnnotationId = parseInt(args.feature.layer.id);
    const clickedArtwork = getArtworkById(clickedAnnotationId);
    setSelectedArtwork(clickedArtwork);
  };

  return (
    <ReactMapboxGl
      style='mapbox://styles/wouterlanduydt/cj3r5guiy000c2rp6kzb1vcjw'
      accessToken='pk.eyJ1Ijoid291dGVybGFuZHV5ZHQiLCJhIjoiY2lwMTEyMnJ0MDBncXZrbTI3OHNkdXNhZCJ9.ygWvm76D7cOx3Ev3VLDYjw'
      center={[7.8774936, 47.1212712]}
      zoom={[4]}
      minZoom={4}
      maxZoom={8}
      containerStyle={{height: `80vh`, width: `80vw`}}>

      {
        artworks.map(
        a => (
          <Layer
            type='symbol'
            id={a.id.toString()}
            key={a.id}
            layout={{"icon-image": `marker-15`}}>
            <Feature onClick={handleAnnotationClick} coordinates={[a.lat, a.lon]} />
          </Layer>
          )
        )
      }

    </ReactMapboxGl>
  );
};

MapboxMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(MapboxMap));
