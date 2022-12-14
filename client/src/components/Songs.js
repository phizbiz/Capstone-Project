import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Songs = () => {
  const [songs, updateSongs] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="songPage">
      <h1>All Songs</h1>
      <header className="tagHeader">
        <Link to="/addsongs" className="tagLinky">
          <b>Add Song</b>
        </Link>
      </header>
      <section className="songDivAll">
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

export default Songs
