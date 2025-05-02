import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const {session, LogoutUser} = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  // General UseEffect, since the navbar is active in every component in the main App, it can act as a safety

  async function handleLogout(e){
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await LogoutUser()
      if (result.success) {
        navigate('/login')
      }
    }
    catch(error){
      setError(error.message)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item left"><Logo/></li>
        <li className="navbar__item left">Welcome, Guowei</li>
        <li className="navbar__item push">Task Manager</li>
        <li className="navbar__item ">Learning Assistant</li>
        <li className="navbar__item ">Help</li>
        { !session ? <li className="navbar__item"><Link to="/login">Login</Link></li> : <li className="navbar__item" onClick={(e) => handleLogout(e)}>Log Out</li>}
        { !session ? <li className="navbar__item"><Link to="/login">Sign Up</Link></li> : null }
      </ul>
    </nav>
  )
}
