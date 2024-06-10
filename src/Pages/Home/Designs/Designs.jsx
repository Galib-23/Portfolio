import collage from "../../../assets/collage.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/Animation - 1718007697234.json";

const Designs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="design" className="mt-40">
      <div data-aos="fade-right" className="md:hidden">
        <Lottie className="w-[350px]" animationData={animationData} />
      </div>
      <div className="mx-6 md:mx-0">
        <h2
          data-aos="fade-up"
          className="text-4xl font-extrabold text-cyan-400 text-center mb-4"
        >
          VECTOR ARTS
        </h2>
        <p data-aos="fade-up" className="text text-white text-center mb-16">
          Whether crafting intricate illustrations using Inkspace <br />{" "}
          versatile tools or meticulously editing videos to convey compelling
          narratives, my dedication to the <br /> craft ensures each project is
          a seamless blend of artistry and precision.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
        <div
          data-aos="fade-left"
          className="flex flex-col items-center mt-6 md:mt-0"
        >
          <img
            className="w-3/4 md:w-[500px] mx-4 md:mx-0"
            src={collage}
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="hidden md:flex md:flex-col items-center md:items-end text-center md:text-right"
        >
          <Lottie
            className="w-[350px] md:w-[400px]"
            animationData={animationData}
          />
        </div>
      </div>
    </div>
  );
};

export default Designs;
