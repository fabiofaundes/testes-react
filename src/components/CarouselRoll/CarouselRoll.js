import React, { useEffect } from 'react';
import './CarouselRoll.css';
import PropTypes from 'prop-types';

const CarouselRoll = (props) => { 
  var carouselIndex = 0;

  useEffect(() => {
    setHeight();
    window.addEventListener('resize', setHeight);
    return () => {
      window.removeEventListener('resize');
    };
  },[]);

  const setHeight = () => {
    const carousel = document.getElementsByClassName('carousel-roll')[0];
    carousel.style.height = `${carousel.clientWidth/3}px`;
  };

  const rollRight = () => {
    const items = document.getElementsByClassName('carousel-roll')[0]
      .getElementsByClassName('item');

    const dots = document.getElementsByClassName('dot');

    if(carouselIndex < items.length-1){      
      items[carouselIndex].style.marginLeft = '-100%';
      dots[carouselIndex].classList.remove('active');
      dots[carouselIndex += 1].classList.add('active');
    } else {
      rollTo(0);
    }
  };

  const rollLeft = () => {
    const items = document.getElementsByClassName('carousel-roll')[0]
      .getElementsByClassName('item');

    const dots = document.getElementsByClassName('dot');

    if(carouselIndex > 0){ 
      dots[carouselIndex].classList.remove('active');
      items[carouselIndex -=1].style.marginLeft = '0';
      dots[carouselIndex].classList.add('active');
    } else {
      rollTo(items.length-1);
    }
  };

  const rollTo = (index) => {
    const items = document.getElementsByClassName('carousel-roll')[0]
      .getElementsByClassName('item');

    const dots = document.getElementsByClassName('dot');

    if(index >= 0 && index < items.length){

      for(var i=0; i<items.length; i++){
        if(i < index)
          items[i].style.marginLeft = '-100%';
        else
          items[i].style.marginLeft = '0';
        
        dots[i].classList.remove('active');
      }

      dots[index].classList.add('active');
      carouselIndex = index;

    }
  };   

  if(props.items)  
    return(
      <>
        <div className='carousel-roll'>   
          {props.items.map((item, i) => {
            return(
              <div
                className='item'
                key={i}
                style={{backgroundImage: `url(${item})`}}
              >
              </div>
            );
          })}

          <span className='prev' onClick={rollLeft}>&#10094;</span>
          <span className='next' onClick={rollRight}>&#10095;</span>
        </div>
        <div style={{textAlign: 'center'}}>
          {props.items.map((item, i) => {            
            if(i === 0)
              return(
                <span
                  key={i}
                  className='dot active'
                  onClick={() => rollTo(i)}>
                </span>
              );
            else        
              return(
                <span
                  key={i}
                  className='dot'
                  onClick={() => rollTo(i)}>
                </span>
              );
          })}
        </div>
      </>
    );  
};

CarouselRoll.propTypes = {
  items: PropTypes.array,
};

export default CarouselRoll;