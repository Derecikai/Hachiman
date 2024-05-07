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
import Lecture from "./Lecture/Lecture";
import {AuthProvider} from "./Context/userContext";
import Login from "./LogIn/Login"


const App = () => {


  return (
    <div>
      <AuthProvider>
       <Router>
        <Navbar />
        
        <Routes>
       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<GetAll />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />       
        <Route path="lecture/:id" element={<Lecture />} />
        <Route path="login" element={<Login />} />
       
      </Routes>
    </Router>
        </AuthProvider>
    </div>
  );
}

export default App;