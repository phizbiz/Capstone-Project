import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Songs from './Songs'

const UpdateSongsPage = () => {
  const [songs, updateSongs] = useState([])
  const [tags, updateTags] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    url: '',
    composer: '',
    tag: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [songs])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleUpdate = async (event, id) => {
    event.preventDefault()
    let updateSong = await axios
      .put(`http://localhost:3001/songs/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateSongs([...songs, updateSong.data])
    setFormState({ name: '', url: '', composer: '', tag: '' })
  }

  return (
    <div className="updateSongs">
      <section>
        <h1>Update Songs Text</h1>
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Name:</label>
          <input id="name" value={formState.name} onChange={handleChange} />
          <label htmlFor="url">URL:</label>
          <input id="url" value={formState.url} onChange={handleChange} />
          <label htmlFor="composer">Composer:</label>
          <input
            id="composer"
            value={formState.composer}
            onChange={handleChange}
          />
          <label htmlFor="tag">Tag:</label>
          <input id="tag" value={formState.tag} onChange={handleChange} />
        </form>
        <div>
          {songs.map((song) => (
            <div key={song._id}>
              <h3>Song: {song.name}</h3>
              <h4>
                Url: {song.url}, Composers: {song.composer}, Tags: {song.tag}
              </h4>
              <div>
                <button
                  onClick={(event) => {
                    handleUpdate(event, song._id)
                  }}
                  type="submit"
                >
                  Update Song
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default UpdateSongsPage
