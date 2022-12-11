import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/songs">Songs</Link>

        <Link to="/composers">Composers</Link>

        <Link to="/addsongs">Add Song</Link>

        <Link to="/tags">Tags</Link>

        {/* <Link to="/updatesongs">Update Song</Link> */}
        <Link to="/addtags">Add Tags</Link>

        <Link to="/updatetags">Update Tags</Link>

        <Link to="/deletetags">Delete Tags</Link>
      </div>
    </nav>
  )
}

export default Nav
