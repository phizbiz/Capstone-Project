import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navLinks">
        <Link to="/" className="navLinky">
          Home
        </Link>
        <Link to="/songs" className="navLinky">
          All Songs
        </Link>
        <Link to="/composers" className="navLinky">
          Composers
        </Link>
        <Link to="/tags" className="navLinky">
          Tags
        </Link>
        <Link to="/films" className="navLinky">
          Pair With Film
        </Link>
      </div>
    </nav>
  )
}

export default Nav
