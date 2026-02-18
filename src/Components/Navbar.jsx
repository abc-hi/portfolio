import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" href="#">Portfolio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <Link to="/About" class="nav-link active" aria-current="page" href="#">About</Link>

        <Link to="/Skills" class="nav-link active" aria-current="page" href="#">Skills</Link>
                        <Link to="/WorkExperience" class="nav-link active" aria-current="page" href="#">Work Experience</Link>
        <Link to="/Projects" class="nav-link active" aria-current="page" href="#">Projects</Link>
   <Link to="/Certifications" class="nav-link active" aria-current="page" href="#">Certifications</Link>
        <Link to="/Visionary" class="nav-link active" aria-current="page" href="#">Visionary</Link>

        <Link to="/Education" class="nav-link active" aria-current="page" href="#">Education</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
