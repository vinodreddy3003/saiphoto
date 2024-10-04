import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Portfolio.css"; // Import CSS file for styling

import ChatButton from "./ChatButton";
import FooterR from "./FooterR";

// Import images
import weddingImage from '../assets/wedding/Copy of Apple (447).jpg';
import preWeddingImage from '../assets/preweddingpics/IMG-20240914-WA0011.jpg';
import filmsImage from '../assets/Reception/Copy of Apple (301).jpg';
import receptionImage from '../assets/Reception/IMG-20240914-WA0032.jpg';
import modelingImage from '../assets/LRM_EXPORT_155380621530054_20190412_225055175.jpeg';
import birthdayImage from '../assets/IMG_9211.JPG';

const Portfolio = () => {
  const portfolioItems = [
    { title: "Wedding", location: "Taj President", img: weddingImage, route: "/wedding" },
    { title: "PreWedding", location: "Caravela Beach Resort - Goa", img: preWeddingImage, route: "/prewedding" },
    { title: "Films", location: "The Leela Palace", img: filmsImage, route: "/films" }, 
    { title: "Reception", location: "Oberoi Udaivilas", img: receptionImage, route: "/reception" },
    { title: "Modeling", location: "JW Marriot", img: modelingImage, route: "/modeling" },
    { title: "Birthday", location: "Hyatt Regency", img: birthdayImage, route: "/birthday" },
  ];

  return (
    <>
      <div className="portfolio">
        {/* Add Heading */}
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <Link to={item.route}>
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <h2>{item.title}</h2>
                {/* <p>{item.location}</p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ChatButton />
      <FooterR />
    </>
  );
};

export default Portfolio;
