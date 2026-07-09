import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EditAthlete() {
  const { id } = useParams()
  const [form, setForm] = useState({
    name: 'Sample Athlete',
    age: '22',
    sport: 'Football',
    position: 'Forward',
    notes: 'No current injury',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Edit athlete:', id, form)
  }

  return (
    <div className="page">
      <h1>Edit Athlete</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" value={form.name} onChange={handleChange} />
        <input name="age" value={form.age} onChange={handleChange} />
        <input name="sport" value={form.sport} onChange={handleChange} />
        <input name="position" value={form.position} onChange={handleChange} />
        <textarea name="notes" value={form.notes} onChange={handleChange} />
        <button className="btn">Update Athlete</button>
      </form>
    </div>
  )
}