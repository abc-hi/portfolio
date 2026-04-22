import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#" style={{fontSize:"24px"}}>Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
            <div className="collapse navbar-collapse" id="navbarNav">

      {/* <div className="navbar-nav mx-auto" style={{fontSize:"24px"}}> */}
                <div className="navbar-nav mx-auto text-center gap-2 gap-lg-4">

        <Link to="/About" className="nav-link active" aria-current="page" href="#">About</Link>

        <Link to="/Skills" className="nav-link active" aria-current="page" href="#">Skills</Link>
                        <Link to="/WorkExperience" className="nav-link active" aria-current="page" href="#">Work Experience</Link>
        <Link to="/Projects" className="nav-link active" aria-current="page" href="#">Projects</Link>
   <Link to="/Certifications" className="nav-link active" aria-current="page" href="#">Certifications</Link>
        <Link to="/Visionary" className="nav-link active" aria-current="page" href="#">Visionary</Link>

        <Link to="/Education" className="nav-link active" aria-current="page" href="#">Education</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
