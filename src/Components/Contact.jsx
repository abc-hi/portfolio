import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })  
const[response,setResponse]=useState(null)

  
// The event object e contains information about the event that was triggered. In this case, it contains information about the input element that changed.

const handleChange =(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

  const handlesubmit=async(e)=>{
    e.preventDefault();

    // await axios.post("http://localhost:4000/api/send",formData )
    await axios.post("https://portfoliobackend-1-huzo.onrender.com",formData )
      
   
    .then(res=>setResponse(res.data))
    .catch(err=>{
      console.log(err)
    })
  }
    return (
      <form onSubmit={handlesubmit}>
        <div className="container-fluid bg-dark text-light" style={{ minHeight: "100vh" }}>
        <h5 className="skills-title" style={{color:"white",textAlign:"center"}}>Contact</h5> {/* Use class for styling */}

<br />
        <div className='container' data-bs-theme="dark">
                    <div className="card border-light mb-3 mx-auto" style={{ maxWidth: "24rem"}}>

                <div className="mb-3">
                <label className="text-center d-block mb-4">Contact Me</label>
               
                <input type="text" className="form-control" style={{ maxWidth: "20rem"}}id="exampleFormControlInput1" placeholder="Enter your name" name="name" value={formData.value} onChange={handleChange} required /><br />
  <input type="email" className="form-control" style={{ maxWidth: "20rem"}} id="exampleFormControlInput1"  placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange}required /><br />
  <input type="text" className="form-control"  style={{ maxWidth: "20rem"}} id="exampleFormControlInput1" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange}required />


</div>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
  <button type='submit' className="btn btn-primary d-block mx-auto" >send</button>
</div></div>
        </div></div></form>
    );
};

export default Contact;







