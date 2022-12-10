import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Composers from './components/Composers'
import Home from './components/Home'
import Songs from './components/Songs'
import Tags from './components/Tags'
import UpdateSongs from './components/UpdateSongs'
import Nav from './components/Nav'
import AddSongs from './components/AddSongs'
import AddTags from './components/AddTags'
import UpdateTagsPage from './components/UpdateTags'
import DeleteTags from './components/DeleteTags'

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
          <Route path="addsongs" element={<AddSongs />} />
          <Route path="addtags" element={<AddTags />} />
          <Route path="updatetags" element={<UpdateTagsPage />} />
          <Route path="deletetags" element={<DeleteTags />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
