import { Link } from "react-router-dom"
import { duration, container, navItem } from "../styles"
import { Logo } from "./"
import { navLinks } from "../utils/constants"
import { useEffect, useState } from "react"

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${duration} ${scrollY > 100 ? "bg-black/40" : ""} w-screen py-5 px-3 fixed top-0 z-50`}>
      <div className={`${container} flex items-center justify-between`}>
        <Logo />
        <ul className="sm:flex gap-5 hidden">
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