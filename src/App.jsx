import { useEffect, useState } from "react";
import "./index.css"; // Adjusted path based on error message
import Landing from "./pages/landing/Landing";
import AboutMe from "./pages/aboutme/AboutMe";
import Gallery from "./pages/gallery/Gallery";
import Details from "./pages/details/Details";
import Introduction from "./pages/introduction/Introduction";
import Audition from "./pages/audition/Audition";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import NavBar from "./layout/navbar/NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";

export default function ScrollNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div position="relative">
      {showNavbar && <NavBar />}
      <main className="content" style={{ position: "relative" }}>
        {/* Background */}
        <img
          style={{ position: "absolute", left: 0, top: 0, height: "100%" }}
          src={BG_IMAGE}
          alt="Gallery"
        />
        <Landing />
        <AboutMe />
        <Gallery />
        <Details />
        <Introduction />
        <Audition />
        <Experience />
        <Contact />
      </main>
      <div
        style={{
          position: "fixed",
          right: 25,
          bottom: 25,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          fontSize: "2rem",
        }}
      >
        <div style={{ padding: "1rem", backgroundColor: "black", borderRadius: "50%", opacity: 0.6, }}>
          <a href="https://www.instagram.com/direction_grl/" target="_blank" style={{width: "100%", height: "100%", display: "flex"}}>
            <FontAwesomeIcon icon={faInstagram} width="2rem" height="2rem"/>
          </a>
        </div>
        <div  style={{ padding: "1rem", backgroundColor: "black", borderRadius: "50%", opacity: 0.6, }}>
          <a href="mailto:dishabyakod1999@gmail.com" style={{width: "100%", height: "100%", display: "flex"}}>
            <FontAwesomeIcon icon={faEnvelope} width="2rem" height="2rem"/>
          </a>
        </div>
      </div>
    </div>
  );
}
