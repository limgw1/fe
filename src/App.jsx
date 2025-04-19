import { useState, useEffect } from 'react'
import { supabase } from './utils/supabaseClient'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import AccountPage from './pages/AccountPage'
import PageNotFound from './pages/PageNotFound'
import SignupPage from './pages/SignupPage'

function App() {
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="login" element={!session ? <LoginPage/> : <Navigate to="/account" replace />}/>
        <Route path="account" element={session ? <AccountPage key={session.user.id} session={session} /> : <Navigate to="/login" replace />}/>
        <Route path="signup" element={<SignupPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
