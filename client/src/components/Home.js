import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [tags, updateTags] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const api = async () => {
      let response = await axios.get('/tags')
      updateTags(response.data)
    }
    api()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/songs?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <div>
      <div className="hero">
        <h1>🎵 Royal Music Library</h1>
        <p>Discover music for every moment</p>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search songs or composers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
      <div className="page">
        <p className="section-label">Browse by Genre</p>
        <div className="tag-grid">
          {tags.map((tag) => (
            <Link to={`/${tag._id}`} className="tag-card" key={tag._id}>
              <img src={tag.image} className="tag-img" alt={tag.name} />
              <span className="tag-card-name">{tag.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
