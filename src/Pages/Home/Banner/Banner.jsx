import { useEffect, useState } from 'react';
import banner from '../../../assets/banner1.jpg';
import profile from '../../../assets/edit2.jpeg';
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { IoPlayCircleSharp } from "react-icons/io5";
import Tilt from 'react-parallax-tilt';
const Banner = () => {
    const words = ['Developer', 'Coder', 'Designer'];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);
    return (
        <div className="relative">
            {/* Content inside the section */}
            <div className="absolute inset-0 z-10 flex items-center justify-evenly md:container mx-auto">
                <div className='w-1/2'>
                    <h2 className="text-5xl text-white font-extrabold uppercase">Hi, I am Galib!</h2>
                    <h2 className="text-5xl text-white font-extrabold uppercase">
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
                    <p className='text-white mt-5 text-lg'>With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on building robust, scalable, and efficient web applications that bring ideas to life. Whether it is creating interactive user interfaces or architecting seamless backend systems, I love the challenge of turning concepts into reality through code.</p>
                    <div className='flex gap-4'>
                        <button className="btn btn-accent btn-outline mt-6">DOWNLOAD CV
                            <IoMdDownload className='text-xl' />
                        </button>
                        <button className="btn btn-secondary btn-outline mt-6">WATCH VIDEO
                            <IoPlayCircleSharp className='text-xl' />
                        </button>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-[400px] rounded-3xl border-b-8 border-t-8 p-3 border-cyan-600">
                        <Tilt>
                        <img className='rounded-3xl' src={profile} />
                        </Tilt>
                    </div>
                </div>
            </div>

            {/* Background image with reduced opacity */}
            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', // 0.3 opacity for the background
                }}
            />
        </div>
    );
};

export default Banner;
