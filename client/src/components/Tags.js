import { useState, useEffect } from 'react'
import axios from 'axios'
import link from 'react-router-dom'

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
        <h1>Tags List Text</h1>
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
