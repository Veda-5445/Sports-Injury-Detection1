import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="nav">
      <Link to="/dashboard" className="brand">Sports Injury System</Link>

      <div className="nav-links">
        {user && <Link to="/athletes">Athletes</Link>}
        {user && <span className="role-badge">{user.role}</span>}
        {user ? (
          <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}