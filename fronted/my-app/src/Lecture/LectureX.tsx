import React,{FC,useState} from 'react'
import Component1 from './Component1'
import {Link} from "react-router-dom"
import "./LectureX.css";
import { GoCodeReview } from "react-icons/go";
import { BsChatSquareQuote } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { FaOptinMonster } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

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
}


const LectureX:FC<LectureXProps> = ({reviews}) => {


 const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <div className='lecturex-container'> 
    <div className='buttons-lecturex'>
      <button className='button-lecturex-ind'  onClick={() => setActiveComponent('component1')}> <GoCodeReview className='icon-lecturex' />  Reviews</button>
     
      <button className='button-lecturex-ind' onClick={() => setActiveComponent('component2')}> <BsChatSquareQuote className='icon-lecturex' /> Quote</button>
      
      <button className='button-lecturex-ind' onClick={() => setActiveComponent('component3')}> <GoTrophy className='icon-lecturex' /> Achivments</button>

       <Link className='button-lecturex-ind' to={"/search"} onClick={() => setActiveComponent('component1')}>  <FaOptinMonster className='icon-lecturex' /> <div className="sometext-lecturex">Brawlers</div></Link>
     
       <Link className='button-lecturex-ind' to={"/home"} onClick={() => setActiveComponent('component1')}>  <FiUser className='icon-lecturex' />
       <div className="sometext-lecturex"> Profile</div>
      </Link>
      
</div>
<div className="transition-container">
        {/* Render the active component based on the state */}
        {activeComponent === 'component1' && <Component1 reviews={reviews as Review[]} key="component1" classname="transition-item" />}
        {activeComponent === 'component2' && <h3 className="transition-item">Hello</h3>}
        {activeComponent === 'component3' && <h3 className="transition-item">Hello2</h3>}
      </div>

     </div>
  )
}

export default LectureX