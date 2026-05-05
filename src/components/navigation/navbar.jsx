import { Link } from "react-router-dom";
import JoinButton from "../Other/joinbutton";
import "../../index.css";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/#hero" className="navbar__brand">
          <img src="/logo.png" alt="Logo" className="navbar__logo" />
        </Link>

        <div className="navbar__links">
          <a href="/#classes" className="navbar__link h4">
            CLASSES
          </a>
          <a href="/#workshops" className="navbar__link h4">
            WORKSHOPS
          </a>
          <a href="/#board" className="navbar__link h4">
            BOARD
          </a>
        </div>

        <JoinButton />
      </div>
    </nav>
  )
}

export default Navbar
