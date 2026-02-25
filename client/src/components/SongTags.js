import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player'

const SongTags = () => {
  const [songs, setSong] = useState([])
  const [tag, setTag] = useState({})
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`/tag/${id}`)
      setSong(response.data)
    }
    apiCall()
  }, [id])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`/tags/${id}`)
      setTag(response.data)
    }
    apiCall()
  }, [id])

  return (
    <div>
      <div className="tag-detail-hero">
        <Link to="/" className="back-link">← Back to genres</Link>
        <h1>{tag.name}</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{songs.length} songs</p>
      </div>
      <div className="page">
        <div className="song-grid">
          {songs.map((song) => (
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
    </div>
  )
}

export default SongTags
