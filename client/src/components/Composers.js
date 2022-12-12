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
        <h1>Composers</h1>
      </header>
      <section>
        {composers.map((composer) => (
          <div key={composer._id}>
            <img src={composer.image} className="composerPhoto"></img>
            <h2>{composer.name}</h2>
            <h5>
              <i>ASCAP: {composer.pro}</i>
            </h5>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Composers
