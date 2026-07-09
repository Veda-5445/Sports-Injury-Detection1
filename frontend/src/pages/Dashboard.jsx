import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name || 'User'}.</p>
      <p>Your role is <strong>{user?.role}</strong>.</p>
    </div>
  )
}