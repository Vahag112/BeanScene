import React from 'react'
import './Footer.scss'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {

  return (
    <footer>
        <div className="img"></div>
        <div className="container">
            <div className="item">
              <h3>Bean Scene</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="box">
                    <FaFacebook />
                    <AiFillInstagram />
                    <FaYoutube />
                    <FaTwitter />
              </div>
            </div>
            <ul>
              <li>About</li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Features</a></li>
              <li><a href="/">News & Blogs</a></li>
              <li><a href="/">Help & Supports</a></li>
            </ul>
            <ul>
              <li>Company</li>
               <li><a href="/">How we work</a></li>
              <li><a href="/">Terms of service</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">FAQ</a></li>
            </ul>
            <ul>
              <li>Contact Us</li>
               <li><a href="/">Akshya Nagar 1st Block 1st Cross,<br />Rammurthy nagar, Bangalore-560016</a></li>
              <li><a href="/">+1 202-918-2132</a></li>
              <li><a href="/">beanscene@mail.com</a></li>
              <li><a href="/">www.beanscene.com</a></li>
            </ul>
        </div>
    </footer>
  )
}
