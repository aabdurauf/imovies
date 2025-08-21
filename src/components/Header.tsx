import { Link } from "react-router-dom"
import { navItem } from "../styles"
import { Logo } from "./"

const Header = () => {
  return (
    <header className="py-5 px-3 backdrop-blur-xs">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="flex gap-5">
          <li>
            <Link to="/" className={navItem}>Home</Link>
          </li>
          <li>
            <Link to="/movies" className={navItem}>Movies</Link>
          </li>
          <li>
            <Link to="/tv" className={navItem}>TV Series</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header