import React from 'react'
import "./Learning.css";
import { BsStars } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const CardLrg = ({item}) => {
  // console.log(item.desc)
  return (
     <div className='border-card'>
      <div className="card-content">
        <div>
          <img className='card-image' src={item.img} alt="image" />
          <p>{item.name && item.name}</p>
        </div>
        <div className="overlay-content">
          <BsStars className='overlay-logo'/> 
          <p className='overlay-text'>{item.desc && item.desc}</p>
        </div>
         
      </div>
      <div className="overlay" style={{ backgroundImage: `url('${item.img}')` }}>
      </div>
    </div>
  )
}

export default CardLrg