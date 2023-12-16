import { useEffect } from 'react';
import app1 from '../../../assets/app1.png'
import app2 from '../../../assets/app2.png'

import Aos from 'aos';
import 'aos/dist/aos.css';

const UiDesign = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className='mt-32'>
            <div data-aos="fade-down">
            <h2 className='text-4xl font-extrabold text-cyan-400 text-center mb-4'>UI DESIGNS</h2>
            <p className='text-white text-center mb-16'>As a part-time UI designer specializing in mobile app interfaces, <br /> I wield the Inkscape software to craft sleek and user-centric <br />vector UI designs. With a passion for creating seamless and visually appealing experiences, <br /> I meticulously design interfaces that seamlessly merge functionality with aesthetics.</p>
            </div>
            <div className='flex  justify-center gap-20'>
                <img data-aos="fade-up-right" className='w-60 rounded-3xl' src={app1} alt="" />
                <img data-aos="fade-up-left" className='w-60 rounded-3xl' src={app2} alt="" />
            </div>
        </div>
    );
};

export default UiDesign;