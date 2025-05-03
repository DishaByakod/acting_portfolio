import React from "react";
import styles from "./Audition.module.css";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";

const Audition = () => {
  const [fullscreenVideo, setFullscreenVideo] = React.useState(null);

  const openFullscreen = (src) => {
    setFullscreenVideo(src);
  };

  return (
    <section id="audition-videos" className={styles["container"]}>
      <h2 className="section-title">Audition Videos</h2>
      <div className="video-scroll">
        {["video1.mp4", "video2.mp4", "video3.mp4"].map((video, index) => (
          <video
            key={index}
            src={`./assests/audition videos/${video}`}
            controls
            onClick={() => openFullscreen(`/videos/${video}`)}
          ></video>
        ))}
      </div>

      {/* Background */}
      <img className={styles["background"]} src={BG_IMAGE} alt="Gallery" />

    </section>
  );
};

export default Audition;
