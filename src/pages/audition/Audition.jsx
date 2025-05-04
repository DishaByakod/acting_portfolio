import React from "react";
import styles from "./Audition.module.css";
import Scroller from "../../helper/scroller/Scroller";
import VideoCard from "../../helper/videocard/VideoCard";

const BG_IMAGE = "/assests/images/backgrounds/black2.jpg";

const AUDITION_VIDEOS = (
  <>
    {[
      {video: "ad audition 2.mp4", poster: undefined, title: "Ad Audition"},
      {video: "dance video.mp4", poster: undefined, title: "Dance Video"},
      {video: "english audition.mp4", poster: undefined, title: "English Audition"},
      {video: "hindi dialog.mp4", poster: undefined, title: "Hindi Dialog"},
      {video: "Hindi movie audition.mp4", poster: undefined, title: "Hindi Movie Audition"},
      {video: "kannada audition.mp4", poster: undefined, title: "Kannada Audition"},
      {video: "kannada movie audition 2.mp4", poster: "kannada movie audition 2.png", title: "Kannada Movie Audition"},
      {video: "kannada movie audition.mp4", poster: undefined, title: "Kannada Movie Audition"},
      {video: "movie audition.mp4", poster: undefined, title: "Movie Audition"},
      {video: "stranger observation.mp4", poster: undefined, title: "Stranger Observation"},
      {video: "tamil movie audition.mp4", poster: "tamil movie audition.png",},
    ].map((video, index) => (
      <VideoCard
        folder={"./assests/audition videos"}
        key={index}
        video={video.video}
        poster={video.poster}
        link={video.link}
        title={video.title}
        index={index}
        width="300px"
        height="200px"
      />
    ))}
  </>
);

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
