import React from 'react';
import { useEffect } from 'react';

const Education = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
        <div>
            
            <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>

            <div className="container" data-bs-theme="dark">
            <div className='color' data-bs-theme="dark">
            <div className="card border-light mb-3 mx-auto" style={{maxWidth: "48rem"}}>
  <h5 className="card-header mb-3 mx-auto">Selvam College of Technology</h5>
  <h5 className="card-title mb-3 mx-auto">Bachelor of Engineering - B.E, - Computer Science and Engineering</h5>
  <p className="card-title mb-3 mx-auto">2006 - 2010</p>
  <div className="card-body">
    <h5 className="card-title">Grade: 79%</h5>
    <p className="card-text">I hold a degree in Computer Science from Selvam College of Technology, where I developed a solid foundation in coding.

Continual learning is key to my growth. I actively participated and won certifications on seminar and in-plant training in leading technologies to stay ahead in an ever-evolving industry.</p>
  </div>
</div>
<div className="card border-light mb-3 mx-auto" style={{maxWidth: "48rem"}}>
  <h5 className="card-header mx-auto">Shri AAnjaneya Higher Secondary School</h5>
  <h5 className="card-title mx-auto">HSC</h5>
  <p className="card-title mb-3 mx-auto">2005 - 2006</p>


  <div className="card-body">
    <h5 className="card-title">Grade: 80%</h5>
    <p className="card-text">My schooling journey has been instrumental in shaping my approach to Computer Sciencem and Engineering, providing me with a solid foundation in Maths.My education equipped me with essential skills in Critical thinking, problem-solving, etc. that I now apply to logical problem solving.</p>
  </div>
</div>
<div className="card border-light mb-3 mx-auto" style={{maxWidth: "48rem"}}>
  <h5 className="card-header mx-auto">Municipal High School</h5>
  <h5 className="card-title mx-auto">SSLC</h5>
  <p className="card-title mb-3 mx-auto">2003 - 2004</p>


  <div className="card-body">
    <h5 className="card-title">Grade: 97%</h5>
    <p className="card-text">During my SSLC years, I consistently excelled in all the Subjects earning recognition of District Rank Holder.Beyond academics, I actively participated in Essay competitions, Speech competitions and waon certificats. I handeled the school leader position that enhanced my teamwork and leadership skills.</p>
  </div>
</div>

</div></div></div>

        </div>
    );
};

export default Education;