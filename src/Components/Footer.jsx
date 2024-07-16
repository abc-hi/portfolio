import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // const color = '#2c3e50'; // Define a single color for both parts

//to get svg as background
    
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#2c3e50" fill-opacity="0.5" d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>`


const encodedSvg = `data:image/svg+xml;base64,${btoa(svg)}`;


    const handleCall =()=>{
window.location.href="callto:8667661671";
}
const handleLinkedin=()=>{
    window.location.href = "https://www.linkedin.com/in/revathi-mohan-553b9b259";

}
const handleEmail=()=>{
    window.location.href = "mailto:revathimohancse@gmail.com";

}
const handleWhatsapp =()=>{
    window.location.href="https://wa.me/8667661671";
}
    
    return (

       


    <footer style={{ 
        backgroundColor: '#212529', // Dark theme background colorof upper part pf wave

            backgroundImage: `url(${encodedSvg})`, 
            backgroundSize: 'cover', 
            color: 'white', 
            textAlign: 'center', 
            padding: '70px 0' 
        }}> 

            <div className="container text-center " >
                <h5 className="mb-3">Revathi Mohan</h5>
                <div className="d-flex justify-content-center">
                    <Link to="/About" className="text-white mx-2">About</Link>
                    <Link to="/Skills" className="text-white mx-2">Skills</Link>
                    <Link to="/Projects" className="text-white mx-2">Projects</Link>
                    <Link to="/Education" className="text-white mx-2">Education</Link>
                </div><br />
                <div>
              <img src="https://www.svgrepo.com/show/521544/call-receive.svg"  onClick={handleCall} style={{maxWidth:"1.2rem", maxHeight:"1.2rem", background: "white"}}/> &nbsp; &nbsp; &nbsp; &nbsp;
                <a href="#" className="card-link" onClick={handleLinkedin} style={{color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a> &nbsp; &nbsp; &nbsp; &nbsp;
<a href="#" className="card-link" onClick={handleEmail} style={{color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
 </svg></a>&nbsp; &nbsp; &nbsp; &nbsp;
 <a href="#" className="card-link" onClick={handleWhatsapp} style={{color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
   <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
 </svg></a>&nbsp; &nbsp; &nbsp; &nbsp;
                </div>
            </div>

            <div><h5 className="mb-3 py-3 container text-center">Elevating the digial experience !</h5></div>



          

            </footer>)}
            export default Footer;












