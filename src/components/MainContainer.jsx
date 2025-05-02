import React, {useState} from 'react'
import { useAuthContext } from '../context/AuthContext'
import TaskItem from './TaskItem'
import './MainContainer.css';

export default function MainContainer() {
  const {session} = useAuthContext()
  const [authLoading, setAuthLoading] = useState(false)
  
  return (
    <div>
      <h1 className='main-title'>TODAY</h1>
      <div className='task-list'>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
      </div>
    </div>
  )
}
