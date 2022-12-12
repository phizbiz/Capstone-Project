import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="/songs" className="linky">
          Songs
        </Link>
        <Link to="/composers" className="linky">
          Composers
        </Link>
        <Link to="/tags" className="linky">
          Tags
        </Link>
      </div>
    </nav>
  )
}

export default Nav
