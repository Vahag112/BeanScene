import React, { useState } from 'react'
import './Header.css'
import { HiBars3 } from 'react-icons/hi2'
export default function Header() {
    const [open,setOpen] = useState(false)

    return (
        <header>
            <div className="container">
                <h1><a href="/">Bean Scene</a></h1>
                <nav className={open ? 'show' : ''}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </nav>
                <span className='bars' onClick={() => setOpen(!open)}><HiBars3 /></span>
                <div  className={open ? 'reg show' : 'reg'}>
                    <a href="/">Sign in</a>
                    <button>SignUp</button>
                </div>
            </div>
        </header>
    )
}
