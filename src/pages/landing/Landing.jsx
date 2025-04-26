const Landing = () => {
  return (
    <div className="hero-section">
      <div className="collage">
        <div
          style={{ backgroundImage: "url('./assests/images/img1.jpg')" }}
        ></div>
        <div
          style={{ backgroundImage: "url('./assests/images/img2.jpg')" }}
        ></div>
        <div
          style={{
            backgroundImage: "url('./assests/images/img3.jpg')",
          }}
        ></div>
        <div
          style={{ backgroundImage: "url('./assests/images/img4.jpg')" }}
        ></div>
        <div
          style={{
            backgroundImage: "url('./assests/images/img5.jpg')",
          }}
        ></div>
        <div
          style={{ backgroundImage: "url('./assests/images/img6.jpg')" }}
        ></div>
      </div>
      <div className="overlay">
        <h1 className="hero-title">Disha Byakod</h1>
      </div>
    </div>
  );
};

export default Landing;
