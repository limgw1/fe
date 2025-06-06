import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AccountPage() {
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
    <div>
      <div>{session?.user?.email}'s Profile Page</div>
      <Navigate to={ !session ? '/login' : null }/>
      { isLoading ? <div>Logging out...</div> : null }
      <button onClick={(e) => handleLogout(e)}>Log Out</button>
    </div>
  )
}