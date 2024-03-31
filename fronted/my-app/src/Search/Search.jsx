import React, { useState, useEffect } from 'react';
import './Search.css'


const Search = () => {

   const [searchTerm, setSearchTerm] = useState('');
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/lectures?search=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // setLectures(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchTerm !== '') {
      fetchData();
    } else {
      setLectures([]);
    }
  }, [searchTerm]);

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input className='hahah' type="text" value={searchTerm} onChange={handleSearchChange} />
      {/* <ul>
        {lectures.map((lecture) => (
          <li key={lecture.id}>{lecture.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Search