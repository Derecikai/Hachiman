import React from 'react'
import "./Home.css";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { FaArrowRight } from "react-icons/fa";

const Home1 = () => {

const [text] = useTypewriter({
    words: ['JO SI SAMI.', 'Design.', 'Teaching.', 'Developing.'],
    loop: {},
    typeSpeed: 170,
    deleteSpeed: 70
  })

  return (
    <div className='home1-container'>
     <div className='home1-shgadow'></div>
     <h1 className='home1-text'>Find resources for <span className='home-span'>{text}<Cursor /></span></h1>
     <p className='home1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus si</p>
     <div className='home1-buttons-container'>
      <button className='btn-1'>Get Recomanded<FaArrowRight className='home1-icon'/></button>
      <button className='btn-2'>Explore Catalog</button>
     </div>
     <div className='home-1img'></div>
     </div>
  )
}

export default Home1