import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav classname="navbar">
      <div>
        <Link to="/">Home</Link>
        <spacer> </spacer>
        <Link to="/songs">Songs</Link>
        <spacer> </spacer>
        <Link to="/composers">Composers</Link>
        <spacer> </spacer>
        <Link to="/tags">Tags</Link>
        <spacer> </spacer>
        <Link to="/updatesongs">Update Song</Link>
        <spacer> </spacer>
        <Link to="/addsongs">Add Song</Link>
        <spacer> </spacer>
      </div>
    </nav>
  )
}

export default Nav
