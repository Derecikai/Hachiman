import React, { FC, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./Lecture.css";
import { IoMdPersonAdd } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";

type dataRecived = {
author: string,
createdAt: string,
firstName: string,
id: string,
image: string,
name: string,
price: number,
rating: number,
secondName: string,
summary: string,
_id: string,
brawler : {
  name: string,
  image: any
  summary: string,
  _id: string,
}
};

const Lecture:FC = () => {

 const [data,setData] = useState<dataRecived | null>(null);
const {id} = useParams();
 
 const getData = async ():Promise<void> =>{   
      try{
    const response = await axios.get(`http://localhost:8000/api/v1/lectures/${id}`);
     console.log(response.data);
     setData(response.data.data);
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
       <img className='brawler-guy' src={data.image} alt="" />
      <h1 className='first-info1-name'> { data.name}</h1>
      <h4 className='first-info1-author'>Author: <span>{ data.author}</span></h4>
      <p className='first-info1-summary'>{data.summary}</p>
      </div>}

     <div className='first-info1-buttons'>
      <button className='first-info1-button'>
        <IoMdPersonAdd className='icon-1-first' />
         Follow</button>
      <button className='first-info1-button specialuwu'>
       <FaMoneyBillWave className='icon-2-first'/> Buy</button>
      <button className='first-info1-button'>
       <MdBookmarkAdd className='icon-3-first'/>
       Save</button>
</div>

     </div>
     <div className='second-doc'></div>
     <div className='third-doc'></div>
    </div>
  )
}

export default Lecture