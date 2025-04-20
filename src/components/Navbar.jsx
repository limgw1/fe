import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function Navbar() {
  const {session} = useAuthContext()

  return (
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
  )
}
