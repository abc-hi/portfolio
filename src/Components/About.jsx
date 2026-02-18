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
        <p>I am a skilled React developer with a strong portfolio,</p>
             <p> passionate about staying updated on the MERN stack and</p>
               <p> currently upskilling AI and data-driven technologies(Skillnet, Ireland).</p>
                <p>Collaborative and committed to delivering high-quality work, </p>
               <p>I thrive in dynamic teams. I am eager to contribute</p>
               <p>creativity and bring innovative ideas to life.</p></span></div>    
        </div>
    );
};

export default About;