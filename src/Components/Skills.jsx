// //cards inside cards added here

// import React from 'react';
// import { useEffect } from 'react';

// const Skills = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
//     }, []);
//     return (
//       // tech skills container start
//       <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)'}}>
//         <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Skills</h5> {/* Use class for styling */}

//             <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>

//             <div className="card mx-auto" data-bs-theme="dark" style={{width: "42rem", height:"87vh"}}>
              
//             <div className="card-body">

//     {/* <h5 className="card-title">Card title</h5> */}
//     {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    
//     <div className="row">
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>

//     <div className="card">
//       <div className="card-body">
        
//       <svg width="25" height="25" viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg">
//     <rect width="630" height="630" fill="#f7df1e"/>
//     <path d="M423 492c13 22 27 40 56 40 23 0 38-11 38-26 0-18-15-24-40-34l-14-6c-40-17-66-39-66-85 0-42 32-74 82-74 36 0 62 13 80 45l-43 28c-10-18-21-25-37-25-17 0-28 11-28 25 0 18 11 24 36 35l14 6c47 20 72 41 72 87 0 50-39 78-92 78-51 0-84-24-100-55m-209 5c10 18 19 33 41 33 21 0 34-8 34-39V317h63v179c0 64-37 93-91 93-49 0-77-25-92-55" fill="#000"/>
// </svg>&nbsp;&nbsp;&nbsp;


//         <span className="card-title">Javascript(ES6+)</span>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <svg width="25" height="25" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
//     <g stroke="#61DAFB" strokeWidth="1" fill="none">
//         <ellipse rx="11" ry="4.2"/>
//         <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
//         <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
//     </g>
// </svg>&nbsp;&nbsp;
        
// <span className="card-title">ReactJS</span>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">

//       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
//   version="1.1" x="0px" y="0px" viewBox="0 0 250 250"
//   width="25" height="25" xml:space="preserve">
//  <g id="mongodb-leaf">
//   <path id="mongodb-leaf-stem" fill="#A6A385" d="m132.118576,245.311905l-6.359024,-2.172424c0,0 0.776367,-32.416153 -10.856194,-34.742371c-7.755051,-8.99585 1.240746,-381.551559 29.158333,-1.240768c0,0 -9.615448,4.807755 -11.322021,13.02858c-1.861847,8.065567 -0.621094,25.126984 -0.621094,25.126984l0,0l0,0z"/>
//   <path id="mongodb-leaf-right" fill="#499D4A" d="m133.219955,217.975906c0,0 62.153046,-34.939911 43.96405,-116.754906c-12.562012,-55.3708 -42.188004,-73.5177 -45.444,-80.497801c-3.567001,-4.963 -6.980003,-13.64824 -6.980003,-13.64824l2.326996,154.015036c0,0.156006 -6.245499,51.043503 6.008507,56.782501"/>
//   <path id="mongodb-leaf-left" fill="#58AA50" d="m122.50312,215.996826c0,0 -52.269646,-35.674057 -49.167053,-98.489357c2.945869,-62.816769 39.86071,-93.681702 46.994659,-99.265772c4.6539,-4.962999 4.809174,-6.824864 5.119713,-11.787839c3.256439,6.980127 2.63678,104.384009 3.101166,115.86132c1.396027,44.204063 -2.481499,85.306969 -6.048485,93.681648l0,0l0,0z"/>
//  </g>
// </svg>



// <span className="card-title">MongoDB</span>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
  
// </div><br /><br /><br />

// <div className="row">
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.stimulsoft.com/images/blocks/integration/node-js.svg" alt="Node.js Icon"style={{width: "5rem", height:" 5vh"}}/> NodeJS</span>
//           <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg" style={{width: "6rem", height:" 6vh"}}/>SQL</span>
//       <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span style={{ display: "inline-flex", alignItems: "center" }}>
//         <img 
//           src="https://www.svgrepo.com/show/226111/html-files-and-folders.svg" 
//           style={{ width: "6rem", height: "6vh", marginRight: "0.1rem", verticalAlign: "middle" }} 
//           alt="HTML Logo"
//         />
//         <span style={{ margin: 0, padding: 0 }}>html5</span>
//       </span>


//         {/* <span><h5 className="card-title"></h5></span> */}
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
  
// </div><br /><br /><br />


// <div className="row">
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span ><img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" style={{width: "5rem", height:" 5vh"}}/><span style={{  marginLeft:"1px" }}>Bootstrap</span> </span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>

//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://www.svgrepo.com/show/226144/css.svg" alt="CSS Logo" style={{width: "5rem" , height: "5vh"}}/>css3
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
  
  
// <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//   <img
//   src="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-icon-svg-download-png-9200748.png?f=webp&w=256"
//   alt="Express.js"
//   style={{ width: "4rem", height: "5vh" }}
// /> ExpressJS
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div><br /><br /><br /><br />

//  <div className="row">
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img
//   src="data:image/png;base64,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"
//   alt="Phython.js"
//   style={{ width: "2rem", height: "3.5vh" }}
// /> Phython(basics)
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>

//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="data:image/png;base64,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"
//   alt="Dataprocessing"
//   style={{ width: "2rem", height: "3.5vh" }}/> Data Processing
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div><br /><br /><br /><br /><br /><br />

//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 1vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/machine-learning-icon-svg-download-png-1649561.png?f=webp&w=256"
//   alt="MachineLearning"
//   style={{ width: "2rem", height: "3.5vh" }}/> Machine Learning
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//     {/* streamlit */}
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://img.icons8.com/?size=100&id=Rffi8qeb2fK5&format=png&color=000000"
//   alt="streamlit"
//   style={{ width: "2rem", height: "3.5vh" }}/> StreamLit
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>

//   {/* fast api */}
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
//   style={{ width: "3rem", height: "3.5vh" }}/>Fast API
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>


// {/* faiss */}
// <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://cdn.simpleicons.org/meta"
//   style={{ width: "3rem", height: "3.5vh" }}/>Vector database (FAISS)
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
// <br /><br /><br /><br />
// {/* ollama */}
// <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqll7Uwac-FdwrNdvJKuE3C-a7AFrb5FBNLg&s"
//   style={{ width: "2rem", height: "3.5vh" }}/> LLM Interation (llama3)
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>

//   {/* sentence transformer */}
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "16rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <img src="https://cdn.simpleicons.org/huggingface"
//   style={{ width: "2rem", height: "3.5vh" }}/> Sentence Transformer (all-MiniLM-L6-v2)
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" class="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>

//     </div>  
// </div>
//  </div>
// </div><br /><br />

// {/* tool skill container start */}

// <div className="card mx-auto" data-bs-theme="dark" style={{width: "40rem", height:"48vh"}}>
//   <div className="card-body">

// <div className="mx-auto">

//   <div className="row"><br /><br />

// <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.svgrepo.com/show/439173/git.svg" style={{width: "5rem" , height: "5vh"}}/>Git</span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
  
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.svgrepo.com/show/475654/github-color.svg" style={{width: "5rem" , height: "5vh"}}/>Git Hub</span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.svgrepo.com/show/374174/vscode-insiders.svg" style={{width: "5rem" , height: "5vh"}}/>VS Code</span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>
//   </div><br /><br />

//   <div className="row">
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.svgrepo.com/show/331495/netlify.svg" style={{width: "5rem" , height: "2.5vh"}}/>Netlify</span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         <a href="#" className="btn btn-primary"></a>
//       </div>
//     </div>
//   </div>
 
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
//       <span><img src="https://www.svgrepo.com/show/354202/postman-icon.svg" style={{width: "5rem" , height: "5vh"}}/>Postman</span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div>


//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
// <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//   <img
//   src="https://www.svgrepo.com/show/130725/drag.svg"
//   alt="Render Logo"
//   style={{ width: "4rem", height: "auto" }}
// />
//   Render
// </span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div><br /><br /><br /><br /><br />

//   {/* ngrok */}

//     <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
// <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//   <img
//   src="https://avatars.githubusercontent.com/u/10625446?s=280&v=4"
//   alt="ngrok Logo"
//   style={{ width: "4rem", height: "auto" }}
// />
//   ngrok
// </span>
//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div><br /><br /><br /><br /><br />

// {/* streamlit cloud */}
//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
//     <div className="card">
//       <div className="card-body">
// <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//   <img
//   src="https://cdn.simpleicons.org/cloudflare"
//   alt="streamlit cloud"
//   style={{ width: "4rem", height: "auto" }}
// />
//   Streamlit Cloud
// </span>

//         <h5 className="card-title"></h5>
//         <p className="card-text"></p>
//         {/* <a href="#" className="btn btn-primary"></a> */}
//       </div>
//     </div>
//   </div><br /><br /><br /><br /><br />

//   <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>

//     </div>
//       </div>
//   </div>
   
//   </div>
//            </div>
// </div>
          
//         </div>
        
//     );
// };

// export default Skills;





















// layout fix
//cards inside cards added here

import React from 'react';
import { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
      // tech skills container start
      <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)'}}>
        <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Skills</h5> {/* Use class for styling */}

            <div className="page-container" style={{ backgroundColor: 'var(--bs-dark)', padding: "20px" }}>

            <div className="card mx-auto" data-bs-theme="dark" style={{width: "42rem"}}>
              
            <div className="card-body">

    {/* <h5 className="card-title">Card title</h5> */}
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    
    <div className="row g-3">
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
        
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
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
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
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">

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
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <span><img src="https://www.stimulsoft.com/images/blocks/integration/node-js.svg" alt="Node.js Icon"style={{width: "5rem", height:" 5vh"}}/> NodeJS</span>
          <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <span><img src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg" style={{width: "6rem", height:" 6vh"}}/>SQL</span>
      <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
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
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <span ><img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" style={{width: "5rem", height:" 5vh"}}/><span style={{  marginLeft:"1px" }}>Bootstrap</span> </span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://www.svgrepo.com/show/226144/css.svg" alt="CSS Logo" style={{width: "5rem" , height: "5vh"}}/>css3
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
  
  
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
  <img
  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-icon-svg-download-png-9200748.png?f=webp&w=256"
  alt="Express.js"
  style={{ width: "4rem", height: "5vh" }}
/> ExpressJS
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div><br /><br /><br /><br />

 <div className="row">
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img
  src="data:image/png;base64,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"
  alt="Phython.js"
  style={{ width: "2rem", height: "3.5vh" }}
/> Phython(basics)
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="data:image/png;base64,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"
  alt="Dataprocessing"
  style={{ width: "2rem", height: "3.5vh" }}/> Data Processing
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div><br /><br /><br /><br /><br /><br />

  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/machine-learning-icon-svg-download-png-1649561.png?f=webp&w=256"
  alt="MachineLearning"
  style={{ width: "2rem", height: "3.5vh" }}/> Machine Learning
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
    {/* streamlit */}
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://img.icons8.com/?size=100&id=Rffi8qeb2fK5&format=png&color=000000"
  alt="streamlit"
  style={{ width: "2rem", height: "3.5vh" }}/> StreamLit
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>

  {/* fast api */}
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
  style={{ width: "3rem", height: "3.5vh" }}/>Fast API
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>


{/* faiss */}
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://cdn.simpleicons.org/meta"
  style={{ width: "3rem", height: "3.5vh" }}/>Vector database (FAISS)
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>
<br /><br /><br /><br />
{/* ollama */}
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqll7Uwac-FdwrNdvJKuE3C-a7AFrb5FBNLg&s"
  style={{ width: "2rem", height: "3.5vh" }}/> LLM Interation (llama3)
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" class="btn btn-primary"></a> */}
      </div>
    </div>
  </div>

  {/* sentence transformer */}
  <div className="col-12 col-sm-6 col-md-4 d-flex">
    <div className="card w-100 h-100" style={{ minHeight: "70px" }}>
          <div className="card-body p-2 d-flex align-items-center gap-2">
      <img src="https://cdn.simpleicons.org/huggingface"
  style={{ width: "2rem", height: "3.5vh" }}/> Sentence Transformer (all-MiniLM-L6-v2)
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

{/* tool skill container start */}

<div className="card mx-auto" data-bs-theme="dark" style={{width: "40rem", height:"48vh"}}>
  <div className="card-body">

<div className="mx-auto">

  <div className="row"><br /><br />

<div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
      <span><img src="https://www.svgrepo.com/show/439173/git.svg" style={{width: "5rem" , height: "5vh"}}/>Git</span>

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
  </div><br /><br /><br /><br /><br />

  {/* ngrok */}

    <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img
  src="https://avatars.githubusercontent.com/u/10625446?s=280&v=4"
  alt="ngrok Logo"
  style={{ width: "4rem", height: "auto" }}
/>
  ngrok
</span>
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div><br /><br /><br /><br /><br />

{/* streamlit cloud */}
  <div className="col-sm-6 mb-3 mb-sm-0"style={{width: "13rem", height:" 2vh"}}>
    <div className="card">
      <div className="card-body">
<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img
  src="https://cdn.simpleicons.org/cloudflare"
  alt="streamlit cloud"
  style={{ width: "4rem", height: "auto" }}
/>
  Streamlit Cloud
</span>

        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        {/* <a href="#" className="btn btn-primary"></a> */}
      </div>
    </div>
  </div><br /><br /><br /><br /><br />

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