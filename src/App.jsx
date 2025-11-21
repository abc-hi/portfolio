import React from 'react';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Visionary from './Components/Visionary.jsx';
import WorkExperience from './Components/WorkExperience.jsx';


const App = () => {
  return (
    <div>
      
      <BrowserRouter >
      <Navbar />

      <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects/>} />

        <Route path="/Education" element={<Education />} />
        <Route path="/Visionary" element={<Visionary />}/>
                <Route path="/WorkExperience" element={<WorkExperience />}/>



        
        
        </Routes>

        <Contact />
        <ScrollToTop />
        < Footer />
        </BrowserRouter>
        
        
    </div>
    
  );
};

export default App;