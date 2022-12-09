import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Composers from './components/Composers'
import Home from './components/Home'
import Songs from './components/Songs'
import Tags from './components/Tag'
import UpdateSongs from './components/updateSongs'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="songs" element={<Songs />} />
          <Route path="composers" element={<Composers />} />
          <Route path="tags" element={<Tags />} />
          <Route path="updatesongs" element={<UpdateSongs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
