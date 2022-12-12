import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Songs from './Songs'
import Tags from './Tags'

const SongTags = () => {
  const [songs, setSong] = useState([])
  const [tag, setTag] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  const viewSong = (TagDetails) => {
    navigate(`/song/${TagDetails}`)
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/tag/${id}`)
      setSong(response.data)
    }
    apiCall()
  }, [id])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/tags/${id}`)
      setTag(response.data)
    }
    apiCall()
  }, [id])

  console.log(SongTags)

  return (
    <div>
      <nav>
        <h2 className="tag-title">{tag.name}</h2>
      </nav>
      <section className="container-grid">
        {songs.map((song) => (
          <div
            key={song._id}
            className="box"
            onClick={() => {
              viewSong(song._id)
            }}
          >
            <h2>{song.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default SongTags
