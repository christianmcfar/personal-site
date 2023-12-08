import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { FaGithub, FaLinkedinIn, FaMapMarkedAlt } from "react-icons/fa";
import Resume from "./Christian McFarland - Resume.pdf"
import { TypeAnimation } from 'react-type-animation'

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    });

    return (
        <div className="App">
            <nav className='Nav'>
                {/* <a href={Resume} target="_blank" rel="noopener noreferrer" className='Nav-item'>Resume</a> */}
                <a href="https://github.com/christianmcfar" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='Nav-item' size={25} />
                </a>
                <a href="https://www.linkedin.com/in/christian-mcfarland/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className='Nav-item' size={25} />
                </a>
                <a className="tooltip">
                    <FaMapMarkedAlt className='Nav-item' size={25} />
                    <span class="tooltiptext">Coming soon</span>
                </a>
            </nav>
            {init && <Particles options={particlesOptions} />}
            <header className="App-header">
                <h1 className='Title-align'>
                    Christian McFarland
                </h1>
                <TypeAnimation
                    className='Title-align'
                    sequence={[
                        'Software Engineer',
                        4000,
                        'Front End Developer',
                        4000,
                        'Motorcycle Instructor',
                        2000,
                        'Mobile App Devloper',
                        3000,
                        'Video Editor',
                        2000,
                        'Hiking Enthusiast',
                        3000,
                        'Software Developer',
                        4000,
                        'Marathon Runner',
                        2000,
                        'Fantasy Football Champion',
                        1000,
                        'Scuba Diver',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: 'larger', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <p className='Title-align'>
                    {/* This is my personal portfolio website/map demo
                    which contains my resume and some social media links, as well as some other personal projects as I build them. */}

                    {/* The map inspiration for the map portion is my love for traveling, maps, geography, and just the world in general.

                    It's a simple site created using React, Mapbox API for mapping/navigation controls, and Base UI for some visual components and styling. */}

                    {/* My personal passions include advancing technology by creating software that offers an intuitive user interface. Designs optimized for efficient and
                    aesthetic experience. Creative influences are rooted in quiet moments in nature and exploring the unknown through travel.
                    Support environmental conservation and research efforts. Strong experience facilitating collaborative team projects to reach
                    a common goal. Breaking down difficult concepts as an instructor - helping others succeed and become the best versions of themselves. */}
                </p>
                <p className="Title-line">
                    Check out my <a
                        className="App-link"
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>resume</b>
                    </a> here!
                </p>
                
            </header>
            {/* <body className="App-body">
                <p className='Title-align'>
                    This is my personal portfolio website/map demo
                    which contains my resume and some social media links, as well as some other personal projects as I build them.

                    The map inspiration for the map portion is my love for traveling, maps, geography, and just the world in general.

                    It's a simple site created using React, Mapbox API for mapping/navigation controls, and Base UI for some visual components and styling.

                    My personal passions include advancing technology by creating software that offers an intuitive user interface. Designs optimized for efficient and
                    aesthetic experience. Creative influences are rooted in quiet moments in nature and exploring the unknown through travel.
                    Support environmental conservation and research efforts. Strong experience facilitating collaborative team projects to reach
                    a common goal. Breaking down difficult concepts as an instructor - helping others succeed and become the best versions of themselves.
                </p>
            </body> */}
        </div>
    );
}

export default App;
