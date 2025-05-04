import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["brand"]}>Disha Byakod</div>
      <div className={styles["menu-toggle"]} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles["nav-links"]} ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#details" onClick={() => setMenuOpen(false)}>
            Details
          </a>
        </li>
        <li>
          <a href="#intro-videos" onClick={() => setMenuOpen(false)}>
            Introduction Videos
          </a>
        </li>
        <li>
          <a href="#audition-videos" onClick={() => setMenuOpen(false)}>
            Audition Videos
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
