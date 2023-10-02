import React from 'react';
import { motion } from 'framer-motion';
import './feature2.css';
import { staggerContainer, fadeIn } from '../beauty/motion';

const Feature2 = ({title, text, src}) => {
  return (
    <motion.div
      classNamea="framer"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}>
        <motion.div
        variants={fadeIn('down', 'tween', 0.4, 1)}>
    <div className="feature__container">
      <div className='photo'>
          < img src={src}/>
      </div>
      <div className='title'>
        <h3>{title}</h3>
        <div className='gradient'/>
        <p>{text}</p>
      </div>
    </div>
        </motion.div>
      </motion.div>
  )
}

export default Feature2