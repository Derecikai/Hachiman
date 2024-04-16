import React, { useState, useEffect, ReactEventHandler,ChangeEvent } from 'react';
import './Search.css'
import { MdArrowForwardIos } from "react-icons/md";
import { FaSearchDollar } from "react-icons/fa";


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
_id: string
}[];

const Search = () => {

   const [searchTerm, setSearchTerm] = useState<string>('');
  const [lectures, setLectures] = useState<dataRecived | []>([]);
   const [rotated, setRotated] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      let response
      try {
        if(searchTerm === ""){
          response = await fetch(`http://localhost:8000/api/v1/lectures`);
        }
        else
        {
          response = await fetch(`http://localhost:8000/api/v1/lectures?search=${encodeURIComponent(searchTerm)}`);
        }
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.data)
        setLectures(data.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // if (searchTerm !== '') {
      fetchData();
    // } else {
    //   setLectures([]);
    // }
  }, [searchTerm]);

const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to toggle rotation state
  const toggleRotation = () => {
    setRotated(!rotated);
  };

  return (
    <div className='search-container'>
      <div className='search-left'>
        <h3 className='search-filter-txt'>Filter by <MdArrowForwardIos className={`arrow-filter ${rotated ? 'rotated' : ''}`} onClick={toggleRotation} /></h3>
      </div>
      <div className='search-right'>
      <input className='hahah' placeholder='Search here' type="text" value={searchTerm} onChange={handleSearchChange}  />
     
      <div className='idk'>
        {lectures && lectures.map((lecture) => (
         
           <div key={lecture.id} className='saerch-lecture-div'>
             <img className='search-img' src={lecture.image} alt='lecture-image' />  
             <div className='search-statuses'>
            <h2 className='search-title'>{lecture.name}</h2>
            <h3 className='search-price'>{lecture.price}$</h3></div>
            
          </div>
        ))}
       </div>
      </div>
      
    </div>
  )
}

export default Search