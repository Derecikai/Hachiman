import React, { FC, useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import { Link } from "react-router-dom";
import "./LectureX.css";
import { GoCodeReview } from "react-icons/go";
import { BsChatSquareQuote } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { FaOptinMonster } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Component3 from './Component3';

interface Review {
  id: string,
  rating: number,
  review: string,
  user: {
    username: string,
    _id: string,
    image?: string
  }
}

interface LectureXProps {
  reviews: Review[] | [],
  quote: string | undefined,
  achivments: number | undefined,
  reviewsLength: number | undefined
}

const LectureX: FC<LectureXProps> = ({ reviews, quote,achivments,reviewsLength }) => {
  const [activeComponent, setActiveComponent] = useState<string | null>("component1");

  return (
    <div className='lecturex-container'>
      <div className='buttons-lecturex'>
        <button className='button-lecturex-ind' onClick={() => setActiveComponent('component1')}>
          <GoCodeReview className='icon-lecturex' /> Reviews
        </button>
        <button className='button-lecturex-ind' onClick={() => setActiveComponent('component2')}>
          <BsChatSquareQuote className='icon-lecturex' /> Quote
        </button>
        <button className='button-lecturex-ind' onClick={() => setActiveComponent('component3')}>
          <GoTrophy className='icon-lecturex' /> Achievements
        </button>
        {/* <Link className='button-lecturex-ind' to={"/search"} onClick={() => setActiveComponent('component1')}>
          <FaOptinMonster className='icon-lecturex' />
          <div className="sometext-lecturex">Brawlers</div>
        </Link> */}
        <Link className='button-lecturex-ind' to={"/search"} onClick={() => setActiveComponent('component1')}>
          <FiUser className='icon-lecturex' />
          <div className="sometext-lecturex"> Profile</div>
        </Link>
      </div>
      <div className="transition-container">
        {/* Render the active component with animation */}
        <div className={`transition-item ${activeComponent === 'component1' ? 'active' : ''}`}>
          <Component1 reviews={reviews as Review[]} key="component1" classname="transition-item" />
        </div>
        <div className={`transition-item ${activeComponent === 'component2' ? 'active' : ''}`}>
          <Component2 quote={quote} />
        </div>
        <div className={`transition-item ${activeComponent === 'component3' ? 'active' : ''}`}>
          <Component3 achivments={achivments} reviewsLength={reviewsLength}/>
        </div>
      </div>
    </div>
  );
}

export default LectureX;