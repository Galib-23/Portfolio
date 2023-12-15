
import { FaBook, FaSchool, FaStar, FaSuitcase, FaUniversity } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div className="mt-32">
            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaUniversity />}
                    >
                        <h3 className="vertical-timeline-element-title">Studying Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rajshahi, Bangladesh</h4>
                        <p>
                            Rajshahi University Of Engineering & Technology
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaSuitcase/>}
                    >
                        <h3 className="vertical-timeline-element-title">Teacher</h3>
                        <h4 className="vertical-timeline-element-subtitle">MOJARU</h4>
                        <p>
                            Teaching Math in an online based coaching center named Mojaru.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Passed Out HSC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rajshahi Cadet College</h4>
                        <p>
                            Result: GPA 5.00
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBook/>}
                    >
                        <h3 className="vertical-timeline-element-title">Passed SSC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rajshahi Cadet College</h4>
                        <p>
                            Result GPA 5.00
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaSchool/>}
                    >
                        <h3 className="vertical-timeline-element-title">Rajshahi Cadet College</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rajshahi, Bangladesh</h4>
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