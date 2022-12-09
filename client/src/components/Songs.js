import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'

const Songs = () => {
  const [songs, updateSongs] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="Songs">
      <header>
        <h1>Songs List Text</h1>
      </header>
      <section>
        {songs.map((song) => (
          <div key={song._id}>
            <h2>{song.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Songs
