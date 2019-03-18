import React from 'react';
import ContactForm from "../components/ContactForm";
import '../styles/About.css';

function About() {
    return (
        <div className="about container">
            <h1>Send us a message</h1>
            <ContactForm/>
        </div>
    );
}

export default About;