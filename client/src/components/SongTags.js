import { useEffect, useState } from 'react'
// import ReactPlayer from 'react-player'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Songs from './Songs'
import Tags from './Tags'
import ReactPlayer from 'react-player'

const SongTags = () => {
  const [songs, setSong] = useState([])
  const [tag, setTag] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  const viewSong = (tagdetails) => {
    navigate(`/tag/${tagdetails}`)
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
          <div key={song._id} className="songList">
            <h2>{song.name}</h2>
            <h3>{song.composer}</h3>
            <ReactPlayer
              url={song.url}
              className="soundcloudPlayer"
              // width="70%"
              height="9%"
              // scrolling="no"
              // frameborder="no"
              // visual="false"
            />
            <button
              onClick={() => {
                viewSong(song._id)
              }}
            >
              View Song Details
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default SongTags
