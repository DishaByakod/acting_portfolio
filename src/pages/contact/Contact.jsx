import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from "./Contact.module.css";

const Contact = () => {

  return (
    <section id="contact" className={styles["container"]}>
      <h2 className="section-title">Contact Details</h2>
      <div style={{fontSize: "2rem", textAlign: "center", gap: "1rem", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}>
        <a href="https://www.instagram.com/direction_grl/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="mailto:dishabyakod1999@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </section>
  );
};

export default Contact;
