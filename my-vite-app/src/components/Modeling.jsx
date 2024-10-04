import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modeling.css';

// Import images using relative paths
import img1 from '../assets/modeling/LRM_EXPORT_128925699594748_20190411_224744517.jpeg';
import img2 from '../assets/modeling/LRM_EXPORT_129308876166356_20190411_225408290.jpeg';
import img3 from '../assets/modeling/LRM_EXPORT_130251727324344_20190411_230951308-01.jpeg';
import img4 from '../assets/modeling/LRM_EXPORT_132217477473554_20190411_234254836-01.jpeg';
import img5 from '../assets/modeling/LRM_EXPORT_132686582814607_20190411_235044028-01.jpeg';
import img6 from '../assets/modeling/LRM_EXPORT_152740803358175_20190412_220655989.jpeg';
import img7 from '../assets/modeling/LRM_EXPORT_153343931238049_20190412_221659117.jpeg';
import img8 from '../assets/modeling/LRM_EXPORT_153793067920864_20190412_222427381.jpeg';
import img9 from '../assets/modeling/LRM_EXPORT_155380621530054_20190412_225055175 (1).jpeg';
import img10 from '../assets/modeling/LRM_EXPORT_155826691474230_20190412_225821471.jpeg';
import img11 from '../assets/modeling/LRM_EXPORT_156126289644336_20190412_230321069.jpeg';
import img12 from '../assets/modeling/LRM_EXPORT_156819926623799_20190412_231454685.jpeg';
import img13 from '../assets/modeling/LRM_EXPORT_157500206535837_20190412_232614882 (1).jpeg';
import img14 from '../assets/modeling/LRM_EXPORT_157930514070006_20190412_233325189.jpeg';
import img15 from '../assets/modeling/LRM_EXPORT_158455762806861_20190412_234211005.jpeg';
import img16 from '../assets/modeling/LRM_EXPORT_131562256033281_20190411_233159615.jpeg';
// Add more imports here if neede

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,
  // Add more image imports here
];

const Modeling = () => {
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

export default Modeling;
