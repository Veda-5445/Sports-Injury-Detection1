import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import RoleRoute from './components/RoleRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Athletes from './pages/Athletes'
import AddAthlete from './pages/AddAthlete'
import AthleteDetails from './pages/AthleteDetails'
import EditAthlete from './pages/EditAthlete'
import Unauthorized from './pages/Unauthorized'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/athletes" element={
          <ProtectedRoute>
            <Athletes />
          </ProtectedRoute>
        } />
        
        <Route path="/athletes/add" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['coach', 'physiotherapist', 'sports_scientist', 'administrator']}>
              <AddAthlete />
            </RoleRoute>
          </ProtectedRoute>
        } />
        
        <Route path="/athletes/:id" element={
          <ProtectedRoute>
            <AthleteDetails />
          </ProtectedRoute>
        } />
        
        <Route path="/athletes/:id/edit" element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['coach', 'physiotherapist', 'sports_scientist', 'administrator']}>
              <EditAthlete />
            </RoleRoute>
          </ProtectedRoute>
        } />
        
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default App