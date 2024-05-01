import React,{FC} from 'react'
import "./Component3.css"

interface Props3 {
 achivments: number | undefined,
 reviewsLength: number | undefined
}

const Component3:FC<Props3> = ({achivments,reviewsLength}) => {
  return (
    <div className='numbers-comp3-container'>
     <div>
      <h1 className='comp3-text'>Achivments <br />{achivments}</h1>
      <h1 className='comp3-text'>Total Reviews <br />{reviewsLength}</h1></div>
     </div>
  )
}

export default Component3