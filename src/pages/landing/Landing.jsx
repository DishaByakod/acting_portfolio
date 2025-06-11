const Landing = () => {
  return (
    <div className="hero-section">
      <div className="collage">
        <div
          style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/img1.JPG')` }}
        ></div>
        <div
          style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/img2.JPG')` }}
        ></div>
        <div
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/img3.JPG')`,
          }}
        ></div>
        <div
          style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/img4.JPG')` }}
        ></div>
        <div
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/img5.JPG')`,
          }}
        ></div>
        <div
          style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/img6.JPG')` }}
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
