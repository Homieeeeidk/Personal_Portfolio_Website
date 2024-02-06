import React, { useRef } from "react";
import './contact.css';

import FacebookIcon from '../../assets/linkedin.png';
import gitIcon from '../../assets/git.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fxmt5qs', 'template_hfbf5iw', form.current, '4yptCduMFAQyWFyIx')
            .then((result) => {console.log(result.text);
                e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contactPage">
            {/* <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">I have had the annantynity to work with a diverse group of companies.
                    mpanies I have worked with include.
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg"/>
                    <img src={Adobe} alt="Client" className="clientImg"/>
                    <img src={Microsoft} alt="Client" className="clientImg"/>
                    <img src={Facebook} alt="Client" className="clientImg"/>
                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact</h1>
                <span className="contactDesc">Feel free to reach out to me.</span>
                <form className="contactForm" ref ={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required="True"/>
                    <input type="email" className="name" placeholder="Your Email" name="your_email" required="True"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <span className="contactDesc1">Check out my <b>LinkedIn</b> profile: </span>
                    <div className="links">
                            <a href="https://www.linkedin.com/in/homayoun-elyasi"  target="_blank"><img src={FacebookIcon} alt="Facebook" className="link"/></a>
                            <a href="https://github.com/Homieeeeidk"  target="_blank"><img src={gitIcon} alt="Facebook" className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;