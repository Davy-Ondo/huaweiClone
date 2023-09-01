import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import { slideIn } from '../motion';
import { staggerContainer } from '../motion';
import kv_pc from './assets/kv_pc.jpg'
import banner from './assets/banner.gif';

const Hero = () => (
  <section className="hero">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="hero-motion"
    >
        <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}>
              <div className="image">
                <img src={kv_pc} alt="kv" />
                <img src={banner} alt="navigate"/>
              </div>
        </motion.div>
    </motion.div>
  </section>  
);

export default Hero
