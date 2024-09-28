const YoutubeCard = ({srcVid}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px] h-[250px] md:w-[800px] md:h-[450px]">
        <iframe
        className="rounded-xl"
          width="100%"
          height="100%"
          src={srcVid}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeCard;
