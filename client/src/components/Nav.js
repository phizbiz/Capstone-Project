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

        <Link to="/addsongs" className="linky">
          Add Song
        </Link>

        <Link to="/tags" className="linky">
          Tags
        </Link>

        {/* <Link to="/updatesongs">Update Song</Link> */}
        <Link to="/addtags" className="linky">
          Add Tags
        </Link>

        <Link to="/updatetags" className="linky">
          Update Tags
        </Link>

        <Link to="/deletetags" className="linky">
          Delete Tags
        </Link>
      </div>
    </nav>
  )
}

export default Nav
