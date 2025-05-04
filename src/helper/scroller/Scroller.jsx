import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Scroller.module.css"; 

const Scroller = ({ children, className }) => {
  const [leftHover, setLeftHover] = React.useState(false);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [isScrollable, setIsScrollable] = React.useState(false);
  const [rightHover, setRightHover] = React.useState(false);
  const scrollContainerRef = React.useRef(null);
  const imagesContainerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setIsAtStart(imagesContainerRef.current.scrollLeft === 0);
        setIsAtEnd(
          imagesContainerRef.current.scrollLeft + imagesContainerRef.current.clientWidth >
            imagesContainerRef.current.scrollWidth-1
        );
      }
    };

    const checkScrollable = () => {
      if (scrollContainerRef.current && imagesContainerRef.current) {
        setIsScrollable(
          imagesContainerRef.current.clientWidth == scrollContainerRef.current.clientWidth
        );
      }
    };

    const imagesContainer = imagesContainerRef.current;
    if (imagesContainer) {
      imagesContainer.addEventListener("scroll", handleScroll);
      checkScrollable();
    }

    // Cleanup when component unmounts
    return () => {
      if (imagesContainer) {
        imagesContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (imagesContainerRef.current) {
      imagesContainerRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (imagesContainerRef.current) {
      imagesContainerRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={scrollContainerRef} className={className} style={{ width: "100%"}}>
      <div ref={imagesContainerRef} className={styles["imgsContainer"]}>{children}</div>
      {/* Left Button */}
      {isScrollable && !isAtStart && (
        <FontAwesomeIcon
          onMouseEnter={() => setLeftHover(true)}
          onMouseLeave={() => setLeftHover(false)}
          onClick={scrollLeft}
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            opacity: leftHover ? "70%" : "40%",
            left: "10px",
            top: "50%",
            cursor: "pointer",
          }}
          icon={faCircleLeft}
        />
      )}

      {/* Right Button */}
      {isScrollable && !isAtEnd && (
        <FontAwesomeIcon
          onMouseEnter={() => setRightHover(true)}
          onMouseLeave={() => setRightHover(false)}
          onClick={scrollRight}
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            opacity: rightHover ? "70%" : "40%",
            right: "10px",
            top: "50%",
            cursor: "pointer",
          }}
          icon={faCircleRight}
        />
      )}
    </div>
  );
};

export default Scroller;