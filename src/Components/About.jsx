import React from 'react';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
        <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px"}}>
            <div class="margin" style={{ marginLeft:"5rem"}}>
            <span style={{color:"white"}}><h1>Hi, I am</h1>
            <h1>Revathi Mohan</h1>
            <h1>I am a</h1>
        <p>Skilled React developer with a strong portfolio,</p>
             <p> and a focus on MERN stack development. I have</p>
               <p>completed an AI Catalyst Program (Skillnet, Ireland).</p>
                <p>and gained exposure to AI and data-driven technologies.</p>
               <p>Collaborative and committed to quality work,</p>
               <p>I thrive in dynamic teams and aim to contribute </p>
               <p>creative and innovative solutions.</p></span></div>    
        </div>
    );
};

export default About;