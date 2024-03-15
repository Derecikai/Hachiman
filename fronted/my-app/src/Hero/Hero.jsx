import React from 'react'
import './Hero.css';

import { IoArrowForward } from "react-icons/io5";
import heroimage from '../robot.png';
const Hero = () => {
  return (
    <div className='flo'  > 
        <div className='hero-txt'>
          <h1>Welocome to new <span> gen AI</span></h1>
          <p className='p-hero'>Learn how to win and capitulazie with AI <IoArrowForward className='arrow-hero' /></p>
        </div>
        <div>
          <div className='firs-shadow'></div>
          <div className='second-shadow'></div>
          <img className='hero-img' src={heroimage} alt="" />
        </div>
        </div>
  )
}

export default Hero