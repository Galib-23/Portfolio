import ss1 from '../../../assets/ss1.jpeg';
import ss2 from '../../../assets/ss2.jpeg';
import ss3 from '../../../assets/ss3.jpeg';
import ss4 from '../../../assets/ss4.jpeg';
import ss5 from '../../../assets/ss5.jpeg';
import play from '../../../assets/play.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaGithub, FaPlay } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Featured = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div id='featured' className='mt-36'>
            <div data-aos="fade-down">
            <h2 className='text-4xl font-extrabold text-cyan-400 text-center mb-4'>MY APPS</h2>
            <p className='text-white text-center mb-16'>Proficient in Flutter and Dart, alongside a foundational understanding <br /> of Java, I bring a versatile skill set to mobile app development. <br /> As an experienced Flutter enthusiast, I excel in creating dynamic, cross-platform applications that prioritize <br /> both functionality and design.</p>
            </div>
            <div data-aos="fade-down-right" className='flex justify-evenly items-center flex-col md:flex-row'>
                <div className='flex flex-col items-center md:items-start'>
                    <img className='w-40 rounded-3xl' src={play} alt="" />
                    <a href="https://play.google.com/store/apps/details?id=com.aasadullahg.edumingle&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline text-green-600 mt-5'>LIVE ON GOOGLE PLAY<FaPlay></FaPlay></button></a>
                    <p className='text-xl mt-4 text-white text-center md:text-left'>
                    <span className='text-cyan-400'>EDU MINGLE</span>, a user-friendly mobile application <br /> designed to help students and parents find <br /> nearby qualified tutors quickly and <br /> easily.
                    </p>
                    <a href="https://github.com/Galib-23/tutor-finder-app" target="_blank" rel="noopener noreferrer"><button className='btn btn-sm btn-outline text-cyan-300 mt-5'>GITHUB LINK<FaGithub></FaGithub></button></a>
                </div>
                <div data-aos="fade-down-left" className='w-[400px] md:w-[550px] mt-7 md:mt-0 rounded-3xl'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 50,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false, 
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='w-80' src={ss1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-80' src={ss2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-80' src={ss3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-80' src={ss4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-80' src={ss5} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Featured;