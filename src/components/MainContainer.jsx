import React from 'react'
import { useAuthContext } from '../context/AuthContext'

export default function MainContainer() {
  const {session} = useAuthContext()
  return (
    <div>Welcome, {session?.user?.email}!</div>
  )
}
