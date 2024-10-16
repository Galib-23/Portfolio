import BackendProjectsCard from "./BackendProjectsCard";
import disthumb from "../../../assets/disthumb.png";
import formifythumb from "../../../assets/formifythumb.png";
import whisperlink from "../../../assets/whisperlink.png";
import promptFusion from "../../../assets/prompt-fusion.png";
import { FaServer } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const BackendProjects = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-6xl mx-auto mt-28">
      <div data-aos="fade-up" data-aos-duration="3000">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400">
          MY PROJECTS
        </h2>
        <p className="text-center font-semibold text-white mb-20">
          I have developed a series of dynamic web applications leveraging the
          Different stacks, showcasing <br /> my proficiency in in modern web
          development technologies & practices.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20 mb-16 mx-4 md:mx-0" data-aos="fade-up" data-aos-duration="3000">
        <h2 className="pb-2 text-2xl font-semibold text-cyan-400 cursor-text">
          Full Stack Projects
        </h2>
        <p className="text-white text-lg flex items-center gap-2">
          Backend Focused
          <FaServer />
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mx-5 md:mx-0">
        <BackendProjectsCard
          projectImage={disthumb}
          youtubeUrl="https://youtu.be/UIGgdCQgg9s?feature=shared"
          gitUrl="https://github.com/Galib-23/discord-clone"
          projectName={"Discord Clone"}
          description="This is a full fledged clone of official discord app"
          technologies="&bull;Next.js &nbsp;&bull;Typescript &nbsp;&bull;PostgreSQL &nbsp;&bull;Zustand &nbsp;&bull;Prisma &nbsp;&bull;Shadcn/ui &nbsp;&bull;Clerk &nbsp;&bull;Tailwind CSS &nbsp;&bull;TanstackQury &nbsp;&bull;Socket.io &nbsp;&bull;Livekit-API &nbsp;&bull;Uploadthing"
          dataAos="fade-left"
          dataAosDirection="2000"
        />
        <BackendProjectsCard
          projectImage={formifythumb}
          youtubeUrl="https://youtu.be/11yGMX6gqqY?feature=shared"
          gitUrl="https://github.com/Galib-23/ai-formbuilder"
          projectName={"Formify"}
          description={"AI form generator by simple prompts."}
          technologies="&bull;Next.js &nbsp;&bull;Shadcn/ui &nbsp;&bull;PostgreSQL &nbsp;&bull;Drizzle &nbsp;&bull;Stripe &nbsp;&bull;Gemini API &nbsp;&bull;Neon DB &nbsp;&bull;Tailwind CSS &nbsp;&bull;Clerk-Auth"
          dataAos="fade-right"
          dataAosDirection="2000"
        />
        <BackendProjectsCard
          projectImage={whisperlink}
          youtubeUrl="https://youtu.be/9wTE_evHbsQ?feature=shared"
          gitUrl="https://github.com/Galib-23/whisperlink"
          projectName={"Whisperlink"}
          description={"Real-time chat app with stunning ui and notifications"}
          technologies="&bull;React.js &nbsp;&bull;MongoDB &nbsp;&bull;mongoose &nbsp;&bull;Tailwind CSS &nbsp;&bull;Zustand &nbsp;&bull;Socket.io &nbsp;&bull;Node.js"
          dataAos="fade-left"
          dataAosDirection="2000"
        />
        <BackendProjectsCard
          projectImage={promptFusion}
          youtubeUrl="https://youtu.be/c-09QAca8OM?feature=shared"
          gitUrl="https://github.com/Galib-23/Prompt-Fusion"
          description={"A collaborative platform for sharing prompts"}
          projectName={"Prompt Fusion"}
          technologies="&bull;Next.js &nbsp;&bull;NextAuth &nbsp;&bull;MongoDB &nbsp;&bull;Mongoose &nbsp;&bull;Tailwind CSS"
          dataAos="fade-right"
          dataAosDirection="2000"
        />
      </div>
    </div>
  );
};

export default BackendProjects;
