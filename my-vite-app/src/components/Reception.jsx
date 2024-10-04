import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modeling.css';

// Importing images
import img1 from '../assets/Reception/IMG-20240914-WA0026.jpg';
import img2 from '../assets/Reception/IMG-20240914-WA0027.jpg';
import img3 from '../assets/Reception/IMG-20240914-WA0028.jpg';
import img4 from '../assets/Reception/IMG-20240914-WA0029.jpg';
import img5 from '../assets/Reception/IMG-20240914-WA0030.jpg';
import img6 from '../assets/Reception/IMG-20240914-WA0031.jpg';
import img7 from '../assets/Reception/IMG-20240914-WA0032.jpg';
import img8 from '../assets/Reception/IMG-20240914-WA0034.jpg';
import img9 from '../assets/Reception/IMG-20240914-WA0036.jpg';
import img10 from '../assets/Reception/IMG-20240914-WA0038.jpg';
import img11 from '../assets/Reception/IMG-20240914-WA0040.jpg';
import img12 from '../assets/Reception/IMG-20240914-WA0042.jpg';
import img13 from '../assets/Reception/IMG-20240914-WA0044.jpg';
import img14 from '../assets/Reception/IMG-20240914-WA0046.jpg';

// Array of imported images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
];

const Reception = () => {
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
            <img loading="lazy" src={img} alt={`Modeling ${index}`} />
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

export default Reception;
