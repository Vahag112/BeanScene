import React from 'react'
import './Morning.css'
import i1 from '../../images/cup.png'

export default function Morning() {
  return (
    <div className='morning'>
      <div className="container">
        <div className="content">
          <h2>Get a chance to have an <br />Amazing morning</h2>
          <p>We are giving you are one time opportunity to <br /> experience a better life with coffee.</p>
          <button>Order Now</button>
        </div>
        <img src={i1} alt="" />
      </div>
    </div>
  )
}
