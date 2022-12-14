import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [tags, updateTags] = useState([])

  useEffect(() => {
    const api = async () => {
      let response = await axios.get('/tags')
      updateTags(response.data)
    }
    api()
  }, [])

  return (
    <div className="songPage">
      <header>
        <img src="https://i.imgur.com/HVwIyzh.png" className="logo"></img>
      </header>
      <section>
        <h2>Browse by genre...</h2>
        <div className="tagDivide">
          {tags.map((tag) => {
            return (
              <Link to={`/${tag._id}`} className="tagLinkyHome">
                <div key={tag._id}>
                  <img src={tag.image} className="tag-img"></img>
                  <h2 className="tagLink">{tag.name}</h2>
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
