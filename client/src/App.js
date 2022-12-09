import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Composers from './components/Composers'
import Home from './components/Home'
import Songs from './components/Songs'

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <Link to="/">Home</Link>
          <spacer> </spacer>
          <Link to="/songs">Songs</Link>
          <spacer> </spacer>
          <Link to="/composers">Composers</Link>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="songs" element={<Songs />} />
          <Route path="composers" element={<Composers />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
