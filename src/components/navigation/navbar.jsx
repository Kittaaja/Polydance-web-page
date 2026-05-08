import {HashLink } from "react-router-hash-link";
import JoinButton from "../Other/joinbutton";
import "../../index.css";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <HashLink to="/#hero" className="navbar__brand">
          <img src="/logo.png" alt="Logo" className="navbar__logo" />
        </HashLink>

        <div className="navbar__links">
          <HashLink to="/#classes" className="navbar__link h4">
            CLASSES
          </HashLink>
          <HashLink to="/#teachers" className="navbar__link h4">
            TEACHERS
          </HashLink>
          <HashLink to="/#workshops" className="navbar__link h4">
            WORKSHOPS
          </HashLink>
          <HashLink to="/#board" className="navbar__link h4">
            BOARD
          </HashLink>
        </div>

        <JoinButton text="JOIN NOW" id="/classes#pricing" />
      </div>
    </nav>
  )
}

export default Navbar
