import React, { useEffect, useState } from 'react'
import './Home3.css'
import axios from 'axios'
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaArrowRight,FaStar } from "react-icons/fa";

const Home3 = () => {

 const [data ,setData] = useState(null);
const fetchData = async () =>{
try{
    const response = await axios.get('http://localhost:8000/api/v1/lectures?sort=price&limit=3');
    console.log(response.data.data)
   setData(response.data.data);

   }catch(err){
    console.log(err,"This is the message",err.message);


   }}

 useEffect(() =>{

  fetchData();
   
 }, []);

  return (
    <div className='home3-container'>
     <h1 className='home3-top'>Rated by Price</h1>
    <Link className='home3-top2'>See All <FaArrowRight className='home2-arrow' /></Link>
     <div className='home3-content'>

{data && data.map(item => (
      <div className='data-home3'>
        <div className='home3-left'>
        <img className='home3-img' src={item.image} alt={item.name} key={item.id} />
      
        </div>
       <div className='home2-degaj home-3right'> <h1 className='home2-h1'>{item.name}</h1>
        <p className='home2-p'>{item.summary}</p>
        <h4 className=' home3-rating'>Author: {item.author}</h4>
         <h4 className='home-3-price'>Price: {item.price}$</h4>
        </div>
        
        </div>
      ))}


      </div>
      </div>
  )
}

export default Home3