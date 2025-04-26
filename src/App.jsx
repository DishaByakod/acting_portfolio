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
    <div>
      {showNavbar && <NavBar />}
      <Landing />
      <AboutMe />
      <main className="content">
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
