import React from 'react'
import './Busidea.css';

const BusCard = ({props}) => {
 
  return (
    <div className='buscard-container'>
    
<div className='buscard-logo'>{props.icon}</div>
        <h3 className='buscard-title'>{props.title}</h3>
        <p className='buscard-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor, officia saepe esse accusantium soluta quaerat in adipisci ad veritatis facere maxime culpa obcaecati eligendi ducimus voluptatem iure aspernatur debitis eos illo a quae sapiente maiores totam! Quidem, explicabo nisi.</p>
    </div>
  )
}

export default BusCard