import React from 'react'
import "./Home.css";
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
const Home = () => {
  return (
    <div className='home-bg'>
     <div className='home-container'>
     <Home1 />
     <div className='home-counter-1'></div>
       <Home2 />
       <div className='home-counter-2'></div>
       <Home3 />


     </div>
    </div>
  )
}

export default Home