import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const FilmsDance = () => {
  const [songs, updateSongs] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])
  return (
    <div className="FilmPage">
      <h1>Dance</h1>
      <div className="filmPlayer">
        <ReactPlayer url="https://www.youtube.com/watch?v=6Ron-Ikenfc" />
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

export default FilmsDance
