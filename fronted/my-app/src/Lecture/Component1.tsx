import React,{FC} from 'react'
import "./Component1.css"
import { FaQuoteRight } from "react-icons/fa";

interface Review{
  id: string,
  rating: number,
  review: string,
  user: {
    username: string,
    _id: string,
    image ?: string
  }
}

interface LectureXProps {
 reviews : Review[] | [],
 classname : string
}

const Component1:FC<LectureXProps> = ({reviews}) => {
  return (
    <div>
{reviews &&
      reviews.map((item:Review) => (
      <div className='review-container'> 
      <h2 className='review-review'>"{item.review}"</h2>
      <div className='review-low'>
      <h2 className='review-username'>{item.user.username}</h2>
     <img className='review-image' src={item.user.image} alt="" /> 
     </div>
     <FaQuoteRight className='review-quote-uwu' />
      </div>
      ))}

    </div>
  )
}

export default Component1