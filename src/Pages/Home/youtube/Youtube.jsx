import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import YoutubeCard from "./YoutubeCard";
import discordThumb from '../../../assets/disthumb.png'
import formifyThumb from '../../../assets/formifythumb.png'
import promptthumb from '../../../assets/promptthumb.png'
import circlespacethumb from '../../../assets/circlespacethumb.png'


const Youtube = () => {
  const customThumbnails = [
    discordThumb,
    formifyThumb,
    promptthumb,
    circlespacethumb,
  ];

  return (
    <div className="mx-2 md:mx-28">
      <Carousel
        showThumbs={true}
        className="text-center max-w-screen-2xl"
        renderThumbs={() =>
          customThumbnails.map((thumb, index) => (
            <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} />
          ))
        }
      >
        <div>
          <YoutubeCard
            srcVid={
              "https://www.youtube.com/embed/UIGgdCQgg9s?si=prHxYihEx4WQ7840"
            }
          />
        </div>
        <div>
          <YoutubeCard
            srcVid={
              "https://www.youtube.com/embed/11yGMX6gqqY?si=buNLJQdsGM3gfMar"
            }
          />
        </div>
        <div>
          <YoutubeCard
            srcVid={
              "https://www.youtube.com/embed/c-09QAca8OM?si=CvbFVC22P20fimbg"
            }
          />
        </div>
        <div>
          <YoutubeCard
            srcVid={
              "https://www.youtube.com/embed/gHiwKF-sZ8k?si=0zvWf0FoJ6oqy1Wa"
            }
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Youtube;
