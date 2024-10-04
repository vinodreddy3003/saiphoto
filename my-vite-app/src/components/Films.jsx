import React, { useRef, useEffect } from 'react';
import './films.css';
import videoFile1 from '../assets/Films/film1.mp4';
import videoFile2 from '../assets/Films/film2.mp4';
import videoFile3 from '../assets/Films/film3.mp4';
import videoFile4 from '../assets/Films/film4.mp4';

// Import posters for the videos
import poster1 from '../assets/Films/Gayathri_20240929_181637_0000.png';
import poster2 from '../assets/Films/Gayathri & Pramod_20240929_172114_0000.png';
import poster3 from '../assets/Films/Gayathri & Pramod_20240929_174109_0000.png';
import poster4 from '../assets/Films/Gayathri & Pramod_20240929_173935_0000.png';

const videos = [videoFile1, videoFile2, videoFile3, videoFile4]; // Array of videos
const posters = [poster1, poster2, poster3, poster4]; // Array of posters

const Films = () => {
  const firstVideoRef = useRef(null);

  useEffect(() => {
    // Scroll to the first video when the page loads
    if (firstVideoRef.current) {
      firstVideoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="films-container">
      {videos.map((video, index) => (
        <div key={index}>
          <div className="video-wrapper" ref={index === 0 ? firstVideoRef : null}>
            <video
              controls
              loop
              poster={posters[index]} // Set poster for each video
              className="custom-video"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Films;
