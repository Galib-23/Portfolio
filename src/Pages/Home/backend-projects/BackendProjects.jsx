import BackendProjectsCard from "./BackendProjectsCard";
import disthumb from "../../../assets/disthumb.png";
import formifythumb from "../../../assets/formifythumb.png";
import whisperlink from "../../../assets/whisperlink.png";
import promptFusion from "../../../assets/prompt-fusion.png";
import { FaServer } from "react-icons/fa";

const BackendProjects = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mt-36 mb-10 mx-4 md:mx-0">
        <h2 className="pb-2 text-2xl font-semibold text-cyan-400 cursor-text">
          Full Stack Projects
        </h2>
        <p className="text-white text-lg flex items-center gap-2">Backend Focused
          <FaServer />
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mx-2 lg:mx-0">
        <BackendProjectsCard
          projectImage={disthumb}
          projectName={"Prompt Fusion"}
          technologies="&bull;Next.js &bull;NextAuth &bull;MongoDB &bull;Mongoose &bull;Tailwind"
        />
        <BackendProjectsCard
          projectImage={formifythumb}
          projectName={"Prompt Fusion"}
          technologies="&bull;Next.js &bull;NextAuth &bull;MongoDB &bull;Mongoose &bull;Tailwind"
        />
        <BackendProjectsCard
          projectImage={whisperlink}
          projectName={"Prompt Fusion"}
          technologies="&bull;Next.js &bull;NextAuth &bull;MongoDB &bull;Mongoose &bull;Tailwind"
        />
        <BackendProjectsCard
          projectImage={promptFusion}
          projectName={"Prompt Fusion"}
          technologies="&bull;Next.js &bull;NextAuth &bull;MongoDB &bull;Mongoose &bull;Tailwind"
        />
      </div>
    </div>
  );
};

export default BackendProjects;
