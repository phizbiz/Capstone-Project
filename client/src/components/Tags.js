import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tags = () => {
  const [tags, updateTags] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/tags')
      updateTags(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="tagPage">
      <header className="tagHeader">
        <h1>Tags</h1>
        <Link to="/addtags" className="tagLinky">
          Add Tags
        </Link>

        <Link to="/updatetags" className="tagLinky">
          Update Tags
        </Link>

        <Link to="/deletetags" className="tagLinky">
          Delete Tags
        </Link>
      </header>
      <section>
        {tags.map((tag) => (
          <div key={tag._id}>
            <img src={tag.image} className="tag-img"></img>
            <h2>{tag.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Tags
