import React, { useState } from 'react';
import "../css_file/footer.css";
import "../css_file/contact.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub, BsFillArrowRightCircleFill, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleArrowIconClick = () => {
        setShowPopup(!showPopup);
    };
    const handleCrossIconClick = () => {
        setShowPopup(false);
    }

    return (
        <div>
            <div className="footer-container">
                <div className="footer1">
                    <div className='contactus'>
                        <div className="contactus-heading">Contact Us</div>
                        <div className="BsFillArrowRightCircleFill" onClick={handleArrowIconClick}>
                            <BsFillArrowRightCircleFill />
                        </div>
                    </div>
                </div>
                <div className="footer2">
                    <div className="icon">
                        <a href="https://www.facebook.com/gautam.aj.52/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                        <a href="https://www.instagram.com/ajesh_gautam/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                        <a href="https://www.linkedin.com/in/ajesh-gautam-6b12a221a/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/GautamAjesh" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                        <a href="https://twitter.com/Ajesh249" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                    </div>
                    <hr />
                    <p>&copy; {new Date().getFullYear()} ChasmaBazar Website. All rights reserved.</p>
                </div>
            </div>

            {showPopup &&
                <div className='overlay'>
                    <div className='popup-container'>
                        <div className='popup-content'>
                            <form method="POST" action="mailto: gautamajesh592@gmail.com" enctype="plain/text">
                                <h1>Contact Us</h1>
                                <div className="cross-icon" onClick={handleCrossIconClick}>&#10005;</div>
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name.." required/>
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Your email.." required/>
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." required></textarea>
                                <button type='submit' value="submit" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Footer;