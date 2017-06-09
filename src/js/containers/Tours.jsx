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

      <h1>Onze Tours</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias rerum a quos enim numquam velit libero molestiae eveniet assumenda perspiciatis, tenetur neque. Eaque dolorem voluptas nisi minima eius ipsum eum.</p>

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
