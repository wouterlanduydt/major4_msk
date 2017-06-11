import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {Link} from 'react-router-dom';

import Tour from '../components/tour';

const Tours = ({tours}) => {
  return (
    <div>
      <Link to='/' >
        <p>Terug</p>
      </Link>

      <h1>Onze Touren</h1>
      <p>Dit zijn alle tours die we bij het MSK in Gent te bieden hebben, ontdek welke voor jou het interessantst lijkt, door je eigen reis samen te stellen.</p>
      <ul>
        {
          tours.map(
          t => (
            <Tour
              {...t}
              key={t._id}
            />
            )
          )
        }
      </ul>
    </div>

  );
};

Tours.propTypes = {
  tours: PropTypes.observableArray.isRequired
};

export default inject(
  ({store}) => {
    return {tours: store.tours};
  }
)(
  observer(Tours)
);
