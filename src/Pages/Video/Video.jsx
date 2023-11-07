import videoSource from '../../assets/production_id_4095680 (1080p).mp4'
const Video = () => {
    return (
        <section className="banner">
        <div className="video-container">
          <video controls width="100%" height="auto">
            <source src={videoSource} type="video/mp4" />
            
          </video>
        </div>
      </section>
    );
};

export default Video;