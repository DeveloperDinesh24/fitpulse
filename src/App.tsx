import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import { MemberDashboard } from './pages/MemberDashboard'

const isAuthenticated = true

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/auth' element={<AuthPage />} />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MemberDashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes to home */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
