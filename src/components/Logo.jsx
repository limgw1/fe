import React from 'react'
// import {ReactComponent as LogoSVG} from '../assets/Logo.svg'
import LogoSVG from "../assets/Logo.svg"
import "./Logo.css"

export default function Logo({size=20, text=true}) {
  return (
    <div>
        <img 
            src={LogoSVG} 
            alt="Logo"
            style={{width: `${size}px`, height:`${size}px`}}
        />
        {text ? <span className='logo-text'>Prodigy</span> : null}
    </div>
  )
}
