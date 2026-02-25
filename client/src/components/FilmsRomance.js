import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const FilmsRomance = () => {
  const [songs, updateSongs] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="page">
      <div className="film-detail-header">
        <Link to="/films" className="back-link">← Back to films</Link>
        <h1>Romance: <em>Eternal Sunshine of the Spotless Mind</em></h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.25rem' }}>
          Pair music from our library with this iconic romantic scene
        </p>
      </div>
      <div className="film-detail-layout">
        <div className="film-video-col">
          <div className="film-video-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=3lvNGhBXTU0"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
        <div className="film-songs-col">
          <p className="film-songs-label">Library — {songs.length} songs</p>
          {songs.map((song) => (
            <div key={song._id} className="film-song-card">
              <h3>{song.name}</h3>
              {song.composer && <p className="composer">{song.composer}</p>}
              <ReactPlayer url={song.url} width="100%" height="60px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilmsRomance
