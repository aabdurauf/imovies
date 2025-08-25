import { container, duration, navItem } from "../styles"
import { footerLinks } from "../utils/constants"

const Footer = () => {
  return (
    <footer className="py-5 px-3">
      <div className={container}>
        <ul className="w-fit mx-auto">
          {footerLinks.map(link => (
            <li>
              <a className={`${duration} ${navItem}`} href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 mt-5">
          2025 by <a className="text-red" href="https://github.com/aabdurauf" target="_blank">Abdurauf Ashurov</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer