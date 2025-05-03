import React from "react";
import styles from "./Introduction.module.css";
import Scroller from "../../helper/scroller/Scroller";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";

const introductionVideos = (
  <>
    {["english.mp4", "kannada.mp4", "hindi.mp4"].map((video, index) => (
      <video
        key={index}
        src={`./assests/introduction_videos/${video}`}
        controls
        // onClick={() => openFullscreen(`/videos/${video}`)}
      ></video>
    ))}
  </>
);

const Audition = () => {
  const [fullscreenVideo, setFullscreenVideo] = React.useState(null);



  return (
    <section id="audition-videos" className={styles["container"]}>
      <h2 className="section-title">Introduction Videos</h2>
      <div className="video-scroll">
        <Scroller className={styles["videos"]}>{introductionVideos}</Scroller>
      </div>

      {/* Background */}
      {/* <img className={styles["background"]} src={BG_IMAGE} alt="Gallery" /> */}

    </section>
  );
};

export default Audition;
