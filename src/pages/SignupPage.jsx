import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../utils/supabaseClient'

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    console.log("Signing up with:", email, username, password)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) console.log(error)
  }
  return (
    <div>
      <h2>Signup page</h2>
      <form onSubmit={handleSubmit}>
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
      <div>Already have an account? <Link to="/signup">Log in here!</Link></div>
    </div>
  )
}
