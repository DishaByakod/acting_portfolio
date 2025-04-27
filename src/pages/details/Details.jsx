import React from "react";
import styles from "./Details.module.css";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";
const PROFILE_IMG = "/assests/images/img68.png";

const Detail = ({ label, value }) => {
  return (
    <li className={styles["detail"]}>
      <p>{label}: {value}</p>
    </li>
  )
};

const Language = ({ label, expertise }) => {
  return (
    <li className={styles["language"]}>
      <p className={styles["language-text"]}>{label}:</p>
      <div className={styles["max"]}>
        <div className={styles[expertise]}></div>
      </div>
    </li>
  )
}

const Details = () => {
  return (
    <section
      id="details"
      className={styles["container"]}
    >
      {/* Title */}
      <div className={styles["title"]}>
        <h2 className="section-title">Details</h2>
      </div>

      {/* Contents */}
      <div className={styles["contents"]}>

        {/* Profile */}
        <div className={styles["profile"]}>
          <img src={PROFILE_IMG} className={styles["profile"]} alt="Profile" />
        </div>

        {/* Details & Language */}
        <div className={styles["details-container"]}>

          {/* Details */}
          <ul className={styles["details"]}>
            <Detail label="Height" value="5'8" />
            <Detail label="Weight" value="70 kg" />
            <Detail label="Shoe Size" value="8" />
            <Detail label="Bust Size" value="34cm" />
            <Detail label="Waist Size" value="32cm" />
            <Detail label="Hips Size" value="45cm" />
          </ul>

          {/* Languages */}
          <div className={styles["languages-container"]}>
            <p>Languages:</p>
            <ul className={styles["languages"]}>
              <Language label="English" expertise="fluent" />
              <Language label="Hindi" expertise="fluent" />
              <Language label="Kannada" expertise="fluent" />
              <Language label="Tamil" expertise="intermediate" />
              <Language label="Telugu" expertise="beginner" />
              <Language label="Malayali" expertise="beginner" />
            </ul>

          </div>

        </div>

      </div>

      {/* Background */}
      <img className={styles["background"]} src={BG_IMAGE} alt="Gallery" />

    </section>
  );
};

export default Details;
