import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>
        <h3>header text</h3>
      </header>
      <main>
        <img src="images/Royal-Music-Library.png" alt="logo" />
        <h2>Royal Music Library</h2>
        <h6>this text in the App dot js</h6>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
