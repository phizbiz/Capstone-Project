import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Tags from './Tags'

const UpdateTagsPage = () => {
  const [tags, updateTags] = useState([])
  const [formState, setFormState] = useState({
    name: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/tags')
      updateTags(response.data)
    }
    apiCall()
  }, [tags])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleUpdate = async (event, id) => {
    event.preventDefault()
    let updateTag = await axios
      .put(`http://localhost:3001/tags/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateTags([...tags, updateTag.data])
    setFormState({ name: '' })
  }

  return (
    <div className="updateSongs" style={{ textAlign: 'center' }}>
      <section>
        <h1>Update Tags</h1>
        <form onSubmit={handleUpdate}>
          <h3>Update Tag Name:</h3>
          <label htmlFor="name"></label>
          <input id="name" value={formState.name} onChange={handleChange} />
        </form>
        <div>
          {tags.map((tag) => (
            <div key={tag._id}>
              <h3>Tag: {tag.name}</h3>
              <div>
                <button
                  onClick={(event) => {
                    handleUpdate(event, tag._id)
                  }}
                  type="submit"
                >
                  Update Tag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default UpdateTagsPage
