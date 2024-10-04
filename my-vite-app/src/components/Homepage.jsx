import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Homepage.css';

import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import ChatButton from './ChatButton';
import FooterR from './FooterR';

// Import images
import appleImage1 from '../assets/Copy of Apple (381).jpg';
import appleImage2 from '../assets/Copy of Apple (447).jpg';
import preWeddingImage1 from '../assets/preweddingpics/IMG-20240914-WA0019.jpg';
import preWeddingImage2 from '../assets/preweddingpics/IMG-20240914-WA0013.jpg';
import birthdayImage from '../assets/Birthday/IMG_9203.JPG';
import modelingImage from '../assets/modeling/LRM_EXPORT_131562256033281_20190411_233159615.jpeg';

const Homepage = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to handle Book Now button click and navigate to contact page
  const handleBookNowClick = () => {
    navigate('/contact');  // Redirect to the /contact route and scroll to the section
  };

  return (
    <div className="homepage-swiper-container">
      <Swiper
        className="homepage-swiper"
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {/* Swiper slides */}
        <SwiperSlide className="homepage-swiper-slide">
          <img src={appleImage1} alt="Slide 1" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={preWeddingImage1} alt="Slide 2" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={preWeddingImage2} alt="Slide 3" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={appleImage2} alt="Slide 4" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src="../assets/LRM_EXPORT_157500206535837_20190412_232614882.jpeg" alt="Slide 5" className="homepage-slide-image" />
        </SwiperSlide>
      </Swiper>
      <ChatButton />
      
      <div className="homepage-intro">
        <h1 className="homepage-heading">We cover all types of events</h1>
        <p className="homepage-description">
          Welcome to <b>Blessed Photography!</b> I am passionate about capturing the precious and significant moments<br />
          in people's lives. My joy and satisfaction come from seeing the beautiful smiles of individuals I've had the<br />
          pleasure to photograph. Each click is a chance to preserve and celebrate those unique, joyous moments.
        </p>
      </div>
      
      <div className="homepage-engagement-section">
        {/* Engagement Cards */}
        <div className="homepage-engagement-card">
          <img src={appleImage1} alt="Engagement Shoot 1" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Engagement Shoot</h2>
            <p className="engagement-description">
            We offer an unforgettable engagement photoshoot<br/> experience that captures the excitement and love <br/>of your relationship, creating lasting memories<br/> you'll hold dear forever.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card reverse">
          <img src={preWeddingImage1} alt="Engagement Shoot 2" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Pre-wedding Shoot</h2>
            <p className="engagement-description">We create a personalized pre-wedding photoshoot<br/> experience that captures the essence of your love story,<br/>  preserving the joy and excitement of this special time in <br/> stunning, timeless photos.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card">
          <img src={appleImage2} alt="Engagement Shoot 3" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Wedding Shoot</h2>
            <p className="engagement-description">
            We provide a unique wedding photoshoot experience<br/>  that will elevate your special day and capture<br/>  unforgettable memories you'll <br/> cherish forever.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card reverse">
          <img src={birthdayImage} alt="Birthday Shoot" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Birthday Shoot</h2>
            <p className="engagement-description">
            Celebrate your special day with a fun and memorable<br/>  birthday photoshoot, creating lasting keepsakes you'll <br/> treasure forever.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card">
          <img src={modelingImage} alt="Modeling" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Modeling</h2>
            <p className="engagement-description">
            Enhance your portfolio with a professional modeling<br/>  photoshoot that captures your unique style and <br/> personality, delivering stunning images <br/> that make a lasting impression.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>
      </div>
      <FooterR />
    </div>
  );
};

export default Homepage;
