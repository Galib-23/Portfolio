import Swal from "sweetalert2";

const BackendProjectsCard = ({
  projectImage,
  projectName,
  youtubeUrl,
  gitUrl,
  technologies,
  description,
}) => {

  const handleViewClick = () => {
    Swal.fire({
      text: "Where do you wanna go?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'View Site',
      cancelButtonText: `View Code`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = youtubeUrl;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = gitUrl;
      }
    });
  }

  return (
    <div className="group relative w-full border border-cyan-400 hover:border-2 min-h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <div to={`/post/${"asd"}`}>
        <img
          src={projectImage}
          alt="post cover"
          className="h-[280px] w-full  object-cover group-hover:h-[220px] transition-all duration-500 z-20"
        />
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg md:text-xl font-semibold line-clamp-2 text-white">{projectName}</p>
        <p className="text-sm line-clamp-2 text-slate-300">{description}</p>
        <span className="italic text-xs mb-2">{technologies}</span>
        <button
          onClick={handleViewClick}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default BackendProjectsCard;
