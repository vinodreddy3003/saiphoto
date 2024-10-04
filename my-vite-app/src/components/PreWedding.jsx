import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modeling.css';

// Importing images
import img1 from '../assets/preweddingpics/IMG-20240914-WA0007.jpg';
import img2 from '../assets/preweddingpics/IMG-20240914-WA0011.jpg';
import img3 from '../assets/preweddingpics/IMG-20240914-WA0013.jpg';
import img4 from '../assets/preweddingpics/IMG-20240914-WA0015.jpg';
import img5 from '../assets/preweddingpics/IMG-20240914-WA0016.jpg';
import img6 from '../assets/preweddingpics/IMG-20240914-WA0017.jpg';
import img7 from '../assets/preweddingpics/IMG-20240914-WA0009.jpg';
import img8 from '../assets/preweddingpics/IMG-20240914-WA0010.jpg';
import img9 from '../assets/preweddingpics/IMG-20240914-WA0008.jpg';
import img10 from '../assets/preweddingpics/IMG-20240914-WA0012.jpg';
import img11 from '../assets/preweddingpics/IMG-20240914-WA0018.jpg';
import img12 from '../assets/preweddingpics/IMG-20240914-WA0019.jpg';
import img13 from '../assets/preweddingpics/IMG-20240914-WA0012.jpg';

// Array of imported images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
];

const PreWedding = () => {
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

export default PreWedding;
