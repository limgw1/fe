import React, {createContext, useEffect, useState, useContext} from 'react'
import { supabase } from '../utils/supabaseClient'

const AuthContext = createContext()

function AuthContextProvider({children}){
  const [session, setSession] = useState(null)
  const [authLoading, setAuthLoading] = useState(false)

  useEffect(() => {
    setAuthLoading(true)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setAuthLoading(false)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setAuthLoading(false)
    })
    
  }, [])
  

  async function LogoutUser(){
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("There was a problem with logging out: ", error)
      return {success: false, error}
    }
    return {success: true, data}
  }

  async function LoginUser(email, password){
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.error("There was a problem with logging in: ", error)
      return {success: false, error}
    }
    return {success: true, data}
  }

  async function SignUpUser(email, password){
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) {
      console.error("There was a problem with signing up: ", error)
      return {success: false, error}
    }
    return {success: true, data}
  }

  async function GetSession() {
    const session = await supabase.auth.getSession()
    return session
  }

  return(
    <AuthContext.Provider value={{session, 
      setSession,
      LoginUser, 
      SignUpUser, 
      LogoutUser,
      GetSession,
      authLoading
    }}
    >
      {children}
    </AuthContext.Provider>
  )
} 

// Custom hook to use the auth context
function useAuthContext(){
  const authContext = useContext(AuthContext)
  return authContext
}

export {useAuthContext, AuthContextProvider}
