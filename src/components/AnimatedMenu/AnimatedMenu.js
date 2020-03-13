import React, { useState, useEffect} from 'react';
import './AnimatedMenu.css';
import PropTypes from 'prop-types';

const AnimatedMenu = (props) => {  
  if(props.children)
  {
    var grid = `50px 6px/repeat(${props.children.length}, 1fr)`;    
    return(
      <div
        className='animated-menu'
        style={{gridTemplate: grid}}>
        {props.children}             
      </div>
    );
  }else
    return(
      <></>
    );
};

AnimatedMenu.propTypes = {
  children: PropTypes.any,
};

export default AnimatedMenu;