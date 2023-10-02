import React from 'react';
import './about.css';
import video from "../assets/video.png";
import font3 from "../assets/font3.png";
import Subfeature from '../subfeature/Subfeature';
const About = () => {
  return (
    <div className="about__container"
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${font3})`
    }}>
      <di className="about__container-image">
        <img src={video} />
        <div className='fitin'/>
      </di>
      <div className="about__container-text" >
        <h2>Broadening Horizons Diversity Future Careers Innovation</h2>
        <span className="colorful"></span>
        <Subfeature text="Every year, Huawei brings together young global talents from top universities to a free of change, mind blowing and life-changing exchange program in china.
          There they explore chinese's cutting age ICT, experience traditional and modern chinese cuture, and hone their professional development."/> 
      </div>
    </div>
  )
}

export default About