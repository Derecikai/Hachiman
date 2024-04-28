import React, { FC,useState } from 'react';
import "./Lecture2.css";
import Faq from './Faq';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegHeart,FaHeart } from "react-icons/fa6";


interface Brawler {
  _id: string;
  name: string;
  image: string;
}

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

interface Mentor {
  _id: string;
  email: string;
  username: string;
  image: string;
}

interface Lecture2Props {
  achivments: number,
  brawler: Brawler,
  clients: number,
  createdAt: string,
  id: string,
  image: string,
  mentor: Mentor,
  name: string,
  price: number,
  quote: string,
  rating: number,
  sesionStart: number,
  summary: string,
  topMentor: boolean,
  status: string,
  reviews: Review[],
}

const Lecture2: FC<Lecture2Props> = ({ achivments, brawler, clients, createdAt, id, image, mentor, name, price, quote, rating, sesionStart, summary, topMentor, status, reviews}) => {
   const [heartToggled, setHeartToggled] = useState<boolean>(false);

  const toggleHeart = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
      // Stops the event from bubbling up
    setHeartToggled(!heartToggled);
  };


  return (
    <div className='first-info-2'>

      <div className='first-infocont-2'>
      <h2 className='info-2-rating'>{rating}</h2>
      <img className='flo-cmp-132' src={image} alt="" />
      <h2 className='info-2-name'>{name}</h2>
      </div>

      <div className='first-infocont-3'>
      <h2 className='info-2-clients'>{clients}</h2>
      <h2 className='info-2-price'>{price}$</h2>

      <div className='info2-button-sections'>
      <h2> </h2>
      <h2><IoMdAddCircleOutline className='info-2-logo' /></h2>
      <h2>
            {heartToggled ? <FaHeart onClick={(event) => toggleHeart(event)} className='info-2-logox' /> : <FaRegHeart onClick={(event) => toggleHeart(event)} className='info-2-logo' />}
          </h2></div>
      </div>
        
    </div>
  )
}

export default Lecture2;
