import React, { FC,useState } from 'react';
import "./Lecture2.css";
import Faq from './Faq';

interface Lecture2Props {
  image: string,
  name: string
}

const Lecture2:FC<Lecture2Props> = ({image,name}) => {
  const [toggle,setToggle] = useState<boolean | null>(null);

  const toggleFaq = () => {
    setToggle(!toggle);
  };

  return (
    <div className='first-info-2'>
      <div className='first-info-2-session'>
      <img className='flo-cmp-132' src={image} alt="" />
      <h4 className='first-info-2-brawler-name'>Brawler: {name}</h4>
      </div>
      <Faq toggle={toggle} toggleFaq={toggleFaq}/>
    </div>
  )
}

export default Lecture2