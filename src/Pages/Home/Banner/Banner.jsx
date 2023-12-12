import { useEffect, useState } from 'react';
import banner from '../../../assets/banner1.jpg';
import profile from '../../../assets/edit2.jpeg';
import { motion } from "framer-motion";
const Banner = () => {
    const words = ['Developer', 'Coder', 'Designer'];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1800);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='flex justify-around items-center w-full'>
                <div className='w-[800px]'>
                    <h2 className="text-7xl text-white font-extrabold uppercase">Hi, I am Galib!</h2>
                    <h2 className="text-7xl text-white font-extrabold uppercase">
                        Dynamic{' '}
                        <motion.span
                            className='text-cyan-400'
                            key={words[index]}
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            {words[index]}
                        </motion.span>
                    </h2>
                </div>
                <div className="avatar">
                    <div className="w-96 mask mask-squircle">
                        <img src={profile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;