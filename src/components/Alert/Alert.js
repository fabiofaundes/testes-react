import React, { useEffect } from 'react';
import './Alert.css';
import xIcon from '../../assets/icons/close.svg';

const Alert = (props) => {  

  var startTime = null;
  var alert = null;

  useEffect(() => {
    alert = document.getElementsByClassName('alert')[0];
  },[]);

  const closeAlert = (timestamp) => {
    if(!startTime)
      startTime = timestamp;

    const timeDiff = (timestamp - startTime)/1000;     
    alert.style.opacity = 1 - (10/3)*timeDiff;   

    if(timeDiff < 0.3)         
      requestAnimationFrame(closeAlert);
    else
      alert.style.display = 'none';    
  };

  return(
    <div className={`alert ${props.type}`}>
      <span>{props.msg}</span>
      <img alt='close' name='closeAlert' src={xIcon} onClick={() => {requestAnimationFrame(closeAlert);}}/>
    </div>
  );
};

export default Alert;