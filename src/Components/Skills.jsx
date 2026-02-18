//cards inside cards added here

import React from 'react';
import { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
      <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)'}}>
        <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Skills</h5> {/* Use class for styling */}

            <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>

            <div className="card mx-auto" data-bs-theme="dark" style={{width: "40rem", height:"52vh"}}>
              
            <div className="card-body">

    {/* <h5 className="card-title">Card title</h5> */}
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
        
      <svg width="25" height="25" viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="630" height="630" fill="#f7df1e"/>
    <path d="M423 492c13 22 27 40 56 40 23 0 38-11 38-26 0-18-15-24-40-34l-14-6c-40-17-66-39-66-85 0-42 32-74 82-74 36 0 62 13 80 45l-43 28c-10-18-21-25-37-25-17 0-28 11-28 25 0 18 11 24 36 35l14 6c47 20 72 41 72 87 0 50-39 78-92 78-51 0-84-24-100-55m-209 5c10 18 19 33 41 33 21 0 34-8 34-39V317h63v179c0 64-37 93-91 93-49 0-77-25-92-55" fill="#000"/>
</svg>&nbsp;&nbsp;&nbsp;


        <span className="card-title">Javascript(ES6+)</span>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <svg width="25" height="25" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
</svg>&nbsp;&nbsp;
        
<span className="card-title">ReactJS</span>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1" x="0px" y="0px" viewBox="0 0 250 250"
  width="25" height="25" xml:space="preserve">
 <g id="mongodb-leaf">
  <path id="mongodb-leaf-stem" fill="#A6A385" d="m132.118576,245.311905l-6.359024,-2.172424c0,0 0.776367,-32.416153 -10.856194,-34.742371c-7.755051,-8.99585 1.240746,-381.551559 29.158333,-1.240768c0,0 -9.615448,4.807755 -11.322021,13.02858c-1.861847,8.065567 -0.621094,25.126984 -0.621094,25.126984l0,0l0,0z"/>
  <path id="mongodb-leaf-right" fill="#499D4A" d="m133.219955,217.975906c0,0 62.153046,-34.939911 43.96405,-116.754906c-12.562012,-55.3708 -42.188004,-73.5177 -45.444,-80.497801c-3.567001,-4.963 -6.980003,-13.64824 -6.980003,-13.64824l2.326996,154.015036c0,0.156006 -6.245499,51.043503 6.008507,56.782501"/>
  <path id="mongodb-leaf-left" fill="#58AA50" d="m122.50312,215.996826c0,0 -52.269646,-35.674057 -49.167053,-98.489357c2.945869,-62.816769 39.86071,-93.681702 46.994659,-99.265772c4.6539,-4.962999 4.809174,-6.824864 5.119713,-11.787839c3.256439,6.980127 2.63678,104.384009 3.101166,115.86132c1.396027,44.204063 -2.481499,85.306969 -6.048485,93.681648l0,0l0,0z"/>
 </g>
</svg>



<span className="card-title">MongoDB</span>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  
</div><br /><br /><br />

<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.stimulsoft.com/images/blocks/integration/node-js.svg" alt="Node.js Icon"style={{width: "5rem", height:" 5vh"}}/> NodeJS</span>
          <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg" style={{width: "6rem", height:" 6vh"}}/>SQL</span>
      <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span style={{ display: "inline-flex", alignItems: "center" }}>
        <img 
          src="https://www.svgrepo.com/show/226111/html-files-and-folders.svg" 
          style={{ width: "6rem", height: "6vh", marginRight: "0.1rem", verticalAlign: "middle" }} 
          alt="HTML Logo"
        />
        <span style={{ margin: 0, padding: 0 }}>html5</span>
      </span>


        {/* <span><h5 className="card-title"></h5></span> */}
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  
</div><br /><br /><br />


<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span ><img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" style={{width: "5rem", height:" 5vh"}}/><span style={{  marginLeft:"1px" }}>Bootstrap</span> </span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>

  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <img src="https://www.svgrepo.com/show/226144/css.svg" alt="CSS Logo" style={{width: "5rem" , height: "5vh"}}/>css3
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  
  

<div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
  <img
  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-icon-svg-download-png-9200748.png?f=webp&w=256"
  alt="Express.js"
  style={{ width: "4rem", height: "auto" }}
/>ExpressJS
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div><br /><br /><br /><br /><br />

<div className="row">
<div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
  <img
  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/python-language-icon-svg-download-png-3524270.png?f=webp&w=256"
  alt="Express.js"
  style={{ width: "4rem", height: "auto" }}
/>Phython(basics)
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
  <img
  src="https://cdn.iconscout.com/icon/free/png-512/free-data-management-icon-svg-download-png-2175200.png?f=webp&w=256"
  alt="Express.js"
  style={{ width: "2rem", height: "auto" }}
/>Data Processing
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  
  

  
  
  
  </div>




</div>

 </div>
</div><br /><br />







<div className="card mx-auto" data-bs-theme="dark" style={{width: "40rem", height:"20vh"}}>
  <div className="card-body">

<div className="mx-auto">

  <div className="row"><br /><br />








































<div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/439173/git.svg" style={{width: "5rem" , height: "5vh"}}/>Git Hub</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>



  
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/475654/github-color.svg" style={{width: "5rem" , height: "5vh"}}/>Git Hub</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/374174/vscode-insiders.svg" style={{width: "5rem" , height: "5vh"}}/>VS Code</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  </div><br /><br />


  <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/331495/netlify.svg" style={{width: "5rem" , height: "2.5vh"}}/>Netlify</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  </div>
 
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/354202/postman-icon.svg" style={{width: "5rem" , height: "5vh"}}/>Postman</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>


  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img
  src="https://www.svgrepo.com/show/130725/drag.svg"
  alt="Render Logo"
  style={{ width: "4rem", height: "auto" }}
/>
  Render
</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>




  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>


    
    
  </div>
  
  
  </div>
  </div>

  

  
  
  </div>
    
    
  
  </div>
</div>

            
        </div>
        
    );
};

export default Skills;