import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <div className="songPage">
      <h1>All Songs</h1>
      <header className="tagHeader">
        <Link to="/addsongs" className="tagLinky">
          Add Song
        </Link>
        {/* <Link to="/updatesongs" className="tagLinky">
          Update Song
        </Link> */}
      </header>
      <section className="songDivAll">
        {songs.map((song) => (
          <div key={song._id} className="songBoxAll">
            <h2>{song.name}</h2>

            <h4>Composer: {song.composer}</h4>
            <a href={song.url} className="link-btn">
              Link
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Songs
