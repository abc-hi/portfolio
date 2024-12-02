import React from 'react';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
        
        <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px"}}>

            <div class="margin" >
            <span >
            <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Projects</h5> {/* Use class for styling */} <br />
           
            <p className="skills-titlepara" style={{color:"white",textAlign:"center",marginLeft:"15rem",marginRight:"15rem"}}>
"My projects demonstrate a strong foundation in building full-stack applications using MongoDB, Express, React, and Node.js. I have successfully implemented user authentication, data management, and responsive design principles to create seamless user experiences. By focusing on code organization, modularity, and scalability, I aim to deliver applications that are both efficient and maintainable. My work reflects my commitment to continuous learning and adapting to new technologies, ensuring that I stay updated with the latest trends and best practices in web development."</p>        

            <p className="skills-titlepara" style={{color:"white",textAlign:"center"}}>Here you can find some of my projects using MERN stack</p>   </span>     </div>
<br />

<div className='container'style={{ marginLeft:"23rem"}}>
  <div className='row'>
  <div className="card" style={{width: "18rem", backgroundColor: "var(--bs-dark)", color: "#fff"}}>
  <img src="https://raw.githubusercontent.com/abc-hi/projectimages/main/weatherAppImage.png" alt="Project Screenshot" />
  <div className="card-body">
    <h5 className="card-title">WeatherApp</h5>
    <p className="card-text">It is a responsive weather App, I created as a beginner frontend developer</p>
    <p className="card-text">Technologies used:  reactjs, javascript, tailwind css</p>
    <a href="https://revasweatherapplication.netlify.app" className="btn btn-primary" style={{ backgroundColor: "#1b1b2a"}}>Link to Project</a>
  </div>
</div>

<div className="card" style={{width: "18rem", backgroundColor: "var(--bs-dark)", color: "#fff"}}>
<img src="https://raw.githubusercontent.com/abc-hi/projectimages/main/itemcatelogimage.png" alt="Project Screenshot" />
<div className="card-body">
    <h5 className="card-title">ItemCatelog</h5>
    <p className="card-text">It is a ecommerce full stack project which is created in MERN stack.</p>
    <p className="card-text">Technologies used : javascript,reactjs,nodejs,mongoDB,CSS,Bootstrap</p>

    <a href="https://itemcatelogfrontcode.netlify.app" className="btn btn-primary" style={{ backgroundColor: "#1b1b2a"}}>Link to Project</a>
  </div>
</div>
</div>

</div></div>


    );
};

export default Projects;