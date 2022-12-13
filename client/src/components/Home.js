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
        <div>
          Pair With Film
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="film-img-home"
          ></img>
        </div>
      </section>
    </div>
  )
}

export default Home
