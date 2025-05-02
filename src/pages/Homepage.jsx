import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

import './Homepage.css'
import MainContainer from '../components/MainContainer'
import Navbar from '../components/Navbar'

export default function Homepage() {
  const {session, LogoutUser} = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate()

  async function handleLogout(e){
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await LogoutUser()
      if (result.success) {navigate('/login')}
    }
    catch(error){
      setError(error.message)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className='homepage'>
      {/* <aside className={`sidebar ${hidden ? 'hidden' : ''}`} onClick={(e) => setHidden(!hidden)}>
        <Sidebar/>
      </aside> */}
      {/* <div className='main-container'>
        <MainContainer/>
      </div> */}
    </div>
  )
}
