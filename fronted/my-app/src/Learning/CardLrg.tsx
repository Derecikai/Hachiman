import React, { FC } from 'react'
import "./Learning.css";
import { BsStars } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

type propType = {
  img: string,
  name: string,
  desc: string
}


const CardLrg = ({img, name, desc} : propType) => {
  // console.log(item.desc)
  return (
     <div className='border-card'>
      <div className="card-content">
        <div>
          <img className='card-image' src={img} alt="image" />
          <p>{name && name}</p>
        </div>
        <div className="overlay-content">
          <BsStars className='overlay-logo'/> 
          <p className='overlay-text'>{desc && desc}</p>
        </div>
         
      </div>
      <div className="overlay" style={{ backgroundImage: `url('${img}')` }}>
      </div>
    </div>
  )
}

export default CardLrg