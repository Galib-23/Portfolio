const Youtube = ({srcVid}) => {
  return (
    <div className="mt-24 flex flex-col items-center">
      <div className="w-[400px] h-[250px] md:w-[730px] md:h-[450px]">
        <iframe
          width="100%"
          height="100%"
          src={srcVid}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
