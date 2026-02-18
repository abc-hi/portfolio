import React from 'react';

const Visionary = () => {
    return (
        <div>
                        <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>
                        <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Visionary</h5> {/* Use class for styling */}
<br />
            <div className="card mx-auto" data-bs-theme="dark" style={{maxWidth:"38rem"}}>
           
  <div className="card-body">
    
    <h5 className="card-title">Personalisation</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">A glimpses of my motivality</h6>
    <p className="card-text">I thrive on challenges that push the boundaries of IT. Curiosity drives me to explore new technologies and find creative solutions. From coding to design and everything in between, my skill set includes React, Node.js, MongoDB, SQL, and JavaScript, honed through hands-on experience and continuous learning. I am currently upskilling in AI, learning data cleaning, visualization, and machine learning concepts, and I aim to combine my MERN Stack expertise with AI to build impactful and intelligent solutions.</p>
    
  </div>    
</div><br />
<div className="card mx-auto" data-bs-theme="dark" style={{maxWidth:"38rem"}}>
  <div className="card-body">
    <h5 className="card-title">Reason to hire me</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">What sets me apart</h6>
    <p className="card-text">I am deeply passionate about coding and approach every project with enthusiasm and commitment, ensuring excellence in every aspect. My knack for solving complex problems and finding innovative solutions allows me to tackle challenges effectively, whether in web development or AI-driven projects, driving impactful outcomes and delivering value to any team I join.</p>
  
  </div>
</div>
        </div></div>
    );
};

export default Visionary;