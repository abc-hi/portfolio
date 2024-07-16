import React from 'react';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  //when I click on link in footer cursor moves to top of the page
    }, []);
    return (
        <div>
            <h1>pro comp</h1>
        </div>
    );
};

export default Projects;