import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const FilmsRomance = () => {
  const [songs, updateSongs] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])
  return (
    <div className="FilmPage">
      <h1>Romance</h1>
      <div className="filmPlayer">
        <ReactPlayer url="https://www.youtube.com/watch?v=3lvNGhBXTU0" />
      </div>

      <section className="songDiv">
        {songs.map((song) => (
          <div key={song._id} className="songBox">
            <h2>{song.name}</h2>
            <div className="mediaPlayerBox">
              <ReactPlayer
                url={song.url}
                className="soundcloudPlayerFilm"
                width="60%"
                height="20%"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default FilmsRomance
