import React from 'react'
import './App.css';
import Hero from './Hero/Hero';
import Learning from './Learning/Learning';
import Navbar from './Navbar/Navbar';
import Busidea from './Busidea/Busidea';
import Busbef from './Busbef/Busbef';
import Choose from './Choose/Choose';

const GetAll = () => {
  return (
    <div className="App">
     <Hero />
        <Learning/>
        <Busbef />
        <Busidea />
        <Choose />
    </div>
  )
}

export default GetAll