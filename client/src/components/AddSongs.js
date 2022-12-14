import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Songs from './Songs'
import Tags from './Tags'

const AddSongs = () => {
  const [songs, updateSongs] = useState([])
  const [tags, updateTags] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    url: '',
    composer: '',
    tag: '1'
  })
  console.log(songs)
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/tags')
      updateTags(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newSong = await axios
      .post('/songs', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateSongs([...songs, newSong.data])
    setFormState({ name: '', url: '', composer: '' })
  }

  return (
    <div className="updateSongs">
      <section>
        <h1>Add Songs...</h1>
        <form onSubmit={handleSubmit}>
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
          <select id="tag" onChange={handleChange}>
            <option value="1" placeholder="select">
              Select
            </option>
            {tags.map((songTag) => (
              <option value={songTag._id} key={songTag._id}>
                {songTag.name}
              </option>
            ))}
          </select>
          <button type="submit" className="add-btn">
            Add Song
          </button>
        </form>

        <div>
          {songs.map((song) => (
            <div key={song._id}>
              <h3>Song: {song.name}</h3>
              <h4>Composer: {song.composer}</h4>
              <div></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default AddSongs
