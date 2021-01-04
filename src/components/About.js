import React from 'react';
import './About.css';
function About(){
    return(
        <div className='about-container'>
            <section className="about-header">
                <h1>About Me</h1>
            </section>
            <section className='about-bio'>
                <p className='about-bio-paragraph'>
                This Android Application incorporates CRUD functionallity on a Vehicle Management System.
                Overall, it was a great experience because it was fun, and I learned new things throughout the process. 
                My future plans are to modify the list by displaying the object in a card view where the elements 
                are nice and structured. Feel free to download the application and interact with it. 
                This application uses a real-time database, so you will always have the latest vehicles on your phone.
                </p>
            </section>
            <section className='about-bio'>
                <p className='about-bio-paragraph'>
                This Android Application incorporates CRUD functionallity on a Vehicle Management System.
                Overall, it was a great experience because it was fun, and I learned new things throughout the process. 
                My future plans are to modify the list by displaying the object in a card view where the elements 
                are nice and structured. Feel free to download the application and interact with it. 
                This application uses a real-time database, so you will always have the latest vehicles on your phone.
                </p>
            </section>
        </div>
    )
};

export default About;