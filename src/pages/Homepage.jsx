import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

import './Homepage.css'

export default function Homepage() {
  const {session, LogoutUser} = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
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
    <div className='main-homepage'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='main-container'>Welcome, {session?.user?.email}!</div>
    </div>
  )
}
