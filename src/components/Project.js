import React from 'react';

//project component to use for each project featured on portfolio

const Project = (props) => {
    return (
        <div className="project" id={props.id}>
            <img src={props.src} alt={props.name} />
            <h4>{props.name}</h4>
            <p className="description">{props.description}</p>
        </div>        
    );
}

export default Project;