import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
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

  console.log(SongTags)

  return (
    <div>
      <nav>
        <h2 className="tag-title">{tag.name}</h2>
      </nav>
      <section className="container-grid">
        <ul className="songList">
          <li>
            {songs.map((song) => (
              <div key={song._id} className="songBoxAll">
                <h2>{song.name}</h2>

                <h4>Composer: {song.composer}</h4>
                <div className="mediaPlayerBox">
                  <ReactPlayer
                    url={song.url}
                    className="soundcloudPlayer"
                    width="100%"
                    height="50%"
                  />
                </div>
              </div>
            ))}
          </li>
        </ul>
      </section>
    </div>
  )
}

export default SongTags
