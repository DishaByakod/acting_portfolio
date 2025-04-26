// import AboutMePhoto from "../../../public/assests/images/img7.JPG";

const AboutMe = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "4px solid rgba(0, 0, 0, 0.1)",
      }}
      className="overlay"
    >
      {/* <div className="about-image"></div> */}
      <div
        style={{ width: "100%", height: "100vh", position: "absolute", top: 0 }}
      >
        <img
          src="/assests/images/img7_1.JPG"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="about-section-text"
        style={{
          color: "white",
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "2rem",
          opacity: "0.8",
        }}
      >
        <h2 className="section-heading">About Me</h2>
        <p className="about-paragraph">
          I am Disha Byakod and here is my story of why I want to become an
          actor - I was 8 years old when I watched
          <em> Jab We Met </em> for the first time and fell in love with the
          character Geet. I was so influenced by her that I came back home from
          the movie theater and learnt every dialog of that movie and enacted it
          in front of my sister and friends, and they loved it. So that was like
          a trigger point. Over a period of time it was not just Geet, there
          were so many other characters which inspired me. Eventually, when I
          was put in front of the camera, I realized that I just loved imagining
          the character's life, inculcating their behavior into me,
          understanding their feelings and bringing it on screen.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
