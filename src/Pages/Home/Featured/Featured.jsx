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

const Featured = () => {
    return (
        <div className='mt-36'>
            <h2 className='text-6xl font-extrabold text-cyan-400 text-center mb-4'>MY APPS</h2>
            <p className='text-xl font-semibold text-white text-center mb-16'>Proficient in Flutter and Dart, alongside a foundational understanding <br /> of Java, I bring a versatile skill set to mobile app development. <br /> As an experienced Flutter enthusiast, I excel in creating dynamic, cross-platform applications that prioritize <br /> both functionality and design.</p>
            <div className='flex justify-evenly items-center'>
                <div>
                    <div className=' border-y-4 py-4 border-cyan-400 w-1/2'>
                    <img className='w-60 rounded-3xl' src={play} alt="" />
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.aasadullahg.edumingle&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline text-green-600 btn-lg mt-5'>LIVE APP ON GOOGLE PLAY<FaPlay></FaPlay></button></a>
                    <p className='text-xl mt-4 text-white'>
                    <span className='text-cyan-400 font-semibold'>EDU MINGLE</span>, a user-friendly mobile application <br /> designed to help students and parents find <br /> nearby qualified tutors quickly and <br /> easily. Whether you need help with math, <br /> science, language, or any other subject, Edu <br /> Mingle connects you with local tutors <br /> who can provide the assistance you need.
                    </p>
                    <a href="https://github.com/Galib-23/tutor-finder-app" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline text-cyan-300 mt-5'>GITHUB LINK<FaGithub></FaGithub></button></a>
                </div>
                <div className='w-[850px] border-2 rounded-3xl'>
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