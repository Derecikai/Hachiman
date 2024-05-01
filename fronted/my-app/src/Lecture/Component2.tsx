import React,{FC} from 'react'
import "./Component2.css"

interface LectureXProps {
 quote: string | undefined,
}
const Component2:FC<LectureXProps> = ({quote}) => {
  return (
    <div className='comp2-quote-container'>
     <h2 className='comp2-quote-quote'>{quote}</h2>
     </div>
  )
}

export default Component2