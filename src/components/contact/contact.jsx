import React from 'react'
import './contact-style.css'


import Navigbar from "../Navbar/Navigbar";
import Footer from '../Footer/Footer';


function Contact() {return(
    <div id="contact-container">
        <Navigbar/>
        <div className="main-content-contact">
            <div className="welcome-text">Hey, Want to get some info about Joji 
            </div>
            <div className="welcome-text-email">Enter your email</div>
            <input type = "text" className ="input1" placeholder="Your email"/>
            <div className="welcome-text-name">Enter your Name</div>
            <input type = "text" className ="input2" placeholder="Your name"/>
            <div className="welcome-text-phone">Enter your Phone Number</div>
            <input type = "text" className ="input2" placeholder="Your phone"/>
            <div className="welcome-text-phone">Enter your something about yourself</div>
            <input type = "text" className ="input3" placeholder="Your phone"/>
            <button className ="button-content">Click Me!</button>
            
            <div className="youtube-link"> Youtube</div>
            <div className="twitter-link"> Twitter</div>
            <div className="thanks">Thank you for using our service</div>
        </div>
        <Footer/>
    </div>
)
};

export default Contact;


