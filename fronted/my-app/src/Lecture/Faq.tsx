import React, { FC,useState } from 'react'

interface FaqProps {
  toggleFaq: () => void,
  toggle: boolean | null
}

const Faq:FC<FaqProps> = ({toggleFaq,toggle}) => {

  return (
    <section onClick={toggleFaq}>
        <div className={`faq ${toggle ? 'active' : ''}`}>
        <div className="question"><h2>Video Section</h2></div>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem autem nesciunt consequuntur harum quasi veniam, minus ad laboriosam assumenda.</p>
        </div>
        </div>
        <div className={`faq ${toggle ? 'active' : ''}`}>
        <div className="question"><h2>Video Section</h2></div>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem autem nesciunt consequuntur harum quasi veniam, minus ad laboriosam assumenda.</p>
        </div>
        </div>
        <div className={`faq ${toggle ? 'active' : ''}`}>
        <div className="question"><h2>Video Section</h2></div>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorem autem nesciunt consequuntur harum quasi veniam, minus ad laboriosam assumenda.</p>
        </div>
        </div>
      </section>
  )
}

export default Faq