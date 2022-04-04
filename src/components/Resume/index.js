import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <h3 className='title'>Resume</h3>
            <div className='downloadResume'>
                <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1gxT2KiNpODGV_tWd-IqBM4ZoAO11dEPF6P-5PEiMglg/edit?usp=sharing'>Download Resume</a>
            </div>
            <br />
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
        </section>
    )
}

export default Resume;