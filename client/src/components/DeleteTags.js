import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'
import Tags from './Tags'

const DeleteTags = () => {
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

  const handleDelete = async (event, id) => {
    event.preventDefault()
    let deleteTag = await axios
      .delete(`http://localhost:3001/tags/${id}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateTags([...tags, deleteTag.data])
    setFormState({ name: '' })
  }

  return (
    <div className="DeleteTag" style={{ textAlign: 'center' }}>
      <h2>Delete A Tag</h2>
      <h4></h4>
      <div style={{ textAlign: 'center' }}>
        {tags.map((tag) => (
          <div key={tag._id}>
            <h3>{tag.name}</h3>
            <button
              onClick={(event) => {
                handleDelete(event, tag._id)
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  )
}

export default DeleteTags
