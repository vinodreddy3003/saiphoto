import React from 'react';
import './AboutMe.css';
import FooterR from './FooterR';
import topImage from '../assets/Films/Frame 35.png';
import portraitImage1 from '../assets/pic6.jpg';
import portraitImage2 from '../assets/pic9.jpg';
import ChatButton from './ChatButton';

const AboutMe = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="top-image-section">
          <img src={topImage} alt="Camera Setup" className="top-image" />
        </div>

        <div className="content-section">
          <div className="text-section">
            <h2>ABOUT US</h2>
            <p>
            From a young age, I discovered my passion for photography while exploring nature and capturing fleeting moments. Armed with my first camera, I found joy in framing the world around me, transforming everyday scenes into compelling stories. This passion deepened as I honed my skills through practice and experimentation, learning the art of lighting, composition, and post-processing.

Over the years, I’ve had the privilege of achieving several milestones in my photography journey. My work has been featured in local exhibitions, and I’ve collaborated with various brands for promotional campaigns. Winning awards in photography contests has further validated my efforts and fueled my ambition to grow.

Looking ahead, my goals are to expand my portfolio by exploring new styles and subjects, particularly in portrait and documentary photography. I aspire to host my own exhibitions, share my knowledge through workshops, and connect with fellow photographers globally. Ultimately, I aim to use my photography to tell impactful stories and inspire others to see the beauty in everyday life.
            </p>
          </div>
          <div className="image-section">
            <img src={portraitImage1} alt="Photographer 1" className="portrait-image" />
            <img src={portraitImage2} alt="Photographer 2" className="portrait-image" />
          </div>
        </div>
      </div>
      <ChatButton />
      <FooterR />
    </>
  );
};

export default AboutMe;
