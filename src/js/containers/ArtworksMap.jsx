import React from 'react';
import {Link} from 'react-router-dom';
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const ArtworksMap = () => {
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
        containerStyle={{height: `100vh`, width: `100vw`}}
        >
        <Layer
          type='symbol'
          id='marker'
          layout={{"icon-image": `marker-15`}}>
          <Feature coordinates={[- 0.481747846041145, 51.3233379650232]} />
        </Layer>
      </ReactMapboxGl>
    </section>
  );
};

export default ArtworksMap;
