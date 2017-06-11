import React from 'react';
import {inject, observer, PropTypes} from 'mobx-react';
import {string} from 'prop-types';
import classNames from 'classnames';

const ArtDetail = ({name, painter, city, period, desc, image, store}) => {

  const {detailShown, toggleKnowMore} = store;

  let $moreButton;

  const handleClickMore = () => {
    toggleKnowMore($moreButton);
  };

  return (
    <article>
      <img src={`../../../assets/img/${image}.jpg`} alt={`${image}`} />
      <header>
        <h1>{name}</h1>
      </header>
      <p>{painter}</p>
      <div className={classNames({hidden: detailShown})} >
        <p>{city}, {period}</p>
        <p>{desc}</p>
      </div>
      <button ref={$el => $moreButton = $el} onClick={handleClickMore}>Ontdek Meer</button>
    </article>
  );

};

ArtDetail.propTypes = {
  name: string,
  painter: string,
  city: string,
  period: string,
  desc: string,
  image: string,
  store: PropTypes.observableObject.isRequired
};

ArtDetail.defaultProps = {
  name: ``,
  painter: ``,
  city: ``,
  period: ``,
  desc: ``,
  image: ``
};

export default inject(`store`)(observer(ArtDetail));
