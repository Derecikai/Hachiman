import React,{FC} from 'react'
import "./Lecture4.css"
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

interface props4{
 reviewsLength: number | undefined
}

const Lecture4:FC <props4> = ({reviewsLength}) => {
  return (
    <div className='lect-4-yolo-container'>
     <div className='lect4-1-section'> <BsPeople className='communirt-icon-lect-4'/> <h1 className='community-lect-4'>Community</h1> </div>
     <div className='lect-4-section'>
     <div className='lect4-fist-section'> <IoEllipsisHorizontalCircle className=" gugugasas"/> <div className='lect-4-idk-man'><h2 className='lect4-ttitle-2'>Total Reviews</h2> <p className='p-length'>{reviewsLength}</p></div> </div>
     <div className='lect4-fist-section'> <FaFireFlameCurved className="logo-lect4"/> <div className='lect-4-idk-man'><h2 className='lect4-ttitle-2'>Refund Policy</h2> <p className='p-length '>Flexible</p></div> </div>
     </div>
     </div>
  )
}

export default Lecture4