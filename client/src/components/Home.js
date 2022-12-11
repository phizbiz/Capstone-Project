import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [tags, updateTags] = useState([])

  useEffect(() => {
    const api = async () => {
      let response = await axios.get('http://localhost:3001/tags')
      updateTags(response.data)
    }
    api()
  }, [])

  return (
    <div classname="allTags">
      <header>
        <h1>Royal Music Library</h1>
      </header>
      <section>
        <div className="divide">
          {tags.map((tag) => {
            return (
              <Link to={`tagID/${tag._id}`}>
                <div className="tag" key={tag._ID}>
                  <h2>{tag.name}</h2>
                </div>
              </Link>
            )
          })}
        </div>
        <h2>Royal Music Library</h2>
        <h1>This is homepage text</h1>
      </section>
    </div>
  )
}

export default Home
