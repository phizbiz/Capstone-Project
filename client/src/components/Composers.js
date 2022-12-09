import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'

const Composers = () => {
  const [composers, updateComposers] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/composers')
      updateComposers(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="Composers">
      <header>
        <h1>Composer List Text</h1>
      </header>
      <section>
        {composers.map((composer) => (
          <div key={composer._id}>
            <h2>{composer.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Composers
