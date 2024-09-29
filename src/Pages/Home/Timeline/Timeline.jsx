
import { useEffect } from 'react';
import { FaBook, FaSchool, FaStar, FaSuitcase, FaUniversity } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Timeline = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div id='education' className="mt-32">
            <h2 data-aos="fade-up" className='text-4xl font-extrabold text-cyan-400 text-center mb-16'>MY JOURNEY</h2>
            <div className='mx-2'>
                <VerticalTimeline className='font-bold'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2022 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaUniversity />}
                    >
                        <h3 className="vertical-timeline-element-title">Pursuing Bsc. on Electrical and Computer Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle font-normal text-sm">Rajshahi University Of Engineering & Technology</h4>
                        <p>
                            Rajshahi, Bangladesh
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white"
                        date="2022 - 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaSuitcase/>}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Teacher</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black text-sm font-normal">MOJARU</h4>
                        <p className='text-black font-normal text-xs'>
                            Teaching Math in an online based coaching center, Mojaru.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white"
                        date="2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Passed HSC</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Rajshahi Cadet College</h4>
                        <p className='text-black'>
                            Result: GPA 5.00
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white"
                        date="2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBook/>}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Passed SSC</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Rajshahi Cadet College</h4>
                        <p className='text-black'>
                            Result GPA 5.00
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education text-white"
                        date="2014 - 2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaSchool/>}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Rajshahi Cadet College</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Rajshahi, Bangladesh</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaStar />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;