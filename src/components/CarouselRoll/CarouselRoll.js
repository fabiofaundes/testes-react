import React, { useEffect } from 'react';
import './CarouselRoll.css';
import PropTypes from 'prop-types';

const CarouselRoll = (props) => { 
  var carouselIndex = 0;
  const countItems = React.Children.count(props.children);

  useEffect(() => {
    setHeight();
    window.addEventListener('resize', setHeight);
    return () => {
      window.removeEventListener('resize', setHeight);
    };
  },[]);

  const setHeight = () => {
    const carousel = document.getElementsByClassName('carousel-roll')[0];
    carousel.style.height = `${carousel.clientWidth/3}px`;

    const items = carousel.getElementsByClassName('item');    
    for(var i = 0; i < countItems; i++)
      items[i].style.width = `${carousel.clientWidth}px`;
  };

  const rollRight = () => {
    carouselIndex = carouselIndex === countItems-1 ?
      0 :
      carouselIndex+1;

    rollTo();    
  };

  const rollLeft = () => {        
    carouselIndex = carouselIndex > 0 ?
      carouselIndex-1 :
      countItems-1;

    rollTo();
  };

  const rollTo = (index) => {    
    const corpo = document
      .getElementsByClassName('carousel-roll')[0]
      .getElementsByClassName('corpo')[0];

    const dots = document.getElementsByClassName('dot');

    if(index !== undefined && index !== null)
      if(index >= 0 && index < countItems){  
        corpo.style.transform = `translateX(-${document.getElementsByClassName('carousel-roll')[0].clientWidth * index}px)`;
        dots[carouselIndex].classList.remove('active');
        dots[index].classList.add('active');
        carouselIndex = index;
      }        
      else
        console.log('Error while trying to roll, Index given was: ', index);   
    else{
      corpo.style.transform = `translateX(-${document.getElementsByClassName('carousel-roll')[0].clientWidth * carouselIndex}px)`;
      for(var i = 0; i<countItems; i++)
        dots[i].classList.remove('active');
      dots[carouselIndex].classList.add('active');
    }    
  };

  const renderDots = () => {
    var dots = [];

    for(var i=0; i < countItems; i++){
      const j = i;
      if(i === 0)
        dots.push(
          <div
            className='dot active'
            onClick={() => rollTo(j)}>
          </div>);
      else
        dots.push(
          <div
            className='dot'
            onClick={() => rollTo(j)}>             
          </div>);   
    }
    console.log(dots);
    return dots;
  };
  
  return(
    <>
      <div className='carousel-roll'>
        <div className='corpo'>
          {props.children}
        </div> 
        <span className='prev' onClick={rollLeft}>&#10094;</span>
        <span className='next'  onClick={rollRight}>&#10095;</span>
      </div>
      <div style={{textAlign: 'center'}}>
        {renderDots()}
      </div>
    </>
  );  
};

CarouselRoll.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node.isRequired,
};

export default CarouselRoll;