import React, { FC, useState } from 'react';
import './Navbar.css';
import { CiMenuBurger,CiDumbbell } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const Navbar:FC = () => {

const [isMenuOpen,setIsMenuOpen] = useState<boolean | null>(null);


 const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };


  return (
    <div className='nav-container'>
     
     <div className='nav-left-text'>
     <h1>HACH
      <span>IMAN</span> </h1>
      <button>Button</button></div>
      
      <div className='nav-right-icon'>
       <Link className='linktm' to={'/'}> <FaGithubAlt className='nav-icons' /></Link>
        
      <Link className='linktm' to={'/signup'}> <CiLogin className='nav-icons' />  </Link>
     
       <div className="dropdown">
                    <CiMenuBurger className='nav-icons' onClick={handleToggleMenu} />
                    {isMenuOpen && (
                        <div className="dropdown-content">
                            <Link to="/home">Home</Link>
                            <Link to="/signup">Signup</Link>
                            <Link to="/search">Search</Link>
                        </div>
                    )}
                </div>
      
      </div>
     
     </div>
  )
}

export default Navbar