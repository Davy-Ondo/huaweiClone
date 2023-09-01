import font3 from './assets/font3.png'
import React from 'react';
import './first.css';
import video from './assets/video.png';

const First = () => {
  return (
    <div className="first__feature"
    style={{
      width: '100%',
      height: '500px',
      backgroundImage: `url(${font3})`
      }}>
        <div className='inner'>
          <img src={video} alt="vid" />
          <div className='text'>
           <h3>Broadening Herizons Diversity Future Careers Innovation</h3>
           <div className='gradient'></div>
           <p>every year, Huawei brings together young global talents from top universities to a free of charge, mind blowing and life changing exchange program in china. There, they explore Huawei's cutting edged ICT, explore traditional and modern chinese culture and hone their professional development.</p>
          </div>
        </div>
    </div>
  )
}

export default First