import sec1 from '../assets/sec1.png'

import React from 'react';
import './card.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../beauty/motion';

const Card = ({img, title, text, index}) => {
  return (
    <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className='card'
    >
        <img src={img} alt="card" />
        <h2>{title}</h2>
        <p>{text}</p>
    </motion.div>
  )
}

export default Card