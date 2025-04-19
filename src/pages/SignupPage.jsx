import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log("Signing up with:", email, username, password)
    // TODO: ADD LOGIC HERE
  }
  return (
    <div>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter your email here'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='username'
          placeholder='Enter your username here'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div>Don't have an account yet? <Link to="/signup">Sign up here!</Link></div>
    </div>
  )
}
