import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modeling.css';

// Importing images
import img1 from '../assets/Birthday/IMG_9148.JPG';
import img2 from '../assets/Birthday/IMG_9149.JPG';
import img3 from '../assets/Birthday/IMG_9154.JPG';
import img4 from '../assets/Birthday/IMG_9157.JPG';
import img5 from '../assets/Birthday/IMG_9159.JPG';
import img6 from '../assets/Birthday/IMG_9164.JPG';
import img7 from '../assets/Birthday/IMG_9165.JPG';
import img8 from '../assets/Birthday/IMG_9166.JPG';
import img9 from '../assets/Birthday/IMG_9167.JPG';
import img10 from '../assets/Birthday/IMG_9232.JPG';
import img11 from '../assets/Birthday/IMG_9168.JPG';
import img12 from '../assets/Birthday/IMG_9169.JPG';
import img13 from '../assets/Birthday/IMG_9234.JPG';
import img14 from '../assets/Birthday/IMG_9170.JPG';
import img15 from '../assets/Birthday/IMG_9171.JPG';
import img16 from '../assets/Birthday/IMG_9172.JPG';
import img17 from '../assets/Birthday/IMG_9173.JPG';
import img18 from '../assets/Birthday/IMG_9175.JPG';
import img19 from '../assets/Birthday/IMG_9177.JPG';
import img20 from '../assets/Birthday/IMG_9178.JPG';
import img21 from '../assets/Birthday/IMG_9180.JPG';
import img22 from '../assets/Birthday/IMG_9203.JPG';
import img23 from '../assets/Birthday/IMG_9207.JPG';
import img24 from '../assets/Birthday/IMG_9219.JPG';
import img25 from '../assets/Birthday/IMG_9222.JPG';
import img26 from '../assets/Birthday/IMG_9228.JPG';
import img27 from '../assets/Birthday/IMG_9243.JPG';
import img28 from '../assets/Birthday/IMG_9230.JPG';

// Array of imported images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
  img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28
];

const Birthday = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const navigate = useNavigate();  // Hook to navigate back

  const openModal = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <div className="image-container" key={index} onClick={() => openModal(img)}>
            <img loading="lazy" src={img} alt={`Birthday ${index}`} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={currentImage} alt="Selected" />
        </div>
      )}
    </>
  );
};

export default Birthday;
