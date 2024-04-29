import React, { useEffect,FC } from 'react'
import './Lecture3.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaQuoteRight } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { IoLogoSnapchat } from "react-icons/io";


interface Lecture3Props {
 summary: string,
  image: string | undefined,
}

const Lecture3:FC<Lecture3Props> = ({image,summary}) => {



  return (
  <div className="lecture3-container">
  <div className='container-3'>
    <h2 className='lecture3-title'>Guide On</h2>
    <img className='image-lecture-3'  src={image} alt="" /></div>
      <p className='lecture-summary'> {summary}</p> 
      
      {/* <IoLogoSnapchat className='something-cool'/>    */}
    </div>)
}

export default Lecture3