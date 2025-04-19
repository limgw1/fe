import React from 'react'
// import {ReactComponent as LogoSVG} from '../assets/Logo.svg'
import LogoSVG from "../assets/Logo.svg"

export default function Logo({size=40}) {
  return (
    <div>
        <img 
            src={LogoSVG} 
            alt="Logo"
            style={{width: `${size}px`, height:`${size}px`}}
        />
    </div>
  )
}
