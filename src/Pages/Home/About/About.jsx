import aboutbg from '../../../assets/aboutbg.jpg';
import aboutimg from '../../../assets/edit1.jpg'
import abouticon from '../../../assets/abouticon.png';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const About = () => {
    return (
        <div className="relative">
            {/* Content inside the section */}
            <div className="absolute inset-0 z-10 flex items-center justify-evenly md:container mx-auto">
                <div className=''>
                    <img className='w-48 mb-5 rounded-3xl' src={aboutimg} alt="" />
                    <h2 className='text-5xl text-white font-extrabold mb-7'>SOCIAL LINKS</h2>
                    <div className='grid grid-cols-3 gap-2'>
                        <button className="btn btn-lg btn-outline border-blue-400 text-blue-400">
                            FACEBOOK <FaFacebookSquare />
                        </button>
                        <button className="btn btn-lg btn-outline btn-primary">
                            GITHUB <FaGithub />
                        </button>
                        <button className="btn btn-lg btn-outline btn-secondary">
                            INSTAGRAM <FaInstagram></FaInstagram>
                        </button>
                        <button className="btn btn-lg btn-outline btn-accent">
                            TWITTER <FaTwitter></FaTwitter>
                        </button>
                        <button className="btn btn-lg btn-outline border-red-600 text-red-600">
                            YOUTUBE <FaYoutube></FaYoutube>
                        </button>
                        <button className="btn btn-lg btn-outline border-green-500 text-green-500">
                            LINKEDIN <FaLinkedin></FaLinkedin>
                        </button>
                    </div>
                </div>
                <div className='text-right flex flex-col items-end'>
                    <img className='w-72 mb-6' src={abouticon} alt="" />
                    <h2 className="text-5xl font-extrabold uppercase text-cyan-400">I AM ASADULLAH AL GALIB</h2>
                    <h2 className="text-2xl text-white font-bold mt-5 uppercase">
                        BUILDING DIGITAL MARVELS WITH MERN SORCERY
                    </h2>
                    <p className='text-white mt-5 text-lg'> As a creative problem-solver, I combine my technical expertise <br /> with a keen eye for design to develop visually stunning, <br /> user-friendly websites. My goal is not just functionality but also <br /> to ensure that each project I work on delivers an engaging <br /> and intuitive user experience.</p>
                </div>
            </div>

            {/* Background image with reduced opacity */}
            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${aboutbg})`,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    opacity: 0.3
                }}
            />
        </div>
    );
};

export default About;

