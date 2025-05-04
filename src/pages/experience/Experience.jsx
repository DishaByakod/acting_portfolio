import React, { useState } from "react";
import styles from "./Experience.module.css";
import Scroller from "../../helper/scroller/Scroller";
import VideoCard from "../../helper/videocard/VideoCard";

const BG_IMAGE = "./assests/images/backgrounds/black2.jpg";

const AUDITION_VIDEOS = (
  <>
    {[
      "https://www.youtube.com/watch?v=1EEPg-_612Q",
      "https://youtu.be/m3n1hQtFF00?si=lw6Ipc1KgGgR28OU",
      "https://youtu.be/0sZA9YR3e7Q?si=gwDbeCBmsfWldFKY",
    ].map((video, index) => {
      const embedUrl = video
        .replace("youtu.be/", "www.youtube.com/embed/")
        .replace("watch?v=", "embed/");
      return (
        <iframe
          key={index}
          width="420"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Audition Video ${index + 1}`}
        ></iframe>
      );
    })}
  </>
);



const AD_SHOOTS = (
  <>
    {[
      { video: "Brigade_1.mp4", poster: undefined, link: "https://www.instagram.com/p/DDgkVwVplgT/" },
      { video: "Brigade_2.mp4", poster: undefined, link: "https://www.instagram.com/p/DDq0MQvpkr_/" },
      { video: "Brigade_3.mp4", poster: undefined, link: "https://www.instagram.com/p/DEMMpIrJWw5/" },
      { video: "Brigade_4.mp4", poster: "Brigade_4.png", link: "https://www.instagram.com/p/DD6TFFqCHSI/" },
      { video: "Brigade_5.mp4", poster: undefined, link: "https://www.instagram.com/p/DEeRw99pwKY/" },
      { video: "Saree.mp4", poster: "Saree.png", link: "https://www.instagram.com/reel/DB5KpoMKIcH/" },
      { video: "Dayspring.mp4", poster: "Dayspring.png", link: "https://www.instagram.com/reel/DD3tIkPSj-E/" },
    ].map((video, index) => (
      <VideoCard
        key={index}
        video={video.video}
        poster={video.poster}
        link={video.link}
        index={index}
        folder={"./assests/instagram"}
        width="225px"
        height="400px"
      />
    ))}
  </>
);

const Album = ({ title, videos }) => {
  return (
    <div id={title} className={styles["album"]}>
      {/* Header */}
      <div className={styles["album-title"]}>
        <h2 className="section-sub-title">{title}</h2>
      </div>

      {/* Images */}
      <Scroller className={styles["videos"]}>{videos}</Scroller>
    </div>
  );
};

const Audition = () => {
  const [fullscreenVideo, setFullscreenVideo] = React.useState(null);

  const openFullscreen = (src) => {
    setFullscreenVideo(src);
  };

  return (
    <section id="audition-videos" className={styles["container"]}>
      <h2 className="section-title">Experience</h2>
      <div className={`${styles["videos-scroll"]} videos-scroll`}>
        <Album title="Short Films" videos={AUDITION_VIDEOS} />
        <Album title="Ad Shoots" videos={AD_SHOOTS} />
      </div>

      {/* Background */}
      <img className={styles["background"]} src={BG_IMAGE} alt="Gallery" />
    </section>
  );
};

export default Audition;
