import React from 'react'
import "./Home.css";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { FaArrowRight } from "react-icons/fa";
import CountUp from 'react-countup'
import { Link } from 'react-router-dom';

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
     {/* <p className='home1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus sidar teres okay flocas</p> */}
<div className='testa-home'>
<div className='hometest-1'>
  <h1 className='hometest-1-h1'><CountUp start={0} end={360} duration={2} delay={0}/>K+</h1>
  <p className='hometest-1-p1'> Data upload for users</p>
  </div>
<div className='hometest-2'><h1 className='hometest-1-h1'><CountUp className='countup' start={0} end={144} duration={3} delay={0}/>+</h1>
  <p className='hometest-1-p1'>Courses for you to learn</p></div>

  <div className='hometest-3'><h1 className='hometest-1-h1'><CountUp start={0} end={16} duration={3} delay={0}/>+</h1>
  <p className='hometest-1-p1'>Capable Teachers</p></div>
  </div>
  

     <div className='home1-buttons-container'>
     <Link to={"/signup"}><button className='btn-1'>Get Recomanded<FaArrowRight className='home1-icon'/></button>
     </Link> 
     <Link to={"/search"}> <button className='btn-2'>Explore Catalog</button>
     </Link>
     </div>
     <div className='home-1img'></div>
     </div>
  )
}

export default Home1