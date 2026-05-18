import React from 'react'
import './Perfection.css'
import i1 from '../../images/Jonny.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Perfection() {
    return (
        <div className='perfection'>
            <div className="container">
                <h2>Our coffee perfection feedback</h2>
                <p>Our customers has amazing things to say about us</p>
                <div className="content">
                    <span className='span'>“</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                    <div className="box">
                        <h3>Jonny Thomas</h3>
                        <span>Project Manager</span>
                    </div>
                    <img src={i1} alt="" />
                    <button className='left'><FaArrowLeft /></button>
                    <button className='right'><FaArrowRight/></button>
                </div>
            </div>
        </div>
    )
}
