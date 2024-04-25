import React, { useEffect,FC } from 'react'
import './Lecture3.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaQuoteRight } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
interface Review {
  review: string;
  user: {
    username: string;
    _id: string;
    image?: string;
  };
}

interface Lecture3Props {
  reviews: Review[] | [],
  quote: string,
  achivments: number,
  clients: number,
}

const Lecture3:FC<Lecture3Props> = ({reviews,clients,quote,achivments}) => {



  return (
    <div className="lecture3-container">
      

      
       
          {reviews && reviews.map((review, index) => (
            <div className="reviews" key={index}>
              <FaQuoteRight className='review-qoute'/>
               <p className='revire-revvoiew'>"{review.review}"</p>
              <div className="review-user">
               <h2 className="review-username"> {review.user.username}</h2>
                {review.user.image && <img className='review-image' src={review.user.image} alt="User" />}
                
              </div>
             
            </div>
          ))}
       

        <div className='second-lecture-stuff'>
          <div className='review-quote'>
            <HiOutlineFire className='review-quote-logo'/> <h1 className='lecture-quote'>{quote}.</h1></div>

          <div className='review-clients'>
           <div className='review-hihi'>CLIENTS<br /><span> <div className='text-foink'>{clients}</div>  <FaUserAstronaut className='woohoo' /> </span></div>
           <div className='review-hihi'>ACHIVEMENTS<br /> <div className='text-foink'>{achivments} </div><FaMedal className='woohoo gugugaga'/> </div>
           </div>


        </div>
       
    </div>
  )
}

export default Lecture3