import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'athlete',
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    try {
      await register(form)
      setMessage('Registration successful. Redirecting to login...')
      setTimeout(() => navigate('/login'), 1000)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-card">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="athlete">Athlete</option>
          <option value="coach">Coach</option>
          <option value="physiotherapist">Physiotherapist</option>
          <option value="sports_scientist">Sports Scientist</option>
          <option value="administrator">Administrator</option>
        </select>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <button className="btn">Register</button>
      </form>
    </div>
  )
}