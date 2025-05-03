import React from "react";
import styles from "./Audition.module.css";
import Scroller from "../../helper/scroller/Scroller";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";

const AUDITION_VIDEOS = (
  <>
    {["ad audition 2.mp4", "dance video.mp4", "english audition.mp4", "hindi dialog.mp4", "Hindi movie audition.mp4", "kannada audition.mp4", "kannada movie audition 2.mp4", "kannada movie audition.mp4", "movie audition.mp4", "stranger observation.mp4", "tamil movie audition.mp4"].map((video, index) => (
      <video
        style={{position: "relative"}}
        key={index}
        src={`./assests/audition videos/${video}`}
        controls
      ></video>
    ))}
  </>
)

const Audition = () => {
  const [fullscreenVideo, setFullscreenVideo] = React.useState(null);

  const openFullscreen = (src) => {
    setFullscreenVideo(src);
  };

  return (
    <section id="audition-videos" className={styles["container"]}>
      <h2 className="section-title">Audition Videos</h2>
      <div className="video-scroll">
        <Scroller className={styles["videos"]}>{AUDITION_VIDEOS}</Scroller>
      </div>

      {/* Background */}
      <img className={styles["background"]} src={BG_IMAGE} alt="Gallery" />

    </section>
  );
};

export default Audition;
