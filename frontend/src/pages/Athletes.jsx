import { Link } from 'react-router-dom'

const athletes = [
  { id: 1, name: 'Rahul', sport: 'Football', injury: 'Hamstring strain' },
  { id: 2, name: 'Asha', sport: 'Athletics', injury: 'Knee pain' },
]

export default function Athletes() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>Athletes</h1>
        <Link className="btn" to="/athletes/add">Add Athlete</Link>
      </div>

      <div className="card-list">
        {athletes.map((athlete) => (
          <div key={athlete.id} className="card">
            <h3>{athlete.name}</h3>
            <p>Sport: {athlete.sport}</p>
            <p>Injury: {athlete.injury}</p>
            <Link to={`/athletes/${athlete.id}`}>View details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}