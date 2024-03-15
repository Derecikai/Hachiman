import React, { useState } from 'react';
import './Navbar.css';
import { CiMenuBurger,CiDumbbell } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {

const [isMenuOpen,setIsMenuOpen] = useState(null);
const [modalActive,setModalActive] = useState(null);

 const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setModalActive(!modalActive)
  };


  return (
    <div className='nav-container'>
     
     <div className='nav-left-text'>
     <h1>HACH
      <span>IMAN</span> </h1></div>
      
      <div className='nav-right-icon'>
       <Link className='linktm' to={'/'}> <FaGithubAlt className='nav-icons' /></Link>
        
      <Link className='linktm' to={'/signup'}> <CiLogin className='nav-icons' />  </Link>
      
      </div>
     
     </div>
  )
}

export default Navbar