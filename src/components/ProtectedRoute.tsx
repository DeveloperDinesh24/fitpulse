import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

// For now, we just pass isAuthenticated as a prop.

export const ProtectedRoute = ({
  children,
  isAuthenticated,
}: {
  children: JSX.Element
  isAuthenticated: boolean
}) => {
  if (!isAuthenticated) {
    // If not logged in, bounce them to the login page
    return <Navigate to='/auth' replace />
  }
  return children
}
