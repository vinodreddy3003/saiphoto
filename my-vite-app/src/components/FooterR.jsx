import React from 'react'
import { Layout  } from 'antd';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
const { Footer } = Layout;
import './FooterR.css';

const FooterR = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    // Function to handle Book Now button click and navigate to contact page
    const handleBookNowClick = () => {
      navigate('/contact');  // Redirect to the /contact route
    };
  return (
    <Footer className="homepage-footer">
    <div className="footer-content">
      <div className="footer-left">
        <h3 className="footer-heading">Our Address</h3>
        <p className="footer-address">
              510, 2ND BLOCK, 4TH CROSS, 68, YAJAMAN LAYOUT, Begur, Bengaluru, Karnataka 560068<br />
              VJHF+W8 Bengaluru, Karnataka<br />
                Mobile Number: +919980400473
        </p>
        
        <div className="footer-social">
          <a href="https://wa.me/9980400473" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <WhatsAppOutlined className="footer-social-icon" />
          </a>
          <a href="https://www.instagram.com/photography_ram/profilecard/?igsh=MXVmdW91M3N6dmJxcQ==" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <InstagramOutlined className="footer-social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <h3 className="footer-heading">Useful Links</h3>
        <h4 className="footer-link" onClick={handleBookNowClick}>Contact Us</h4>
      </div>
    </div>
    <div className="footer-bottom">
      <p>All Rights Reserved | Copyright © 2024 Blessed Photography Website.</p>
    </div>
  </Footer>

    
  )
}

export default FooterR;