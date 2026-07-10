import React from 'react'
import './Discover.scss'
import i1 from '../../images/discoverPage.png'

export default function Discover() {
  return (
    <div className='discover'>
      <div className="container">
        <div className="content">
            <h2>Discover the best coffee</h2>
            <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <button>Learn More</button>
        </div>
        <img src={i1} alt="" />
      </div>
    </div>
  )
}
