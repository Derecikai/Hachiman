import React,{useEffect, useState} from 'react';
import './Home2.css';
import axios from "axios";
import { FaArrowRight,FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Home2 = () => {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    try{
               const response = await axios.get('http://localhost:8000/api/v1/lectures/?sort=-rating&fields=name,image,author,summary,rating&limit=6');
              //  console.log(response.data.data);
               setData(response.data.data);
       }
   catch(err){
     console.log(err.message)
   }
  } 

  useEffect(() =>{
    
       fetchData();


  },[])


  return (
    <div className='Home2-container'>
    <h1 className='home2-top'>Top Rated</h1>
    <Link className='home2-top2'>See All <FaArrowRight className='home2-arrow' /></Link>
    <div className='container-data'>
    {data && data.map(item => (
      <div className='data-home2'>
        <div className='home2-upper'>
        <img className='home2-img' src={item.image} alt={item.name} key={item.id} />
       <div className='home1-starrate'>
        <h4 className='home2-rating'>{item.rating}</h4>
          <FaStar className='home2-star'/>
        </div>
        </div>
       <div className='home2-degaj'> <h1 className='home2-h1'>{item.name}</h1>
        <p className='home2-p'>{item.summary}</p></div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Home2