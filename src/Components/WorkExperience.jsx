import React from 'react'

const WorkExperience = () => {
  return (
          <div>
                        <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>
                        <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Work Experience</h5> {/* Use class for styling */}
<br />
            <div className="card mx-auto" data-bs-theme="dark" style={{maxWidth:"38rem"}}>
           
  <div className="card-body">
    
    <h5 className="card-title">Parqwik | Frontend Developer Intern | 19 Feb 2025 – 19 May 2025</h5>
    <p className="card-text">I Gained hands-on exposure to Agile development workflow and sprint planning in a real project environment.

Worked with React.js, JavaScript, HTML, CSS, and Tailwind CSS to implement frontend features.

Learned to collaborate effectively in a team, participate in requirement discussions, and follow Git version control for project management.

</p>
    
  </div>    
</div><br />
<div className="card mx-auto" data-bs-theme="dark" style={{maxWidth:"38rem"}}>
  <div className="card-body">
    <h5 className="card-title">Wipro Technologies | Manual Tester | 14 Feb 2011 – 05 Oct 2015</h5>
    <p className="card-text">Executed detailed manual test cases simulating real-world scenarios to ensure software accuracy and reliability.

Reviewed requirement specifications, design documents, and provided quality feedback to development teams.

Conducted regression testing, verified system functionality, and ensured software met business requirements.

Gained experience in team communication, documentation, and reporting bugs effectively.</p>
  
  </div>
</div>
        </div></div>
    );
};

export default WorkExperience