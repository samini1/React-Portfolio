import React from 'react';

function About() {
    return(
        <section className='my-5 aboutme'>
            <container id="profile">
                <img src ="https://github.com/samini1/react-portfolio/blob/main/src/assets/img/prof.png?raw=true" alt="pic"></img>
                <h3> Hello, I am Syrous Amini.</h3>
            </container>
            
            <p className=''>I began learning how to build web pages for personal use on my own before pursuing a more robust education in development languages and practices.
            <br />
            <br />
                I am currently seeking a job as a full-stack developer while expanding my work base with continued efforts in personal and professional projects.
            </p>
        </section>
    );
}

export default About;