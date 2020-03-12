import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {

  const handleMouseEnter = (e) => {    
    try{
      e.target.lastElementChild.classList.add('ativo');
    }catch(ex){
      console.log(e.target);
      console.error(ex);      
    }
  };  

  const handleMouseLeave = (e) => {    
    try{
      e.target.lastElementChild.classList.remove('ativo');
    }
    catch(ex){
      console.log(e.target);
      console.error(ex);
    }
  }; 

  return(
    <div
      className='item'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>      
      <span>{props.children}</span>
      <div className='risco'></div>
    </div>
  );
};

MenuItem.propTypes = {
  children: PropTypes.any,
};

export default MenuItem;