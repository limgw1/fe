import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ComingSoon from './pages/ComingSoon'
import PageNotFound from './pages/PageNotFound'
import SignupPage from './pages/SignupPage'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import Homepage from './pages/Homepage'
import AddTaskModal from './components/AddTaskModal'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="coming-soon" element={<ComingSoon/>}/>
          <Route path="dev" element={<AddTaskModal/>}/>
          <Route path="home" element={
            <ProtectedRoute>
              <Navbar/>
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
