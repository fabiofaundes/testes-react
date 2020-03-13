import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = (props) => {
  return(
    <div
      className='item'
      style={{backgroundImage: `url(${props.backgroundImage})`}}>
      {props.children}
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.any,
  backgroundImage: PropTypes.string,
};

export default CarouselItem;