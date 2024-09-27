import { useEffect } from "react";
import aboutbg from "../../../assets/aboutbg.jpg";
import aboutimg from "../../../assets/edit1.jpg"
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Lottie from "lottie-react";
import animationData from "../../../assets/Animation - 1718003824217.json";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" className="relative">
      {/* Content inside the section */}
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 md:justify-evenly md:container mx-auto">
        <div
          data-aos="zoom-in-left"
          className="flex flex-col items-center md:items-start"
        >
          <div className="w-[350px] md:w-[400px] lg:w-[500px] md:border-l-[1px] md:pl-4">
            <Lottie className="scale-x-[-1]" animationData={animationData} />
            <h2 className="text-lg text-white font-bold mt-5 uppercase text-center md:text-left">
              BUILDING DIGITAL MARVELS WITH MERN SORCERY
            </h2>
            <p className='text-white mt-2 text-sm text-center md:text-left'> As a creative problem-solver, I combine my<br />technical expertise  with a keen eye for design <br />to develop visually stunning, user-friendly websites.</p>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className=" text-center md:text-right flex flex-col items-center md:items-end"
        >
          {/* <h2 className="text-3xl font-extrabold uppercase text-orange-400">I AM <br />ASADULLAH AL GALIB</h2>
                    <h2 className="text-xl text-white font-bold mt-5 uppercase">
                        BUILDING DIGITAL MARVELS<br /> WITH MERN SORCERY
                    </h2> */}
          <img
            className="w-48 mb-4 rounded-2xl hidden md:block"
            src={aboutimg}
            alt=""
          />
          <h2 className="text-3xl text-white font-extrabold mb-7">
            SOCIAL LINKS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
            <a
              href="https://www.linkedin.com/in/asadullah-al-galib-982645284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border-green-500 text-green-500 w-36">
                LINKEDIN <FaLinkedin></FaLinkedin>
              </button>
            </a>
            <a
              href="https://github.com/Galib-23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-primary  w-36">
                GITHUB <FaGithub />
              </button>
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100076476525666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border-blue-400 text-blue-400 w-36">
                FACEBOOK <FaFacebookSquare />
              </button>
            </a>
            <a
              href="https://www.instagram.com/galibillustrations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline btn-secondary w-36">
                INSTAGRAM <FaInstagram></FaInstagram>
              </button>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline btn-accent w-36">
                TWITTER <FaTwitter></FaTwitter>
              </button>
            </a>
            <a
              href="https://youtu.be/HyWYpM_S-2c?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border-red-600 text-red-600 w-36">
                YOUTUBE <FaYoutube></FaYoutube>
              </button>
            </a>
          </div>
          {/* <p className='text-white mt-5 text-lg mx-2 md:mx-0'> As a creative problem-solver, I combine my<br />technical expertise  with a keen eye for design <br />to develop visually stunning, user-friendly websites.<br /><span className='hidden md:block'> My goal is not just functionality but also <br /> to ensure that each project I work on delivers<br /> an engaging  and intuitive user experience.</span></p> */}
        </div>
      </div>

      {/* Background image with reduced opacity */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default About;
