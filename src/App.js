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
        </div>
    );
}

export default App;
