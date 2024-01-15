import React from 'react';
import './works.css';


import { projectList} from '../../helpers/ProjectList'
import ProjectItem from '../Projects/ProjectItem';
const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My portfolio</h2>
            <span className='worksDesc'>Below are the collection of my personal projects:</span>
            {/* <span className='worksDesc'>Click on each for more info</span> */}
           
            <div className='projects'>
            <h1>My projects</h1>
            <div className='projectList'>
                {projectList.map((project, idx) => {
                    return  <button className='btn'id = 'btn' onClick={() => {
                        document.getElementById(project.link).scrollIntoView({behavior:'smooth'});
                    }}><ProjectItem className="btnn" id={idx} name={project.name} /></button>
                    
                })}  
            </div>

            </div>

                {/* <a><img src={Portfolio1} alt="" className='worksImg'/></a>
                <a><img src={Portfolio2}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio3}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio4}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio5}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio6}  alt="" className='worksImg'/></a> */}

            <button className='workBtn'> Click on each project to learn more</button>
        </section>
    )
}
export default Works