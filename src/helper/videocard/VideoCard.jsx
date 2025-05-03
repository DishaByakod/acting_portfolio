import React from "react";

const VideoCard = ({ video, poster, link, index, width, height, folder, title }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    const videoElement = document.getElementById(`video-${folder}-${index}`);
    videoElement.play();
    setIsPlaying(true);
  };

  return (
    <div
      key={index}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <video
        controls = {isPlaying}
        id={`video-${folder}-${index}`}
        style={{ height: height, width: width, borderRadius: "16px" }}
        poster={poster ? `${folder}/${poster}` : undefined}
        src={`${folder}/${video}`}
        onPlay={handlePlay}
        onClick={handlePlay}
      ></video>
      {/* Play Button */}
      {!isPlaying && (
        <div
          onClick={handlePlay}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="30px"
            height="30px"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
      {link && <a
        href={link}
        style={{ fontSize: "14px", textAlign: "center", marginTop: "1rem" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>}
      {title && <p style={{ fontSize: "16px", textAlign: "center", marginTop: "1rem" }}>{title}</p>}
    </div>
  );
};
export default VideoCard;