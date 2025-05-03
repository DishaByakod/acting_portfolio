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
    <div >
      {showNavbar && <NavBar />}
      <Landing />
      <main className="content" style={{position: "relative"}}>
        {/* Background */}
        <img style={{position: "absolute", left: 0, top: 0, height: "100%"}} src={BG_IMAGE} alt="Gallery" />
        <AboutMe />
        <Gallery />
        <Details />
        <Introduction />
        <Audition />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
