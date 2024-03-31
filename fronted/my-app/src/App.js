import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero/Hero';
import Learning from './Learning/Learning';
import Navbar from './Navbar/Navbar';
import Busidea from './Busidea/Busidea';
import Busbef from './Busbef/Busbef';
import Choose from './Choose/Choose';
import SignUp from './SignUp/SignUp';
import GetAll from './GetAll';
import Home from './Home/Home';
import Search from './Search/Search';

function App() {




  return (
    <div>
       <Router>
        <Navbar />
        
        <Routes>
       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<GetAll />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
       

        {/* /chatroom/${persdata.sub} */}
      </Routes>
    </Router>
        
    </div>
  );
}

export default App;