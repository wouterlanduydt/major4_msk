import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string, number} from 'prop-types';

const LovedCity = ({name, id, store}) => {

  const {deleteLovedCity} = store;

  const handleDelete = () => {
    deleteLovedCity(id);
  };

  return (
    <li className='create__loved__item'>
      <p className='create__loved__city'>{name}</p>
      <button className='create__loved__delete' onClick={handleDelete}>x</button>
    </li>
  );
};

LovedCity.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(LovedCity));
