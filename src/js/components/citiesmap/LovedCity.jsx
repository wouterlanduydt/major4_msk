import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';

const LovedCity = ({name, id, store}) => {

  const {deleteLovedCity} = store;

  const handleDelete = () => {
    deleteLovedCity(id);
  };

  return (
    <li>
      <p>{name}</p>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

LovedCity.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(LovedCity));
