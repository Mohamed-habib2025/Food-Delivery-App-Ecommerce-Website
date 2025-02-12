

import React from 'react'
import "./commensection.css"

function Commensection(props) {
  return (
    <section className=' Commen_section py-[80px] px-0 '>
      <h2  className='w-[85%] mx-auto text-white text-4xl '>{props.title}</h2>
    </section>
  )
}

export default Commensection
