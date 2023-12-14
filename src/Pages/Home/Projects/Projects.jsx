
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

    return (
        <div>
            <div className='flex gap-16 justify-center flex-row-reverse'>
                <div className='flex flex-col items-center'>
                    <div
                        className="w-96 h-96 border border-gray-300 relative overflow-hidden"
                        data-aos="fade-up"
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={handleMouseEnter(containerRef1)}
                        onMouseLeave={handleMouseLeave(containerRef1)}
                        ref={containerRef1}
                    >
                        <img
                            src={nanonest}
                            alt="Scrollable Image 1"
                            className="w-full h-auto"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <a href=""><button className="btn btn-outline mt-7 text-yellow-400">
                            LIVE LINK <FaLink></FaLink>
                        </button></a>
                        <a href=''><button className="btn btn-outline mt-7 text-red-800">
                            CLIENT SIDE <FaGithub></FaGithub>
                        </button></a>
                        <a href=""><button className="btn btn-outline mt-7 text-cyan-500">
                            SERVER SIDE <FaGithub></FaGithub>
                        </button></a>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div
                        className="w-96 h-96 border border-gray-300 relative overflow-hidden"
                        data-aos="fade-up"
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={handleMouseEnter(containerRef2)}
                        onMouseLeave={handleMouseLeave(containerRef2)}
                        ref={containerRef2}
                    >
                        <img
                            src={flavor}
                            alt="Scrollable Image 2"
                            className="w-full h-auto"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <a href=""><button className="btn btn-outline mt-7 text-yellow-400">
                            LIVE LINK <FaLink></FaLink>
                        </button></a>
                        <a href=''><button className="btn btn-outline mt-7 text-red-800">
                            CLIENT SIDE <FaGithub></FaGithub>
                        </button></a>
                        <a href=""><button className="btn btn-outline mt-7 text-cyan-500">
                            SERVER SIDE <FaGithub></FaGithub>
                        </button></a>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div
                        className="w-96 h-96 border border-gray-300 relative overflow-hidden"
                        data-aos="fade-up"
                        style={{ overflow: 'hidden' }}
                        onMouseEnter={handleMouseEnter(containerRef3)}
                        onMouseLeave={handleMouseLeave(containerRef3)}
                        ref={containerRef3}
                    >
                        <img
                            src={contestopia}
                            alt="Scrollable Image 3"
                            className="w-full h-auto"
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <a href=""><button className="btn btn-outline mt-7 text-yellow-400">
                            LIVE LINK <FaLink></FaLink>
                        </button></a>
                        <a href=''><button className="btn btn-outline mt-7 text-red-800">
                            CLIENT SIDE <FaGithub></FaGithub>
                        </button></a>
                        <a href=""><button className="btn btn-outline mt-7 text-cyan-500">
                            SERVER SIDE <FaGithub></FaGithub>
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
