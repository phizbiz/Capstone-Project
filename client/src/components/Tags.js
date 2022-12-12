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
    <div className="Tags">
      <header>
        <h1>Tags</h1>
        <Link to="/addtags" className="linky">
          Add Tags
        </Link>

        <Link to="/updatetags" className="linky">
          Update Tags
        </Link>

        <Link to="/deletetags" className="linky">
          Delete Tags
        </Link>
      </header>
      <section>
        {tags.map((tag) => (
          <div key={tag._id}>
            <h2>{tag.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Tags
