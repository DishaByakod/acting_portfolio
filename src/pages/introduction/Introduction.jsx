import React from "react";
import styles from "./Introduction.module.css";
import Scroller from "../../helper/scroller/Scroller";
import VideoCard from "../../helper/videocard/VideoCard";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";

const introductionVideos = (
  <>
    {[
      { video: "english.mp4", poster: undefined, title: "English" },
      { video: "kannada.mp4", poster: "kannada.png", title: "Kannada" },
      { video: "hindi.mp4", poster: undefined, title: "Hindi" },
    ].map((video, index) => (
      <VideoCard
        key={index}
        video={video.video}
        poster={video.poster}
        link={undefined}
        index={index}
        title={video.title}
        folder={"./assests/introduction_videos"}
        width="300px"
        height="200px"
      />
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
    </section>
  );
};

export default Audition;
