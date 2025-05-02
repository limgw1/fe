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

  const navigate = useNavigate()

  return (
    <div className='homepage'>
      <div className='grid-container'>
        <div className='box-1'><h2>Main Dashboard</h2></div>
        <div className='box-2'><h2>To-Dos</h2></div>
        <div className='box-3'><h2>Habit</h2></div>
        <div className='box-4'>
          <h2>Projects</h2>
          <ul className='project-list'>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
            <li className='project-item'>Project Item</li>
          </ul>
        </div>
      </div>
      {/* <aside className={`sidebar ${hidden ? 'hidden' : ''}`} onClick={(e) => setHidden(!hidden)}>
        <Sidebar/>
      </aside> */}
      {/* <div className='main-container'>
        <MainContainer/>
      </div> */}
    </div>
  )
}
