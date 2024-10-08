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
      <div className="contact-form"  id='Contact'>
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>

        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
          <div className='labels'><label htmlFor="labels">Name:</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="user"
              placeholder="enter name"
            />
           </div>  
           <div className='labels'><label htmlFor="labels">Mail:</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="user"
              placeholder="enter mail"
            />
 </div> 
<div className='labels'> <label htmlFor="labels">Message:</label>
            <textarea
              id="message"
              name="message"
              className="user"
              placeholder="enter message"
            />  <input type="submit" value="Send" className="button" />
</div>
          
              </form>
        </div>
      </div>
    );
};

export default Contact;
