import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Songs from './Songs'

const AddSongs = () => {
  const [songs, updateSongs] = useState([])
  const [tags, updateTags] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    url: '',
    composer: '',
    tag: '1'
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/songs')
      updateSongs(response.data)
    }
    apiCall()
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/tags')
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
      .post('http://localhost:3001/songs', formState)
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
          <button type="submit">Add Song</button>
        </form>

        <h1>Add Songs Text</h1>
        <div>
          {songs.map((song) => (
            <div key={song._id}>
              <h3>Song: {song.name}</h3>
              <h4>
                Composer: {song.composer} | Tags: {song.tag}
              </h4>
              <div></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default AddSongs
