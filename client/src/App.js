import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Songs from './components/Songs'

function App() {
  return (
    <div className="App">
      <header>
        <h3>header text</h3>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/songs">Songs</Link>
        </ul>
      </header>
      <main>
        <img src="images/Royal-Music-Library.png" alt="logo" />
        <h2>Royal Music Library</h2>
        <h6>this text in the App dot js</h6>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="songs" element={<Songs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
