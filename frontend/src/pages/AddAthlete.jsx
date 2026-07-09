import { useState } from 'react'

export default function AddAthlete() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    sport: '',
    position: '',
    notes: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Add athlete:', form)
  }

  return (
    <div className="page">
      <h1>Add Athlete</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <input name="sport" placeholder="Sport" value={form.sport} onChange={handleChange} />
        <input name="position" placeholder="Position" value={form.position} onChange={handleChange} />
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        <button className="btn">Save Athlete</button>
      </form>
    </div>
  )
}