import { Link } from "react-router-dom"
import { duration, container, navItem } from "../styles"
import { Logo } from "./"
import { navLinks } from "../utils/constants"

const Header = () => {
  return (
    <header className="w-screen py-5 px-3 backdrop-blur-xs sticky top-0 z-50">
      <div className={`${container} flex items-center justify-between`}>
        <Logo />
        <ul className="flex gap-5">
          {navLinks.map(navLink => (
            <li key={navLink.title}>
              <Link to={navLink.path} className={`${duration} ${navItem}`}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header