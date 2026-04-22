import './App.css'
// import LandingPage from './pages/LandingPage'
import { MemberDashboard } from './pages/MemberDashboard'
import { useAuthStore } from './stores/useAuthStore'

function App() {
  const { isAuthenticated } = useAuthStore()

  return (
    <>
      {/* <LandingPage /> */}
      <MemberDashboard />
    </>
  )
}

export default App
