import React, { useState } from 'react';
import './Contact.css';
import Swal from 'sweetalert2';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'; 
import ChatButton from './ChatButton';
import FooterR from './FooterR';

// Import header image
import headerImage from '../assets/Frame 31.png';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        formData.append("access_key", '14bb9202-da95-4f0c-a541-ef707dc5b864');

        const data = {
            Name: formData.get("Name"),
            Email: formData.get("Email"),
            PhoneNumber: formData.get("PhoneNumber"),
            Event: formData.get("Event"),
            Date: formData.get("Date"),
            message: formData.get("message"),
            access_key: formData.get("access_key")
        };

        const json = JSON.stringify(data);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await res.json();

            if (result.success) {
                Swal.fire({
                    title: "Success!",
                    text: "A Bonus to the photoshoot is delicious coffee and a funny joke.:)",
                    icon: "success"
                }).then(() => {
                    window.location.reload();
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an error submitting the form.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There was an error submitting the form. Please try again later.",
                icon: "error"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
        <div className="contact-container">
            <img className="header-image" src={headerImage} alt="Header" />

            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>510, 2ND BLOCK, 4TH CROSS, 68, YAJAMAN LAYOUT, Begur, Bengaluru, Karnataka 560068<br />
                VJHF+W8 Bengaluru, Karnataka</p>
                <p className='location'>Check out our location</p>

                <div className="separator"></div>
                <div className="call">
                    <p>+91 9848550066</p>
                </div>
                <div className="que">
                    <p>Questions? Call us</p>
                </div>

                <div className="separator"></div>
                <div className="call"><p>mrsaicreator@gmail.com</p></div>

                <div className="que"><p>Drop us a line</p></div>
                <div className="separator"></div>
                <div className="call"><p>Mon to Sat - 10:00 to 09:00</p></div>

                <p>Our common business hours</p>
                <div className="separator"></div>

                {/* Icons for Instagram and WhatsApp */}
                <div className="social-icons">
                    <a 
                        href="https://www.instagram.com/photography_ram/profilecard/?igsh=MXVmdW91M3N6dmJxcQ==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <InstagramOutlined style={{ fontSize: '24px', color: '#000', marginRight: '15px' }} />
                    </a>
                    <a 
                        href="https://wa.me/9980400473" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <WhatsAppOutlined style={{ fontSize: '24px', color: '#25D366' }} />
                    </a>
                </div>
            </div>

            <div className="contact-form">
                <h2>Enquiry Form</h2>
                <p>Will be GLAD to be part of your SPECIAL DAY</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Your Name *</label>
                        <input type="text" name="Name" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Contact Number *</label>
                            <input type="text" name="PhoneNumber" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address *</label>
                            <input type="email" name="Email" required />
                        </div>
                    </div>

                    {/* Added Date Picker */}
                    <div className="form-group">
                        <label>Event Date *</label>
                        <input type="date" name="Date" required />
                    </div>

                    {/* Added Event Dropdown */}
                    <div className="form-group">
                        <label>Event Type *</label>
                        <select name="Event" required>
                            <option value="">Select an event</option>
                            <option value="Engagement">Engagement</option>
                            <option value="PreWedding">Pre-Wedding</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Modeling">Modeling</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Your Message *</label>
                        <textarea name="message" ></textarea>
                    </div>

                    <button type="submit" className='bu' disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Enquiry Form"}
                    </button>
                </form>
            </div>
        </div>
        <ChatButton />
        <FooterR />
        </>
    );
};

export default Contact;
