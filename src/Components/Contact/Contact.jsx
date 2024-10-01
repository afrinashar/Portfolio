import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u2388zu', 'template_264vzrx', form.current, 'EXB1Vzyswi7-Bm5mE')
            .then((result) => {
                console.log('Email successfully sent:', result.text);
                setDone(true);
            }, (error) => {
                console.error('Email sending failed:', error.text);
            });
    };

    const { state: { darkMode } } = useContext(themeContext);

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder="Name" />
                    <input type="email" name="user_email" className='user' placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thanks for contacting me"}</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
