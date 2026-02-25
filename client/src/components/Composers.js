import { useState, useEffect } from 'react'
import axios from 'axios'

const Composers = () => {
  const [composers, updateComposers] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/composers')
      updateComposers(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title-group">
          <h1>Composers</h1>
          <span className="count-badge">{composers.length} composers</span>
        </div>
      </div>
      <div className="composer-grid">
        {composers.map((composer) => (
          <div key={composer._id} className="composer-card">
            {composer.image ? (
              <img src={composer.image} className="composer-photo" alt={composer.name} />
            ) : (
              <div className="composer-photo-placeholder">🎼</div>
            )}
            <h3>{composer.name}</h3>
            {composer.pro && <span className="pro-badge">{composer.pro}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Composers
