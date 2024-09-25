import BackendProjectsCard from "./BackendProjectsCard";
import promptFusion from "../../../assets/prompt-fusion.png";

const BackendProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <BackendProjectsCard 
        projectImage={promptFusion}
        projectName={"Prompt Fusion"}
        technologies="&bull;Next.js &bull;NextAuth &bull;MongoDB &bull;Mongoose &bull;Tailwind"
      />
    </div>
  );
};

export default BackendProjects;
