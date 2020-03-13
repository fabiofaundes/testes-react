import React, { useEffect } from 'react';
import './CarouselRoll.css';
import PropTypes from 'prop-types';

const CarouselRoll = (props) => { 
  var carouselIndex = 0;
  var countItems = React.Children.count(props.children);
  var corpo = {};
  var copyOfFirst;
  var copyOfLast;
  var items;
  var rollAllowed = true;

  useEffect(() => {
    corpo = document
      .getElementsByClassName('carousel-roll')[0]
      .getElementsByClassName('corpo')[0];

    items = corpo.getElementsByClassName('item');
    const firstItem = items[0];
    const lastItem = items[countItems-1];
    copyOfFirst = firstItem.cloneNode(true);
    copyOfLast = lastItem.cloneNode(true);
    corpo.appendChild(copyOfFirst);
    corpo.insertBefore(copyOfLast,firstItem);
    countItems += 2;
    carouselIndex = 1;
    shift(carouselIndex);

    setHeight();
    window.addEventListener('resize', setHeight);
    
    return () => {
      window.removeEventListener('resize', setHeight);
    };
  },[]);

  const setHeight = () => {
    const carousel =
      document.getElementsByClassName('carousel-roll')[0];

    carousel.style.height = `${carousel.clientWidth/3}px`;

    const items = carousel.getElementsByClassName('item');    
    for(var i = 0; i < countItems; i++)
      items[i].style.width = `${carousel.clientWidth}px`;
  };

  const rollRight = () => {
    if(rollAllowed)
    {
      carouselIndex++;
      rollTo();
    }
  };

  const rollLeft = () => {
    if(rollAllowed)
    {
      carouselIndex--;
      rollTo();
    }    
    
  };

  const rollTo = (index) => {
    if(rollAllowed)
    {
      rollAllowed = false;
      corpo.classList.add('shifting');
      corpo.addEventListener('transitionend', transitionEnd);

      if(index !== undefined && index !== null)
        if(index > 0 && index < countItems-1){          
          carouselIndex = index;
          shift(index);
        }        
        else{
          corpo.removeEventListener('transitionend', transitionEnd);
          corpo.classList.remove('shifting');
          rollAllowed = true;
          console.log('Error while trying to roll, Index given was: ', index);
        }
      else{
        shift(carouselIndex);
      }
    }
  };

  const shift = (index) => {    
    const slideWidth = document.getElementsByClassName('carousel-roll')[0].clientWidth;
    corpo.style.transform =`translateX(-${slideWidth * (index)}px)`;
  };

  const transitionEnd = () => {
    corpo.removeEventListener('transitionend', transitionEnd);
    corpo.classList.remove('shifting');
    if(carouselIndex === countItems-1){
      carouselIndex = 1;
      shift(1);
    }
    else
    if(carouselIndex === 0){
      carouselIndex = countItems-2;
      shift(countItems-2);      
    }
    rollAllowed = true;
  };

  const renderDots = () => {
    var dots = [];

    for(var i=0; i < countItems; i++){
      const j = i+1;
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