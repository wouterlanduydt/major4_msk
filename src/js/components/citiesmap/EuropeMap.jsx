import React from 'react';
import {observer, inject, PropTypes} from 'mobx-react';
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const EuropeMap = ({store}) => {

  const {cities, setSelectedCity, getCityById} = store;

  const handleCityClick = args => {
    const clickedCityId = parseInt(args.feature.layer.id);
    const clickedCity = getCityById(clickedCityId);
    setSelectedCity(clickedCity);
  };

  return (
    <div className='create__map'>
      <header className='create__map__title-container'>
        <h1 className='create__map__title'>Voeg 3 steden toe waar je naartoe zou willen reizen</h1>
      </header>
      <ReactMapboxGl
        style='mapbox://styles/wouterlanduydt/cj3w1tee80f302sk1guridccu'
        accessToken='pk.eyJ1Ijoid291dGVybGFuZHV5ZHQiLCJhIjoiY2lwMTEyMnJ0MDBncXZrbTI3OHNkdXNhZCJ9.ygWvm76D7cOx3Ev3VLDYjw'
        center={[7.8774936, 47.1212712]}
        zoom={[3]}
        minZoom={3}
        maxZoom={6}
        containerStyle={{height: `100vh`, width: `50vw`}}>
        {
          cities.map(
          c => (
            <Layer
              type='symbol'
              id={c.id.toString()}
              key={c.id}
              layout={{"icon-image": `marker-15`}}>
              <Feature className='create__map__annotation' onClick={handleCityClick} coordinates={[c.lat, c.lon]} />
            </Layer>
            )
          )
        }
      </ReactMapboxGl>
    </div>
  );
};

EuropeMap.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(EuropeMap));
