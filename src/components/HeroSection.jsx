import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
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
  )
}
