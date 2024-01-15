import React from 'react';
import ProjectItem from './ProjectItem';
import pr1 from '../../assets/portfolio-1.png'
import pr2 from '../../assets/portfolio-1.png'
import "./projects.css"

function Projects() {
    <div className='projects'>

        <h1>My personal Projects</h1>
        <div className='projectList'>
            <ProjectItem name="socila" image={pr1}/>
            <ProjectItem name="socila" image={pr2}/>
        </div>
    </div>
}

export default Projects;