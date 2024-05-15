import { useEffect, useState } from 'react';
import banner from '../../../assets/banner1.jpg';
import profile from '../../../assets/edit2.jpeg';
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { IoPlayCircleSharp } from "react-icons/io5";
import Tilt from 'react-parallax-tilt';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    //https://drive.google.com/file/d/1nESC9sA3vCql0HoKwxsVlymvBvw_Nd7r/view?usp=sharing
    // const googleDrivePDFLink = 'https://drive.google.com/uc?export=download&id=1nESC9sA3vCql0HoKwxsVlymvBvw_Nd7r';
    // const handleDownload = () => {
    //     const directDownloadLink = googleDrivePDFLink.replace('open', 'uc');
    //     const downloadAnchor = document.createElement('a');
    //     downloadAnchor.href = directDownloadLink;
    //     downloadAnchor.download = 'task2.pdf';
    //     downloadAnchor.click();
    // };

    const words = ['Developer', 'Coder', 'Designer'];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);
    return (

<div className="hero min-h-screen" id='banner' style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  <div className="inset-0 z-10 flex flex-col-reverse md:flex-row items-center justify-evenly ">
                <div data-aos="flip-left" className='md:w-1/2'>
                    <h2 className="text-center md:text-left text-lg md:text-3xl lg:text-5xl text-white font-extrabold uppercase">Hi, I am Galib!</h2>
                    <h2 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl text-white font-extrabold uppercase">
                        Dynamic{' '}
                        <motion.span
                            className='text-cyan-400'
                            key={words[index]}
                            initial={{ opacity: 0, y: '-50px' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '50px' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            {words[index]}
                        </motion.span>
                    </h2>
                    <p className='text-center md:text-left text-white mt-5 text-lg'>With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on building robust, scalable, and efficient web applications that bring ideas to life. <span className='hidden md:flex'>Whether it is creating interactive user interfaces or architecting seamless backend systems, I love the challenge of turning concepts into reality through code.</span></p>
                    <div className='flex flex-col md:flex-row mt-6 mb-5 md:mb-0 items-center md:items-start gap-4'>
                        <button className="btn btn-md md:btn-md btn-accent btn-outline md:mb-0">DOWNLOAD CV
                            <IoMdDownload className='text-xl' />
                        </button>
                        <a href="https://youtu.be/RusKXEW1Lb8?feature=shared"  target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-secondary btn-outline">WATCH VIDEO
                                <IoPlayCircleSharp className='text-xl' />
                            </button>
                        </a>
                    </div>
                </div>
                <div data-aos="flip-right">
                    <div className="mt-16 p-2 mb-6 md:mb-0 md:mt-0 rounded-3xl border-y-8 border-cyan-600">
                        <Tilt>
                            <img className='w-48 md:w-96 rounded-3xl' src={profile} />
                        </Tilt>
                    </div>
                </div>
            </div>
  </div>
</div>
            
    );
};

export default Banner;
