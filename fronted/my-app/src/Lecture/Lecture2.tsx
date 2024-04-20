import React, { FC } from 'react';
import "./Lecture2.css";

interface Lecture2Props {
  image: string;
}

const Lecture2:FC<Lecture2Props> = ({image}) => {
  return (
    <div className='first-info-2'>
      <img className='flo-cmp-132' src={image} alt="" />
    </div>
  )
}

export default Lecture2