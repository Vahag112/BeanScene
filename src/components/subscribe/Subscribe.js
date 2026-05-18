import React from 'react'
import './Subscribe.css'
export default function Subscribe() {
  return (
    <div className='subscribe'>
        <div className="container">
            <h2>Subscribe to get the Latest News</h2>
            <p>Don’t miss out on our latest news, updates, tips and special offers</p>
            <div className="item">
                <input type="text"  placeholder='Enter your mail'/>
                <button>Subcribe</button>
            </div>
        </div>
    </div>
  )
}
