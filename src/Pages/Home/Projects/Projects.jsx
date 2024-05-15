
import nanonest from '../../../assets/nanonest.png';
import contestopia from '../../../assets/contestopia.png'
import flavor from '../../../assets/flavor.png'

import React, { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);
    const containerRef3 = useRef(null);
    let scrollIntervalToBottom;
    let scrollIntervalToTop;

    const handleMouseEnter = (containerRef) => () => {
        clearInterval(scrollIntervalToTop);

        if (containerRef.current) {
            scrollIntervalToBottom = setInterval(() => {
                containerRef.current.scrollTop += 1;
                if (
                    containerRef.current.scrollTop >=
                    containerRef.current.scrollHeight - containerRef.current.clientHeight
                ) {
                    clearInterval(scrollIntervalToBottom);
                }
            }, 4);
        }
    };

    const handleMouseLeave = (containerRef) => () => {
        clearInterval(scrollIntervalToBottom);

        if (containerRef.current) {
            scrollIntervalToTop = setInterval(() => {
                containerRef.current.scrollTop -= 1;
                if (containerRef.current.scrollTop <= 0) {
                    clearInterval(scrollIntervalToTop);
                }
            }, 1);
        }
    };

    const handleResetScroll = (containerRef) => () => {
        clearInterval(scrollIntervalToTop);
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    };



    return (
        <div id='projects' className='mt-20'>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <h2 className='text-4xl font-extrabold text-center text-cyan-400 mb-5'>MY PROJECTS</h2>
                <p className='text-center font-semibold text-cyan-100 mb-20'>I have developed a series of dynamic web applications leveraging the MERN stack, showcasing <br /> my proficiency in MongoDB, Express.js, React, and Node.js. Using technologies like <br /> Tailwind CSS for sleek designs, Axios for efficient API requests, and Tanstack Query for seamless data management, <br /> these projects exhibit my expertise in modern web development practices.</p>
            </div>
            <div className='flex gap-16 justify-center flex-col md:flex-row'>
                <div className='flex flex-col items-center'>
                    <div
                        className="md:w-96 mx-3 md:mx-0 h-96 border border-gray-300 relative overflow-hidden rounded-xl"
                        data-aos="fade-up"
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={handleMouseEnter(containerRef1)}
                        onMouseLeave={handleMouseLeave(containerRef1)}
                        onClick={handleResetScroll(containerRef1)}
                        ref={containerRef1}
                    >
                        <img
                            src={contestopia}
                            alt="Scrollable Image 1"
                            className="w-full h-auto"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>
                    <div className='flex gap-2 mx-2 md:mx-0' data-aos="fade-up"
                        data-aos-duration="3000">
                        <a href="https://contestopia.web.app/"  target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-yellow-400">
                            LIVE LINK <FaLink></FaLink>
                        </button></a>
                        <a href='https://github.com/Galib-23/Contestopia-Client' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-red-800">
                            FRONTEND <FaGithub></FaGithub>
                        </button></a>
                        <a href="https://github.com/Galib-23/Contestopia-Server" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-cyan-500">
                            BACKEND <FaGithub></FaGithub>
                        </button></a>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div
                        className="md:w-96 mx-3 md:mx-0 h-96 border border-gray-300 relative overflow-hidden rounded-xl"
                        data-aos="fade-up"
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={handleMouseEnter(containerRef2)}
                        onMouseLeave={handleMouseLeave(containerRef2)}
                        onClick={handleResetScroll(containerRef2)}
                        ref={containerRef2}
                    >
                        <img
                            src={flavor}
                            alt="Scrollable Image 2"
                            className="w-full h-auto"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>
                    <div className='flex gap-2 mx-2 md:mx-0' data-aos="fade-up"
                        data-aos-duration="3000">
                        <a href="https://flavor-fusion-2538c.web.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-yellow-400">
                            LIVE LINK <FaLink></FaLink>
                        </button></a>
                        <a href='https://github.com/Galib-23/Flavor-Fusion-Client' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-red-800">
                            FRONTEND <FaGithub></FaGithub>
                        </button></a>
                        <a href="https://github.com/Galib-23/Flavor-Fusion-Server" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-cyan-500">
                            BACKEND <FaGithub></FaGithub>
                        </button></a>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div
                        className="md:w-96 mx-3 md:mx-0 h-96 border border-gray-300 relative overflow-hidden rounded-xl"
                        data-aos="fade-up"
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={handleMouseEnter(containerRef3)}
                        onMouseLeave={handleMouseLeave(containerRef3)}
                        onClick={handleResetScroll(containerRef3)}
                        ref={containerRef3}
                    >
                        <img
                            src={nanonest}
                            alt="Scrollable Image 3"
                            className="w-full h-auto"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>
                    <div className='flex gap-2 mx-2 md:mx-0' data-aos="fade-up">
                        <a href="https://nano-nest-abad6.web.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-yellow-400">
                            LIVE LINK <FaLink></FaLink>
                        </button></a>
                        <a href='https://github.com/Galib-23/Nano-Nest-Client' target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-red-800">
                            FRONTEND <FaGithub></FaGithub>
                        </button></a>
                        <a href="https://github.com/Galib-23/Nano-Nest-Server" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline mt-7 text-cyan-500">
                            BACKEND <FaGithub></FaGithub>
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
