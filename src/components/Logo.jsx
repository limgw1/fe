import React from 'react'
import { Link } from 'react-router-dom'
import LogoSVG from "../assets/Logo.svg"
import "./Logo.css"

export default function Logo({size=50, text=true}) {
  return (
    <Link className="logo__link" to="/home">
      <div>
          <img 
              className='logo__image'
              src={LogoSVG} 
              alt="Logo"
              style={{width: `${size}px`, height:`${size}px`}}
          />
          {text ? <span className='logo-text'>Prodigy</span> : null}
      </div>
    </Link>
  )
}
