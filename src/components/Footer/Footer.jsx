import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Choose from a diverse menu featuring a delectable array of dishes. <br />
              Our mission is to satisfy your cravings and elevate your dining experience,<br />
              One delicious meal at a time.</p>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+212 5 00 00 00 00</li>
                <li>contact@mhfood.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright &copy; 2025 Mhfood.com - All Right Reserved</p>
    </div>
  )
}

export default Footer