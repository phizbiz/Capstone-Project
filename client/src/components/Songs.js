import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Songs = () => {
  const [songs, updateSongs] = useState([])
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])

  const filtered = songs.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.composer && s.composer.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title-group">
          <h1>All Songs</h1>
          <span className="count-badge">{filtered.length} songs</span>
        </div>
        <div className="page-actions">
          <input
            type="text"
            placeholder="Search songs or composers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="songs-search"
          />
          <Link to="/addsongs" className="btn btn-primary">+ Add Song</Link>
        </div>
      </div>
      <div className="song-grid">
        {filtered.map((song) => (
          <div key={song._id} className="song-card">
            <h3>{song.name}</h3>
            {song.composer && <p className="composer">{song.composer}</p>}
            <div className="song-player">
              <ReactPlayer url={song.url} width="100%" height="80px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Songs
