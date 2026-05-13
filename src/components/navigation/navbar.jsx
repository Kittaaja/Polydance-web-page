import { useState } from "react";
import {HashLink } from "react-router-hash-link";
import JoinButton from "../Other/joinbutton";
import "../../index.css";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

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
        <button
          className={`navbar__burger${open ? " navbar__burger--open" : ""}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar__drawer${open ? " navbar__drawer--open" : ""}`}>
        <HashLink to="/#classes" className="navbar__drawer-link h4" onClick={() => setOpen(false)}>
          CLASSES
        </HashLink>
        <HashLink to="/#teachers" className="navbar__drawer-link h4" onClick={() => setOpen(false)}>
          TEACHERS
        </HashLink>
        <HashLink to="/#workshops" className="navbar__drawer-link h4" onClick={() => setOpen(false)}>
          WORKSHOPS
        </HashLink>
        <HashLink to="/#board" className="navbar__drawer-link h4" onClick={() => setOpen(false)}>
          BOARD
        </HashLink>
        <div className="navbar__drawer-join">
          <JoinButton text="JOIN NOW"  id="/classes#pricing" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
