import React from "react";
import Scroller from "../../helper/scroller/Scroller";
import styles from "./Gallery.module.css";
const normalImages = (
  <>
    <img src={`${process.env.PUBLIC_URL}/assets/images/img67.jpg`} alt="Gallery 1" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img66.jpg`} alt="Gallery 2" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img65.jpg`} alt="Gallery 3" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img64.JPG`} alt="Gallery 4" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img63.jpeg`} alt="Gallery 5" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img62.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img61.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img59.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img58.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img57.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img55.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img54.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img53.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img52.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img48.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img47.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img24.JPG`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img25.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img26.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img27.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img28.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img29.jpg`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img30.jpg`} alt="Gallery 6" />
  </>
);

const polaroidImages = (
  <>
    <img src={`${process.env.PUBLIC_URL}/assets/images/img31.JPG`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img32.JPG`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img33.JPG`} alt="Gallery 6" />
    <img src={`${process.env.PUBLIC_URL}/assets/images/img34.JPG`} alt="Gallery 6" />
  </>
);

const Album = ({ title, images }) => {
  return (
    <div id={title} className={styles["album"]}>
      {/* Header */}
      <div className={styles["album-title"]}>
        <h2 className="section-sub-title">{title}</h2>
      </div>

      {/* Images */}
      <Scroller className={styles["images"]}>{images}</Scroller>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className={styles["container"]}>
      {/* Title */}
      <div className={styles["title"]}>
        <h2 className="section-title">Gallery</h2>
      </div>

      {/* Contents */}
      <div className={styles["contents"]}>
        <Album title="Images" images={normalImages} />
        <Album title="Polaroids" images={polaroidImages} />
      </div>
    </section>
  );
};

export default Gallery;
