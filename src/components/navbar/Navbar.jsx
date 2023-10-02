import React from "react";
import './navbar.css';
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../beauty/motion";

import logo from '../assets/logo.png';
import seed_logo from '../assets/seeds_logo.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';
import mail from '../assets/mail.png';

const Navbar = () => (
    <div className="navbar__container">
     <motion.nav
     className="navbar"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}>
        <motion.div
        variants={fadeIn('down', 'tween', 0.3, 1)}
        className="navbar__section">
          <div className="huawei">
           <img src={logo} alt="huawei"/>
           <img src={seed_logo} alt="seed"/>
          </div>
          <div className="links">
            <a href="#home">HOME</a>
            <a href="#tech">TECH4GOOD</a>
            <a href="#community">COMMUNITY</a>
            <a href="#online">ONLINE PROGRAM</a>
          </div>
          <div className="social">
            <img src={youtube} alt="youtube" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={mail} alt="mail" />
          </div>
        
        </motion.div>
      </motion.nav>
    </div>
  );


export default Navbar