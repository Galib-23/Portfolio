import paint from '../../../assets/paint.png';
import collage from '../../../assets/collage.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Designs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div id='design' className='mt-40'>
            <h2 data-aos="fade-up" className='text-4xl font-extrabold text-cyan-400 text-center mb-4'>VECTOR ARTS</h2>
            <p data-aos="fade-up" className='text text-white text-center mb-16'>Whether crafting intricate illustrations using Inkspace <br /> versatile tools or meticulously editing videos to convey compelling narratives, my dedication to the <br /> craft ensures each project is a seamless blend of artistry and precision.</p>
            <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>
                <div data-aos="fade-left" className='flex flex-col items-center mt-6 md:mt-0'>
                    <img className='w-3/4 md:w-[500px] mx-4 md:mx-0' src={collage} alt="" />
                </div>
                <div data-aos="fade-right" className='flex flex-col items-center md:items-start text-center md:text-right'>
                    <img className='w-44' src={paint} alt="" />
                    <h2 className='mt-6 text-4xl font-extrabold text-cyan-400'>MY GRAPHICS DESIGNS</h2>
                    <p className='text mt-2 text-white'>
                        As a part-time graphic designer proficient in <br /> Inkspace  and a skilled video editor, I blend creativity <br /> with technical expertise to bring ideas to <br /> life. With a passion for visual storytelling, I <br /> harness the power of design to create <br /> captivating graphics and engaging video content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Designs;