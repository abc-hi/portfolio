import React from 'react';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
        
        <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px"}}>

            <div className="margin" >
            <span >
           <div style={{ fontSize: "22px" }}> <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Projects</h5></div> {/* Use class for styling */} <br />
           
             <div style={{ fontSize: "20px" }}><p className="skills-titlepara" style={{color:"white",textAlign:"center",marginLeft:"15rem",marginRight:"15rem"}}>
"My projects demonstrate a strong foundation in building full-stack applications using MongoDB, Express, React, and Node.js. I have successfully implemented user authentication, data management, and responsive design principles to create seamless user experiences. By focusing on code organization, modularity, and scalability, I aim to deliver applications that are both efficient and maintainable. My work reflects my commitment to continuous learning and adapting to new technologies, ensuring that I stay updated with the latest trends and best practices in web development."</p>        

            <p className="skills-titlepara" style={{color:"white",textAlign:"center"}}>Here you can find some of my projects using MERN stack</p> </div>  </span>     </div>
<br />

<div className='container'style={{ marginLeft:"26rem"}}>
  <div className='row'>
  

<div className="card" style={{width: "18rem", backgroundColor: "var(--bs-dark)", color: "#fff"}}>
<img src="https://raw.githubusercontent.com/abc-hi/projectimages/main/mypjtitemcatelogImage.png
" alt="Project Screenshot" />
<div className="card-body">
    <div style={{ fontSize: "22px" }}> <h5 className="card-title">ItemCatelog</h5></div>
    <div style={{ fontSize: "20px" }}><p className="card-text">It is a ecommerce full stack project and created with MERN stack.</p>
    <p className="card-text">Technologies used : javascript, reactjs, nodejs, mongoDB, CSS, expressjs, Bootstrap, tailwind CSS, HTML</p>

    <a href="https://mypjtitemcatelog.netlify.app" className="btn btn-primary" style={{ backgroundColor: "#1b1b2a"}}>Link to Project</a>
  </div></div>
</div>

<div className="card" style={{width: "18rem", backgroundColor: "var(--bs-dark)", color: "#fff"}}>
  <img src="https://raw.githubusercontent.com/abc-hi/projectimages/main/jobportal.png" alt="Project Screenshot" />
  <div className="card-body">
    <div style={{ fontSize: "22px" }}> <h5 className="card-title">Job Portal</h5></div>
    <div style={{ fontSize: "20px" }}><p className="card-text">It is a ecommerce full stack project and created with MERN stack.</p>
    <p className="card-text">Technologies used:javascript, reactjs, nodejs, mongoDB, CSS, expressjs, Bootstrap, HTML</p>
    <a href="https://revasjobportal.netlify.app/" className="btn btn-primary" style={{ backgroundColor: "#1b1b2a"}}>Link to Project</a>
  </div></div>
</div>



  <div className="card" style={{width: "18rem", backgroundColor: "var(--bs-dark)", color: "#fff"}}>
  <img src="https://raw.githubusercontent.com/abc-hi/projectimages/main/weatherappscreenshot.png" alt="Project Screenshot" />
  <div className="card-body">
    <div style={{ fontSize: "22px" }}> <h5 className="card-title">WeatherApp</h5></div>
   <div style={{ fontSize: "20px" }}><p className="card-text">   A responsive Weather App built as a beginner frontend developer project for learning and practice, based on a tutorial, with some of my own styling customizations.</p>
    <p className="card-text">Technologies used:  reactjs, javascript, tailwind CSS, HTML</p>
    <a href="https://revasweatherapplication.netlify.app" className="btn btn-primary" style={{ backgroundColor: "#1b1b2a"}}>Link to Project</a>
  </div></div> 
</div>


  <div className="card" style={{width: "18rem", backgroundColor: "var(--bs-dark)", color: "#fff"}}>
  <img src="https://raw.githubusercontent.com/abc-hi/projectimages/main/chatbot_screenshot.png" alt="Project Screenshot" />
  <div className="card-body">
    <div style={{ fontSize: "22px" }}> <h5 className="card-title">RAG Based career Assistant Chatbot</h5></div>
    <div style={{ fontSize: "20px" }}><p className="card-text"> Developed a RAG-based AI Career Assistant Chatbot using FAISS, embeddings, and LLM integration to suggest job roles based on user skills.</p>
    <p className="card-text"> Built with FastAPI and Streamlit, with backend exposed via ngrok for real-time connectivity and testing.</p>
    {/* <a href="https://revasweatherapplication.netlify.app" className="btn btn-primary" style={{ backgroundColor: "#1b1b2a"}}>Link to Project</a> */}
  </div></div>
</div>





</div>

</div></div>


    );
};

export default Projects;