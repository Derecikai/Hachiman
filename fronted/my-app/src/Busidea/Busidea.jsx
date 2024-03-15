import React from 'react'
import './Busidea.css'
import BusCard from './BusCard';
import { GiColdHeart,GiAbdominalArmor,GiAbstract016,GiAbstract048,GiAbstract042,GiAbstract063,GiAbstract107 } from "react-icons/gi";

const data1 = {icon: <GiAbdominalArmor />, title:'Learning in 21 days' } 
const data2 = {icon: <GiAbstract016 />, title:'Early summer Bootcamp'}
const data3 = {icon: <GiAbstract048 />, title:'Get assisted by our AI'}
const data4 = {icon: <GiColdHeart />, title:'Online Courses in the winter'}
const data5 = {icon: <GiAbstract063 />, title:'Learn AI components'}
const data6 = {icon: <GiAbstract107 />, title:'Contact support easily'}

const Busidea = () => {
  return (
    
    <div className='bus-container'>
      <BusCard props={data1}/>
      <BusCard props={data2}/>
      <BusCard props={data3}/>
      <BusCard props={data4}/>
      <BusCard props={data5}/>
      <BusCard props={data6}/>
    </div>
  )
}

export default Busidea