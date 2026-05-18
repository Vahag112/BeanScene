import React from 'react'
import './Different.css'
import i1 from '../../images/d1.png'
import i2 from '../../images/d2.png'
import i3 from '../../images/d3.png'
import i4 from '../../images/d4.png'

export default function Different() {
    const list = [
        {img: i1, title: 'Supreme Beans'    , text: 'Beans that provides great taste'},
        {img: i2, title: 'High Quality'     , text: 'We provide the highest quality'},
        {img: i3, title: 'Extraordinary'    , text: 'Coffee like you have never tasted'},
        {img: i4, title: 'Affordable Price' , text: 'Our Coffee prices are easy to afford'},
    ]

  return (
    <div className='different'>
      <div className="container">
        <h2>Why are we different?</h2>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className="content">
            {
                list.map((elem,index) => (
                    <div className="item" key={index}>
                        <img src={elem.img} alt="" />
                        <h3>{elem.title}</h3>
                        <p>{elem.text}</p>
                    </div>
                ))
            }
        </div>
        <div className="box">
            <span>Great ideas start with great coffee, Lets help you achieve that</span>
            <span>Get started today.</span>
        </div>

        <button>Join Us</button>

      </div>

    </div>
  )
}
