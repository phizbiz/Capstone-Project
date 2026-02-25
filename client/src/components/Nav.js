import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={close}>
        🎵 Royal Music Library
      </NavLink>
      <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`navLinks${isOpen ? ' open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => `navLinky${isActive ? ' active' : ''}`} onClick={close}>
          Home
        </NavLink>
        <NavLink to="/songs" className={({ isActive }) => `navLinky${isActive ? ' active' : ''}`} onClick={close}>
          All Songs
        </NavLink>
        <NavLink to="/composers" className={({ isActive }) => `navLinky${isActive ? ' active' : ''}`} onClick={close}>
          Composers
        </NavLink>
        <NavLink to="/tags" className={({ isActive }) => `navLinky${isActive ? ' active' : ''}`} onClick={close}>
          Tags
        </NavLink>
        <NavLink to="/films" className={({ isActive }) => `navLinky${isActive ? ' active' : ''}`} onClick={close}>
          Pair With Film
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
