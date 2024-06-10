import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div id="skills" className="mt-36">
            <h2 data-aos="fade-up" className='text-4xl font-extrabold text-cyan-400 text-center mb-4'>TECHNOLOGIES</h2>
            <div data-aos="fade-up" className="flex justify-center mb-24">
            <hr className="w-1/5"/>
            </div>
            <div className="flex justify-evenly gap-8 md:gap-0 flex-col md:flex-row items-center md:items-start">
                <div data-aos="fade-right" className="flex flex-col items-center">
                    <h2 className="text-2xl text-center font-bold mb-6 text-cyan-400">FRONTEND</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="html5" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png" alt="html5" width="60" height="60" />
                    </div>
                </div>
                <div data-aos="fade-up" className="flex flex-col items-center">
                    <h2 className="text-2xl text-center font-bold mb-6 text-cyan-400">BACKEND</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="nextjs" width="60" height="60" />
                        <img  className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA" alt="express" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://res.cloudinary.com/practicaldev/image/fetch/s--g1u_jxZy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4unrrweuaj1wyh25npgt.jpeg" alt="nextjs" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZcEZuojx-a37v0J_waXjAPFYUz-llEnCDw&s" alt="nextjs" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://miro.medium.com/v2/resize:fit:1400/1*rL8Buu7o6jnG-TYV1WubeQ.png" alt="nextjs" width="60" height="60" />
                        
                    </div>
                </div>
                <div data-aos="fade-up" className="flex flex-col items-center">
                    <h2 className="text-2xl text-center font-bold mb-6 text-cyan-400">TOOLS</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://static-00.iconduck.com/assets.00/docker-icon-512x438-ga1hb37h.png" alt="arduino" width="60" height="60" />
                    </div>
                </div>
                <div data-aos="fade-left" className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400">LANGUAGES</h2>
                    <div className="grid grid-cols-3 gap-3">
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="60" height="60" />
                        <img className='bg-white p-2 rounded-lg w-16 h-16 md:w-20 md:h-20 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="c" width="60" height="60" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;