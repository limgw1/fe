import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import './LandingPage.css'
import Logo from '../components/Logo'

export default function LandingPage() {
  const {session} = useAuthContext()

  return (
    <div>
      <nav className="navbar">
        <div className="logo-title">
            <Logo className="logo"/>
            <p>Prodigy</p>
        </div>
        <ul className='center-nav'>
            <li>Product</li>
            <li>Order</li>
            <li>Pricing</li>
        </ul>
        <ul className="right-nav">
            <li>Learn</li>
            <li>Support</li>
            { session ? <li><Link to="/account">My Account</Link></li> : null }
            <li><Link to="/login">Login</Link></li>{/*  TODO: MAKE IT SWITCH BETWEEN SIGN UP AND LOGIN */}
        </ul>
      </nav>
      <div className='hero-container'>
        <div className='left-section'>
            <div>Main Marketing Slogan</div>
            <div>Sub Marketing Slogan</div>
            <div><Link to="/login">Start for Free</Link></div>
        </div>
        <div className='right-section'>
            <img src="https://img.freepik.com/free-psd/college-template-design_23-2151693602.jpg?ga=GA1.1.1152302962.1743735256&semt=ais_hybrid&w=740"></img>
        </div>
      </div>
    </div>
  )
}
