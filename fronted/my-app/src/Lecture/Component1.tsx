import React,{FC} from 'react'
import "./Component1.css"

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
      {item.review}
      </div>
      ))}

    </div>
  )
}

export default Component1