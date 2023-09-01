import React from 'react';
import './features.css';

const Feature = ({title, text, image}) => {
  return (
    <div>
        <div className='title'>
            <h1>{title}</h1>
        </div>

        <div className='text'>
            <h1>{text}</h1>
        </div>
        <div className='image'>
            <h1>{image}</h1>
        </div>
    </div>
  )
}

export default Feature