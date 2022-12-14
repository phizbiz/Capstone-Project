import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Tags from './Tags'

const AddTags = () => {
  const [tags, updateTags] = useState([])
  const [formState, setFormState] = useState({
    name: ''
  })

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
    let newTag = await axios
      .post('/tags', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateTags([...tags, newTag.data])
    setFormState({ name: '' })
  }

  return (
    <div className="updateTags">
      <section>
        <h1>Add Tag...</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" value={formState.name} onChange={handleChange} />
          <button type="submit" className="add-tag-btn">
            Add Tag
          </button>
        </form>
        <div>
          {tags.map((tag) => (
            <div key={tag._id}>
              <h3>Tag: {tag.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default AddTags
