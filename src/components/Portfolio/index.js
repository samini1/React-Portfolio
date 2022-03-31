import React from 'react';
import projects from '../../seeds/projects.json'
import Project from '../Project';

function Portfolio() {   
    return ( 
        <section id = "portfolio">
            <h3 className='title'>Portfolio</h3>
            <div className='container'>
                {projects.map((projects) => (
                    <Project
                        id = {projects.id}
                        name = {projects.name}
                        description = {projects.description}
                        src = {projects.src}
                        github = {projects.github}
                        />
                ))}    
            </div>          
        </section>
        
    );
}

export default Portfolio;