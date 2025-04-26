import React from "react";
const Audition = () => {
  const [fullscreenVideo, setFullscreenVideo] = React.useState(null);

  const openFullscreen = (src) => {
    setFullscreenVideo(src);
  };

  return (
    <section id="audition-videos" className="audition-videos-section">
      <h2 className="section-heading">Audition Videos</h2>
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
    </section>
  );
};

export default Audition;
