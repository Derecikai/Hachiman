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

interface Brawler {
  _id: string;
  name: string;
  image: string;
}

interface Mentor {
  _id: string;
  email: string;
  username: string;
  image: string;
}

interface LectureData {

  achievements: number;
  brawler: Brawler;
  clients: number;
  createdAt: string;
  id: string;
  image: string;
  mentor: Mentor;
  name: string;
  price: number;
  quote: string;
  rating: number;
  sesionStart: number;
  summary: string;
  topMentor: boolean;
  status: string;
}

interface Lecture2Props {
  image: string;
}
const Lecture:FC = () => {

 const [data,setData] = useState<LectureData | null>(null);
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



 useEffect(() => {
getData();
 },[]);



  return (
    <div className='lecture-container'>
     <div className='first-doc'>

      {data && <div className='first-info1'>
       <img className='brawler-guy' src={data?.mentor?.image} alt="" />
      <h1 className='first-info1-name'> { data?.name}</h1>
      <h4 className='first-info1-author'>Author: <span>{ data?.mentor?.username}</span></h4>
      <p className='first-info1-summary'>{data.summary}</p>
      </div>}

     <div className='first-info1-buttons'>
      <button className='first-info1-button uwuflocp'>
        <IoMdPersonAdd className='icon-1-first' />
         Follow</button>
      <button className='first-info1-button specialuwu'>
       <FaMoneyBillWave className='icon-2-first'/> Subscribe</button>
      <button className='first-info1-button'>
       <MdBookmarkAdd className='icon-3-first'/>
       Save</button>
</div>

<div className='first-info1-details'>

<div className='first-info1-details-1'>
  <h4> <MdOutlineAttachMoney className='first-info1-details-1-logo smthlo2'/> Sesion stars at: </h4>
  <h4><span>{data?.sesionStart}$</span></h4>
</div>
<div className='first-info1-details-1'>
  <h4><IoIosStarOutline className='first-info1-details-1-logo smthlo3'/> Rating: </h4>
  <h4 className='smthlo3'>{data?.rating}</h4>
</div>
<div className='first-info1-details-1'>
  <h4><RiRefund2Fill className='first-info1-details-1-logo smthlo'/> Refund Policy: </h4>
  <h4 className='smthlo'>Flexibile</h4>
</div>


</div>

     </div>
     <div className='second-doc'>
      {data && 
      <Lecture2 
       image={data.image} 
      />
      }
     </div>
     <div className='third-doc'></div>
    </div>
  )
}

export default Lecture