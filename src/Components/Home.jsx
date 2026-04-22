import React from 'react';
import Education from './Education.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Visionary from './Visionary.jsx';

const Home = () => {

  

    return (


    <div className="min-vh-100" style={{ backgroundColor: 'var(--bs-dark)'}}>

        
        <div><About />
        <Skills />
        <Projects />

<Visionary />        
            <Education />
        </div></div>
    );
};

export default Home;