import { Link } from "react-router-dom"
import { duration, container, navItem } from "../styles"
import { Logo } from "./"

const Header = () => {
  return (
    <header className="w-screen py-5 px-3 backdrop-blur-xs sticky top-0 z-50">
      <div className={`${container} flex items-center justify-between`}>
        <Logo />
        <ul className="flex gap-5">
          <li>
            <Link to="/" className={`${duration} ${navItem}`}>Home</Link>
          </li>
          <li>
            <Link to="/movies" className={`${duration} ${navItem}`}>Movies</Link>
          </li>
          <li>
            <Link to="/tv" className={`${duration} ${navItem}`}>TV Series</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header