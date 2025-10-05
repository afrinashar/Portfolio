import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_u2388zu', 'template_va9w8qy', form.current, 'EXB1Vzyswi7-Bm5mE')
            .then((result) => {
                console.log('Email successfully sent:', result.text);
                setDone(true);
            }, (error) => {
                console.error('Email sending failed:', error.text);
            });
    };
    const { state: { darkMode } } = useContext(themeContext);
    return (
      <section className="contact-form" id="Contact" aria-label="Contact Form">
        <div className="w-left">
          <header>
            <h2 style={{ color: darkMode ? "white" : "" }}>Get in touch</h2>
            <h3>Contact me</h3>
          </header>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail} aria-label="Send a message">
            <div className='labels'>
              <label htmlFor="user_name">Name:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="user"
                placeholder="Enter name"
                autoComplete="name"
                required
              />
            </div>
            <div className='labels'>
              <label htmlFor="user_email">Email:</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="user"
                placeholder="Enter email"
                autoComplete="email"
                required
              />
            </div>
            <div className='labels'>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                className="user"
                placeholder="Enter message"
                required
              />
            </div>
            <input type="submit" value="Send" className="button" aria-label="Send message" />
            {done && <p className="success-message" aria-live="polite">Thank you! Your message has been sent.</p>}
          </form>
        </div>
      </section>
    );
};

export default Contact;
