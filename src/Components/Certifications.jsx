import React from 'react'
import About from './About.jsx'

const Certifications = () => {
  return (
    
    <div>
        <About/>
                        <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>
                        <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Certifications</h5> {/* Use class for styling */}
<br />
            <div className="card mx-auto" data-bs-theme="dark" style={{maxWidth:"38rem"}}>
           
  <div className="card-body">
    
    <h5 className="card-title">Certifications Done:</h5><br />
    <h5 className="card-subtitle mb-1 text-body-primary">MERN STACK at GUVI, India</h5><br />
<h5 className="card-subtitle mb-1 text-body-primary">
  AI Catalyst Program – Skillnet, Ireland (Expected Completion: April 2026)
</h5>    
  </div>    
</div><br />

        </div></div>
    );
};
export default Certifications