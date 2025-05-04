const Landing = () => {
  return (
    <div className="hero-section">
      <div className="collage">
        <div
          style={{ backgroundImage: "url('./assests/images/img1.JPG')" }}
        ></div>
        <div
          style={{ backgroundImage: "url('./assests/images/img2.JPG')" }}
        ></div>
        <div
          style={{
            backgroundImage: "url('./assests/images/img3.JPG')",
          }}
        ></div>
        <div
          style={{ backgroundImage: "url('./assests/images/img4.JPG')" }}
        ></div>
        <div
          style={{
            backgroundImage: "url('./assests/images/img5.JPG')",
          }}
        ></div>
        <div
          style={{ backgroundImage: "url('./assests/images/img6.JPG')" }}
        ></div>
      </div>
      <div className="overlay">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 className="hero-title">Disha Byakod</h1>
          <p style={{letterSpacing: "0.4rem"}}>Actor | Model</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
