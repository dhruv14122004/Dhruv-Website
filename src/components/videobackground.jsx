import background from "../assets/background.mp4"

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="background-video" >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
