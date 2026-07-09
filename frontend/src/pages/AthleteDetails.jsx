import { useParams, Link } from 'react-router-dom'

export default function AthleteDetails() {
  const { id } = useParams()

  return (
    <div className="page">
      <h1>Athlete Details</h1>
      <p>Athlete ID: {id}</p>
      <p>This page will later show profile, injury history, training profile, and assessments.</p>
      <Link to={`/athletes/${id}/edit`} className="btn">Edit Athlete</Link>
    </div>
  )
}