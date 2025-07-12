import styles from "./About.module.css";
const AboutMe = () => {
  return (
    <section id="about" className="overlay">
      {/* Left side content - can be your text */}
      <div style={{ flex: 1 }} className="responsive-container">
        <div className="text-overlay">
          <h2 className="section-title">About Me</h2>
          <p className={styles["about-paragraph"]}>
            I was 8 when I realized I wanted to become an actor<br></br> I was
            11 when I expressed it, and everyone laughed about it and made it a
            joke
            <br></br>I was 14 when I was even hesitant to talk about it{" "}
            <br></br>I was 17 when dad said become an engineer, 4 years down the
            lane I did become one, I worked for 3 years as a software developer
            too <br></br>I was 23 when I realized I will regret for the rest of
            my life if I don't try to become an actor,<br></br> If I don't face
            that camera atleast once and experience how it feels... <br></br>
            Everyone told me it's very difficult to get recognized in a field
            like this without connections, without support, without compromise,
            without money, without being skinny. You can never become famous...{" "}
            <br></br>
            but<br></br> "Kaun kambakht kehta hai ki hum abhinay sirf mashhoor
            hone ke liye karte hain? Hum toh abhinay karte hain taaki hum kisi
            aur ke gham ko, khushi ko, dard ko, gusse ko, mohabbat ko mehsoos
            kar paayen. Ek pal ke liya hi sahi hum Kisi aur ki zindagi ko jee
            paayen. Kaun kehta hai ki hum zindagi ko sirf ek baar jee sakte
            hain? Ek abhineta marne se pehle kai saari zindagiyan jeeta hai."
            <br></br>
            <br></br>
            Translation- Who says that I want to become an actor only because I
            want to be famous? I want to become an actor because I want to feel
            one's sadness, happiness, pain, anger, love. So that I can live
            someone else's life atleast for a moment. Who says that you can live
            life only once? An actor lives far too many lives before he dies.
          </p>
        </div>
      </div>

      {/* Right side image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000", // optional to match dark theme
        }}
        className="image-container"
      >
        <img
          className={styles["about-image"]}
          alt="About Me"
          src={`${process.env.PUBLIC_URL}/assets/images/img7_1.JPG`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
