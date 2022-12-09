import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Composers from './components/Composers'
import Home from './components/Home'
import Songs from './components/Songs'
import Tags from './components/Tag'

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <Link to="/"> Home </Link>
          <spacer> </spacer>
          <Link to="/songs"> Songs </Link>
          <spacer> </spacer>
          <Link to="/composers"> Composers </Link>
          <spacer> </spacer>
          <Link to="/tags"> Tags </Link>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="songs" element={<Songs />} />
          <Route path="composers" element={<Composers />} />
          <Route path="tags" element={<Tags />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
