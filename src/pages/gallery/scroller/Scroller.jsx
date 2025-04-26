import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Scroller = ({ children, className }) => {
  const [leftHover, setLeftHover] = React.useState(false);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [rightHover, setRightHover] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsAtStart(scrollRef.current.scrollLeft === 0);
        setIsAtEnd(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
            scrollRef.current.scrollWidth - 1
        );
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Cleanup when component unmounts
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={scrollRef} className={className}>
      {children}
      {/* Left Button */}
      {!isAtStart && (
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
      {!isAtEnd && (
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
