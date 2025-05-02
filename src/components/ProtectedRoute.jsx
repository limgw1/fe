import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function ProtectedRoute({children}) {
  const {session} = useAuthContext()

  if (session === undefined) return <div>Loading...</div>
  return <>{session !== undefined ? children : <Navigate to="/login"/>}</>
}
