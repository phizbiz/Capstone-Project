import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tags = () => {
  const [tags, updateTags] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('/tags')
      updateTags(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title-group">
          <h1>Tags</h1>
          <span className="count-badge">{tags.length} tags</span>
        </div>
        <div className="page-actions">
          <Link to="/addtags" className="btn btn-primary">+ Add Tag</Link>
          <Link to="/updatetags" className="btn btn-outline">Update</Link>
          <Link to="/deletetags" className="btn btn-danger">Delete</Link>
        </div>
      </div>
      <div className="tags-grid">
        {tags.map((tag) => (
          <div key={tag._id} className="tag-manage-card">
            <img src={tag.image} alt={tag.name} />
            <h3>{tag.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tags
