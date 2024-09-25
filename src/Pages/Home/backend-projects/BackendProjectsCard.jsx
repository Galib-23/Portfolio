const BackendProjectsCard = ({
  projectImage,
  projectName,
  technologies,
}) => {
  return (
    <div className="group relative w-full border border-cyan-400 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[330px] transition-all">
      <div to={`/post/${"asd"}`}>
        <img
          src={projectImage}
          alt="post cover"
          className="h-[280px] w-full  object-cover group-hover:h-[220px] transition-all duration-500 z-20"
        />
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{projectName}</p>
        <span className="italic text-sm">{technologies}</span>
        <div
          to={`/post/${"asd"}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          View Project
        </div>
      </div>
    </div>
  );
};

export default BackendProjectsCard;
