import React from 'react'
import "./Learning.css";
import CardLrg from './CardLrg';
import someimage from '../bro.webp'
import someimage2 from '../bro-2.webp'
import someimage3 from '../bro-3.webp'

const data = {
  img: someimage,
  name: 'Kanye West',
  desc: 'A reliable person, working from 2011 in Discord comunity'
}
const data2 = {
  img: someimage2,
  name: 'Florin Cimpan',
  desc: 'Our trustworthy CEO, working and training since 2005'
}
const data3 = {
  img: someimage3,
  name: 'Popovici Robert',
  desc: 'Chief in Kanesaka Ohio of AI departmet, mentor since 2001'
}

const Learning = () => {
  return (
        <div className='yo'>
    
    
    <div className='card-lrg'>
     <div className='lrg-shadow'></div>
     <div className='cards-lrg'>
     <CardLrg item={data}/>
     <CardLrg item={data2}/>
     <CardLrg item={data3}/>
     </div>
     <div className='lrg-side-txt'><h1>Learn AI at all levels</h1>
     <p className='lrg-side-txt-p'>With our persoanl you can't fail, learn all about AI integration<span>  in your projects aswell as the projects you will be working on.</span></p></div>
    </div>
    
    </div>
  )
}

export default Learning