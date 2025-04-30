import React, {useState, useEffect} from 'react'
import { useAuthContext } from '../context/AuthContext'
import './MainContainer.css';

export default function MainContainer() {
  const {session} = useAuthContext()
  const [authLoading, setAuthLoading] = useState(false)
  
  console.log("Session in maincontainer:", session)
  return (
    <div>
      <div>Welcome, {session?.user?.email}!</div>
      <div className='task-list'>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
        <div>Task: Do something</div>
      </div>
    </div>
  )
}
