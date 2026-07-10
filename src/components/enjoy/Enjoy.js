import React from 'react'
import './Enjoy.scss'
import i1 from '../../images/coffee1.png'
import i2 from '../../images/coffee2.png'
import i3 from '../../images/coffee3.png'
import i4 from '../../images/coffee4.png'

export default function Enjoy() {
  const list = [
    { name: 'Cappuccino', img: i1 },
    { name: 'Chai Latte', img: i2 },
    { name: 'Macchiato', img: i3 },
    { name: 'Expresso', img: i4 }
  ]

  return (
    <div className='enjoy'>
      <div className="container">
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <div className="content">
          {
            list.map((elem, index) => (
              <div className="item" key={index}>
                <img src={elem.img} alt="" />
                <div className="box">
                  <h3>{elem.name}</h3>
                  <p>Coffee 50% | Milk 50%</p>
                  <span>$8.50</span>
                </div>
                <button>Order Now</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
