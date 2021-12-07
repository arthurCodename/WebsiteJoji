import React from 'react'
import './contact-style.css'


import Navigbar from "../Navbar/Navigbar";
import Footer from '../Footer/Footer';

function Contact() {
    return (<>
        <Navigbar/>
    <div id="container">
        
        <div className="main-container">
            <div className="contact-main">
                <div className= "contact-form">Hello!
                        To get more info about JoJi,
                        enter your contact info below
                </div>
                 <div className="center-label-div">
                    Enter your email
                </div>    
                <div className="input-form">
                    <input className="email-field" type="email" />
                </div> 
                <div className="center-label-div">
                    Enter your name and last name below
                </div>
                 <div className="input-form">
                    <input className="email-field" type="email" />
                </div>
                <div className="center-label-div">
                    Some info about yourself
                </div>
                <div className="input-form">
                    <input className="email-field-big" type="email" />
                </div> 
                <div className="button-pos">
                    <button className="shape-button">Click me </button>
                </div>  
            </div> 
        </div>
        <Footer/>
    </div>
    </>
    )
};

export default Contact;


  {/* 
                            <div className="input-form">
                                <input className="email-field" type="email" />
                            </div>
                        <div className="center-label-div">Enter your name and last name below</div>
                        <div className="input-form">
                                <input className="email-field" type="email" />
                        </div>
                        <div className="center-label-div">Some info about yourself</div>
                        <div className="input-form">
                                <input className="email-field-big" type="email" />
                            </div>
            <div className="button-pos">
                <button className="shape-button">Click me Bruv</button></div>
            </div>
*/  }