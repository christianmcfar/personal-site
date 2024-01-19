import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { FaGithub, FaLinkedinIn, FaMapMarkedAlt } from "react-icons/fa";
import Resume from "./Christian McFarland - Resume.pdf";
import { TypeAnimation } from 'react-type-animation';
import { Analytics } from '@vercel/analytics/react';

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
            {init && <Particles options={particlesOptions} />}
            <body>
                <div className='wrapper'>
                    <section>
                        <nav className='Nav'>
                            <a href="https://github.com/christianmcfar" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='Nav-item' size={25} />
                            </a>
                            <a href="https://www.linkedin.com/in/christian-mcfarland/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className='Nav-item' size={25} />
                            </a>
                            <div className="tooltip">
                                <FaMapMarkedAlt className='Nav-item' size={25} />
                                <span class="tooltiptext">Map coming soon!</span>
                            </div>
                        </nav>
                        <div className='App-header'>
                            <h1 className='Title-align'>
                                Christian McFarland
                            </h1>
                            <TypeAnimation
                                className='Title-align'
                                sequence={[
                                    1000,
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
                                    500
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: 'xxx-large', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                    </section>
                    <section className="textSection">
                        <div className="content">
                            <h2>
                                Welcome to my personal website!
                            </h2>
                            <p>
                                Here you'll find my resume and some social media links, as well as some other personal 
                                projects as I build them. It's a simple site created using React, tsParticles for the background effects, some 
                                CSS for styling compements, and Vercel for deployment and hosting.
                            </p>
                        </div>
                    </section>
                    <section className="textSection">
                        <div className="content">
                            <h2>
                                Ikigai (生き甲斐 - 'reason for being')
                            </h2>
                            <p>
                                {/* Advancing technology by creating software that offers an intuitive user interface. Designs 
                                optimized for efficient and aesthetic experience. Creative influences are rooted in quiet moments in nature and exploring 
                                the unknown through travel. Strong experience facilitating collaborative team projects to reach a common goal. Breaking 
                                down difficult concepts as an instructor - helping others succeed and become the best versions of themselves. */}
                                My passion is crafting software that offers intuitive user interface. Driven to create designs 
                                optimized for efficient and aesthetic experiences, saving time and money. Facilitating collaborative 
                                team projects and quickly iterating to reach a common goal. Breaking down difficult 
                                concepts to help others succeed and learning as much as possible along the way.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className='App-header'>
                            <h2 className='Title-align'>
                                More coming soon!
                            </h2>
                            <p className="Title-line">
                                But for now, why not check out my <a
                                    className="App-link"
                                    href={Resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >resume</a>?
                            </p>
                        </div>
                    </section>
                </div>
                <Analytics />
            </body>
        </div>
    );
}

export default App;
