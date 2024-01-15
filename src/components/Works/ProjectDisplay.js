import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../../helpers/ProjectList';
import "../Works/ProjectDisplay.css"




function ProjectDisplay() {
    const{ id } = useParams();
    const project = projectList[id];
    return (
        <div className='project'> 
        
        </div>
    )
}
export default ProjectDisplay;