import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modeling.css';

// Importing images
import img1 from '../assets/wedding/Copy of Apple (396).jpg';
import img2 from '../assets/wedding/Copy of Apple (408).jpg';
import img3 from '../assets/wedding/Copy of Apple (410).jpg';
import img4 from '../assets/wedding/Copy of Apple (415).jpg';
import img5 from '../assets/wedding/Copy of Apple (416).jpg';
import img6 from '../assets/wedding/Copy of Apple (417).jpg';
import img7 from '../assets/wedding/Copy of Apple (418).jpg';
import img8 from '../assets/wedding/Copy of Apple (419).jpg';
import img9 from '../assets/wedding/Copy of Apple (420).jpg';
import img10 from '../assets/wedding/Copy of Apple (426).jpg';
import img11 from '../assets/wedding/Copy of Apple (428).jpg';
import img12 from '../assets/wedding/Copy of Apple (431).jpg';
import img13 from '../assets/wedding/Copy of Apple (432).jpg';
import img14 from '../assets/wedding/IMG-20240914-WA0006.jpg';
import img15 from '../assets/wedding/IMG-20240914-WA0021.jpg';
import img16 from '../assets/wedding/IMG-20240914-WA0023.jpg';
import img17 from '../assets/wedding/IMG-20240914-WA0048.jpg';
import img18 from '../assets/wedding/IMG-20240914-WA0050.jpg';
import img19 from '../assets/wedding/IMG-20240914-WA0052.jpg';
import img20 from '../assets/wedding/IMG-20240914-WA0054.jpg';
import img21 from '../assets/wedding/IMG-20240914-WA0056.jpg';
import img22 from '../assets/wedding/IMG-20240914-WA0060.jpg';
import img23 from '../assets/wedding/IMG-20240914-WA0062.jpg';
import img24 from '../assets/wedding/IMG-20240914-WA0064.jpg';
import img25 from '../assets/wedding/IMG-20240914-WA0066.jpg';
import img26 from '../assets/wedding/IMG-20240914-WA0068.jpg';
import img27 from '../assets/wedding/IMG-20240914-WA0070.jpg';
import img28 from '../assets/wedding/IMG-20240914-WA0072.jpg';
import img29 from '../assets/wedding/IMG-20240914-WA0074.jpg';
import img30 from '../assets/wedding/IMG-20240914-WA0076.jpg';
import img31 from '../assets/wedding/IMG-20240914-WA0078.jpg';
import img32 from '../assets/wedding/IMG-20240914-WA0080.jpg';
import img33 from '../assets/wedding/IMG-20240914-WA0082.jpg';

// Array of imported images
const images = [
  img1, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33
];

const Wedding = () => {
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

export default Wedding;
