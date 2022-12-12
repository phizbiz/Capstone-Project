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
    <div className="allTags">
      <header>
        {/* <h1>Royal Music Library</h1> */}
        <img src="https://i.imgur.com/bWtzMn7.png" className="logo"></img>
      </header>
      <section>
        <h2>Browse by genre...</h2>
        <div className="divide">
          {tags.map((tag) => {
            return (
              <Link to={`tagID/${tag._id}`}>
                <div className="tagBox" key={tag._ID}>
                  <h2>{tag.name}</h2>
                  <img
                    src="https://i.imgur.com/pDYp0f2.jpg"
                    className="tag-img"
                  ></img>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
