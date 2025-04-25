import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function LoginPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const {session, LoginUser} = useAuthContext()

  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await LoginUser(email, password)
      if (result.success) {navigate('/home')}
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
      <h2>Login page</h2>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Enter your email here'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Enter your password here'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {isLoading ? <div>Loading...</div> : null }
      {error ? <div>Error: {error}</div> : null }
      <div>Don't have an account yet? <Link to="/signup">Sign up here!</Link></div>
    </div>
  )
}