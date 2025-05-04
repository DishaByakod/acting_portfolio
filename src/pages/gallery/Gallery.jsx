import React from "react";
import Scroller from "../../helper/scroller/Scroller";
import styles from "./Gallery.module.css";
const normalImages = (
  <>
    <img src="./assests/images/img67.jpg" alt="Gallery 1" />
    <img src="./assests/images/img66.jpg" alt="Gallery 2" />
    <img src="./assests/images/img65.jpg" alt="Gallery 3" />
    <img src="./assests/images/img64.JPG" alt="Gallery 4" />
    <img src="./assests/images/img63.jpeg" alt="Gallery 5" />
    <img src="./assests/images/img62.jpg" alt="Gallery 6" />
    <img src="./assests/images/img61.jpg" alt="Gallery 6" />
    <img src="./assests/images/img59.jpg" alt="Gallery 6" />
    <img src="./assests/images/img58.jpg" alt="Gallery 6" />
    <img src="./assests/images/img57.jpg" alt="Gallery 6" />
    <img src="./assests/images/img55.jpg" alt="Gallery 6" />
    <img src="./assests/images/img54.jpg" alt="Gallery 6" />
    <img src="./assests/images/img53.jpg" alt="Gallery 6" />
    <img src="./assests/images/img52.jpg" alt="Gallery 6" />
    <img src="./assests/images/img48.jpg" alt="Gallery 6" />
    <img src="./assests/images/img47.jpg" alt="Gallery 6" />
    <img src="./assests/images/img24.JPG" alt="Gallery 6" />
    <img src="./assests/images/img25.jpg" alt="Gallery 6" />
    <img src="./assests/images/img26.jpg" alt="Gallery 6" />
    <img src="./assests/images/img27.jpg" alt="Gallery 6" />
    <img src="./assests/images/img28.jpg" alt="Gallery 6" />
    <img src="./assests/images/img29.jpg" alt="Gallery 6" />
    <img src="./assests/images/img30.jpg" alt="Gallery 6" />
  </>
);

const polaroidImages = (
  <>
    <img src="./assests/images/img31.JPG" alt="Gallery 6" />
    <img src="./assests/images/img32.JPG" alt="Gallery 6" />
    <img src="./assests/images/img33.JPG" alt="Gallery 6" />
    <img src="./assests/images/img34.JPG" alt="Gallery 6" />
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
