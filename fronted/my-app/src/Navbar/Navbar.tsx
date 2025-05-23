import React, { FC, useState,useEffect } from 'react';
import './Navbar.css';
import { CiMenuBurger,CiDumbbell } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { AuthProvider, useAuth } from 'Context/userContext';

const Navbar:FC = () => {

const [scrolled,setScrolled] = useState<boolean>(false);
const [isMenuOpen,setIsMenuOpen] = useState<boolean | null>(null);
const [show,setShow] = useState<boolean | null>(null)
const {logout,auth} = useAuth();
useEffect(() =>{

  if(auth.token){
    setShow(false);
  }
  else{
    setShow(true)
  }

    const handleScroll = () => {
      const isScrolled: boolean = window.scrollY > 15;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[auth.token,show])



 const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };


  return (
    
    <div className="nav-placeholder" >
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
     
     <div className='nav-left-text'>
     <h1>HACH
      <span>IMAN</span> </h1>
      </div>
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
                           {show ? <Link to="/login">Login</Link> : <button onClick={logout}>Logout</button>}
                        </div>
                    )}
                </div>
      </div>
      </div>
     </div>
  )
}

export default Navbar