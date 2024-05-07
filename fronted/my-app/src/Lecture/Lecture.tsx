import React, { FC, useEffect, useState } from 'react'
import axios from "axios";
import { useParams,Link,useNavigate } from 'react-router-dom';
import "./Lecture.css";
import "./LectureX.css";
import LectureX from './LectureX';
import Lecture2 from './Lecture2';
import { IoMdPersonAdd } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import Lecture3 from './Lecture3';
import { MdGroupAdd } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import Lecture4 from './Lecture4';
import { useAuth } from 'Context/userContext';


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
  associeted: LectureData[] | [],
  reviewsLength: number,
}

type AuthState = {
  token: string | null;
  isLoggedIn: boolean;
};

// interface Lecture2Props {
//   image: string,
//   name: string
// }
const Lecture:FC = () => {
 const [subscribe,setSubscribe]  = useState<boolean>(false);
 const [data,setData] = useState<LectureData | null>(null);
 const [isSecondSlideVisible, setIsSecondSlideVisible] = useState<boolean>(false);
 const {auth} = useAuth();
const {id} = useParams();
 const navigate = useNavigate();
 

    console.log(auth.token,"Divers");

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
  
 const toggleSub = () => {
    setSubscribe(!subscribe);
  };

 useEffect(() => {

  if(auth.token === null){
   navigate('/login')
  }


getData();
 },[id,auth.token]);



  return (
    <div className='lecture-container'>
      
    <div className='yolo-1'>
      <div className='yolo-1-container'>
    <img className='yolo-1-img' src={data?.mentor.image} alt="" />
    <h1 className='yolo-1-name'>{data && data?.name}</h1>
    <p className='yolo-1-p'> <span className='span-yolo1'> {data && data?.clients}</span> active subscribers</p>
    <div className='buttons-yolo-1'>
    <Link className='link-yolo-1' onClick={toggleSub}  to={""}>  <FaCheck className='yolo-1-logo'/>{subscribe ? "Unsubscribe" : "Subscribe"}</Link>
    <Link className='link-yolo-2' to={""}> <MdGroupAdd className='yolo-2-logo' /> </Link>
    <Link className='link-yolo-3' to={""}> <MdBookmarkAdd className='yolo-3-logo' /> </Link>
    </div>
    </div>


    </div>

    <div className='yolo-2'>
      {data && <Lecture3 image={data?.brawler.image} 
      summary={data.summary} />}
    </div>

    <div className='yolo-3'>

     <button className='button-yolo-3'> <h2 className='yolo-3-txt'>See the courses</h2>  <MdOutlineArrowOutward className='arrow-logo-3' /> </button>

    </div>


    <div className='yolo-4'>
      <Lecture4 reviewsLength={data?.reviewsLength}/>
    </div>
    
    
    
    <div className='yolo-5'>
   <div className='section-1-yolo5'> <h2 className='title-yolo5'>Other by this Coach</h2>
    <MdOutlineArrowOutward className='arrow-logo' /></div>
    {data && data.associeted.map(lecture => (
         <Link className='sometihn-disada' to={`/lecture/${lecture.id}`}> <Lecture2 key={lecture.id} {...lecture} /></Link>
        ))}

    </div>


    <div className='yolo-6'>
      <LectureX reviews={data?.reviews as Review[]} quote={data?.quote} achivments={data?.achivments} reviewsLength={data?.reviewsLength}/>
    </div>
    </div>
  )
}

export default Lecture