import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const {SignUpUser} = useAuthContext()

  const navigate = useNavigate()

  async function handleSignUp(e){
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await SignUpUser(email, password)
      if (result.success) {navigate('/account')}
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
      <h2>Signup page</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
      {isLoading ? <div>Loading...</div> : null }
      {error ? <div>Error: {error}</div> : null }
      <div>Already have an account? <Link to="/login">Log in here!</Link></div>
    </div>
  )
}
