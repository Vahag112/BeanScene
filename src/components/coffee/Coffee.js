import React from 'react'
import './Coffee.scss'
import Header from '../header/Header'

export default function Coffee() {
    return (
        <div className="coffee_back">
            <Header />
            <div className='coffee'>
                <div className="container">
                    <p>We’ve got your morning covered with</p>
                    <h2>Coffee</h2>
                    <span>It is best to start your day with a cup of coffee. Discover the best coffee flavors you will ever have. We provide the best for our customers.</span>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    )
}
