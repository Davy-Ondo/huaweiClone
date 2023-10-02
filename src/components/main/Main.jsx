import React from 'react';
import { motion } from 'framer-motion';
import './main.css';
import font1 from '../assets/font1.png'
import font2 from '../assets/font2.png'
import sw1 from  '../assets/sw1.png';
import sw9 from  '../assets/sw9.png';
import sw8 from  '../assets/sw8.png';
import sw4 from  '../assets/sw4.png';
import sw7 from  '../assets/sw7.png';
import Feature from '../feature/Feature';
import Feature2 from '../feature2/Feature2';
import Card from '../card/Card';
import { staggerContainer } from '../beauty/motion';
import { cardexplo } from '../cardexplo/cardexplo';
import { TypingText } from '../beauty/TypingText';

const Main = () => {
  return (
    <div className="main__container"
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage:  `url(${font1})`
     }}>
      <div className="main__container-leaf">
        <div className='leaf'>
          <img src={font2}/>
          <h2>EYE-OPENING JOURNEY TO EXPERIENCE TECHNOLOGY AND CULTURE</h2>
          <div className="ray"/>
        </div>
        <div className='feature__part'>
          <Feature
          title="cultural immersion"  
          text="The first stop is China's capital - Beijing - a city with more than 3,000 years that is home to many scenic spots such as the forbidden City, the Temple of Heaven the great Wall and Summer Palace." 
          src={sw1}
          />
          <Feature2 
          title="Between tradition and modernity"  
          text="In Beijing, a city blending history, tradition and modernity, participants explore China's rich traditions and get a glimpse of its arts and customs. Simultaneously, they visit local tech enterprises to broaden their experience of digital life." 
          src={sw4}
          />
          <Feature 
          title="A glimpse into the tech hub"  
          text="Huawei provides participants with opportunities to get a closer look into technology, such as Exhibition Hall visits, Factory Explorations, and other enterprise insights." 
          src={sw9}
          />
          <Feature2 
          title="Spark of innovation and entrepreneurship"  
          text="The concept of Tech4Good group collaboration is introduced to hone participants’ skills in leadership, innovation, and entrepreneurship. Professional mentorship is offered to explore how technology can be used to solve social problems of common concern." 
          src={sw8}
          />
          <Feature 
          title="A global network of top talent"  
          text="A space is created for all Seeds alumni, where brilliant minds from different countries, cultures and educational backgrounds come together to envision the future and bring that vision to life." 
          src={sw7}
          />
          <div className='border__div'>
            <h2 className='gradient__color'>Hands-on training</h2>
            <p>Participants will have the opportunity to experience how 
               theory becomes reality by practicing in Huawei labs and training
               centers. It's a unique opportunity to learn how products and solutions are built.</p>
            <button className='button'>The journey</button>
            <img src={font2}/>
          </div> 
        </div>
        <div className='leaf'>
          <img src={font2}/>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amout: 0.25}}
            className='typing_text'>
            <TypingText text="WHY JOINING THE PROGRAM?" />
          </motion.div>
          <div className="ray"/>
        </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amout: 0.25}}
            className='card__ajust'>
            <div className='card__display'>
              {cardexplo.map((card, index) => (
                <Card
                key={card.id}
                {...card}
                index={index}/>
              ))}
            </div>
           </motion.div>
      </div>
    </div>
  )
}

export default Main