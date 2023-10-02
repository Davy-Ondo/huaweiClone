import React from 'react';
import './subfeature.css';

const Subfeature = ({text}) => {
  return (
    <div className='subfeature__container'>
        <div className='shine'/>
        <div className='subfeature__container-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Subfeature