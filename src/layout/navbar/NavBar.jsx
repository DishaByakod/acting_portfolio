import React from "react";
import styles from "./NavBar.module.css";

const MobileNavBar = ({onClick}) => {
  return (
    <ul className={styles["nav-links-mobile"]}>
      <li>
        <a href="#about" onClick={onClick}>About Me</a>
      </li>
      <li>
        <a href="#gallery" onClick={onClick}>Gallery</a>
      </li>
      <li>
        <a href="#details" onClick={onClick}>Details</a>
      </li>
      <li>
        <a href="#intro-videos" onClick={onClick}>Introduction Videos</a>
      </li>
      <li>
        <a href="#audition-videos" onClick={onClick}>Audition Videos</a>
      </li>
      <li>
        <a href="#experience" onClick={onClick}>Experience</a>
      </li>
      <li>
        <a href="#contact" onClick={onClick}>Contact</a>
      </li>
    </ul>
  );
};

const DesktopNavBar = () => {
  return (
    <ul className={styles["nav-links-desktop"]}>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#gallery">Gallery</a>
      </li>
      <li>
        <a href="#details">Details</a>
      </li>
      <li>
        <a href="#intro-videos">Introduction Videos</a>
      </li>
      <li>
        <a href="#audition-videos">Audition Videos</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMenuOpen(false); // Close the menu when resizing to desktop
    }
  };

  React.useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["brand"]}>Disha Byakod</div>
      {isMobile && (
        <div className={styles["menu-toggle"]} onClick={toggleMenu}>
          ☰
        </div>
      )}
      {isMobile && menuOpen && <MobileNavBar onClick={toggleMenu}/>}
      {!isMobile && <DesktopNavBar />}
    </nav>
  );
};

export default NavBar;
