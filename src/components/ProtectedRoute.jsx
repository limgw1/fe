import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useEffect } from 'react'

export default function ProtectedRoute({children}) {
  const {session} = useAuthContext()
  console.log("Session in PR.jsx: ", session)

  useEffect(() => {
    console.log("New session in PR.jsx: ", session)
  },[session])

  if (session === undefined) return <div>Loading...</div>
  return <>{session !== undefined ? children : <Navigate to="/login"/>}</>
}
