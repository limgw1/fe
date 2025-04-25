import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import AccountPage from './pages/AccountPage'
import PageNotFound from './pages/PageNotFound'
import SignupPage from './pages/SignupPage'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Homepage from './pages/Homepage'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="home" element={
            <ProtectedRoute>
              <Homepage/>
            </ProtectedRoute>
          }
          />
          {/* <Route path="account" element={
            <ProtectedRoute>
              <AccountPage/>
            </ProtectedRoute>
          }
          /> */}
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
