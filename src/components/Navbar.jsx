import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Meu blog com Axios</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">Novo post</Link>
            </li>
        </ul>        
    </nav>
  )
}

export default Navbar