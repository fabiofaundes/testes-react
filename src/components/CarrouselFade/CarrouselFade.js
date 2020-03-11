import React, { useEffect } from 'react';
import './CarrouselFade.css';
import sleepyDog from '../../assets/sleepyDog.jpg';
import livingRoom from '../../assets/prettyLivingRoom.jpg';
import desert from '../../assets/desertScenario.jpg';

//Créditos das fotos usadas
/*<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@constantinp?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Constantin Popp"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Constantin Popp</span></a>*/
/*<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@stevenungermann?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Steven Ungermann"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Steven Ungermann</span></a>*/
/*<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jplenio?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Johannes Plenio"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Johannes Plenio</span></a>*/

const CarrouselFade = () => {

  var slidesIndex = 0;

  useEffect(() => {
    showSlides(slidesIndex);
  });

  const plusSlides = (n) => {    
    showSlides(slidesIndex += n);
  };

  const currentSlide = (n) => {    
    showSlides(slidesIndex = n);
  };

  const showSlides = (n) => {      
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if(n >= slides.length) {slidesIndex = 0;}
    if(n < 0) {slidesIndex = slides.length-1;}
    for(i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(i = 0;i < slides.length; i++){
      dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slidesIndex].style.display = 'block';
    dots[slidesIndex].className += ' active';
  };

  return(
    <>
      <div className='carrousel'>
        
        <div className='mySlides fade'>
          <div className='numberText'>1 / 3</div>
          <div className='image' style={{backgroundImage: 'url('+sleepyDog+')'}}></div>
          <div className='text'>Caption Text</div>
        </div>

        <div className='mySlides fade'>
          <div className='numberText'>2 / 3</div>
          <div className='image' style={{backgroundImage: 'url('+livingRoom+')'}}></div>
          <div className='text'>Caption Text</div>
        </div>

        <div className='mySlides fade'>
          <div className='numberText'>3 / 3</div>
          <div className='image' style={{backgroundImage: 'url('+desert+')'}}></div>
          <div className='text'>Caption Text</div>
        </div>

        <a href='#' className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a href='#' className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      </div>
      <div style={{textAlign: 'center'}}>
        <span className="dot" onClick={() => currentSlide(0)}></span>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
      </div>
    </>
  );
};

export default CarrouselFade;