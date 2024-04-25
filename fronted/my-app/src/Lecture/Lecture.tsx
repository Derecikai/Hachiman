import React, { FC, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./Lecture.css";
import Lecture2 from './Lecture2';
import { IoMdPersonAdd } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import Lecture3 from './Lecture3';

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

interface LectureData {

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
  reviews: Review[] | [],
}

// interface Lecture2Props {
//   image: string,
//   name: string
// }
const Lecture:FC = () => {

 const [data,setData] = useState<LectureData | null>(null);
 const [isSecondSlideVisible, setIsSecondSlideVisible] = useState<boolean>(false);
const {id} = useParams();
 
 const getData = async ():Promise<void> =>{   
      try{
    const response = await axios.get(`http://localhost:8000/api/v1/lectures/${id}`);
     console.log(response.data.data);
      if (response.data && response.data.data) {
      setData(response.data.data);
    }
      }catch(error)
      {
        console.log(error);
      }

 }
  
 const toggleSecondSlide = () => {
    setIsSecondSlideVisible(!isSecondSlideVisible);
  };

{/* <div className='second-doc'>
     {data && 
      <Lecture2 
       image={data.image}
       name={data.brawler.name} 
      />
      } 
     </div> */}

 useEffect(() => {
getData();
 },[]);



  return (
    <div className='lecture-container'>
    <div className='yolo-1'></div>
    <div className='yolo-2'></div>
    <div className='yolo-3'></div>
    <div className='yolo-4'></div>
    <div className='yolo-5'></div>
    <div className='yolo-6'></div>
    </div>
  )
}

export default Lecture