import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import YoutubeCard from "./YoutubeCard";
import imgThumb from "../../../assets/flavor.png";
import discordThumb from '../../../assets/disthumb.png'


const Youtube = () => {
  const customThumbnails = [
    discordThumb,
    imgThumb,
    imgThumb,
    imgThumb,
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
              "https://www.youtube.com/embed/RusKXEW1Lb8?si=3uFH2yjQpd3QxI_U"
            }
          />
        </div>
        <div>
          <YoutubeCard
            srcVid={
              "https://www.youtube.com/embed/RusKXEW1Lb8?si=3uFH2yjQpd3QxI_U"
            }
          />
        </div>
        <div>
          <YoutubeCard
            srcVid={
              "https://www.youtube.com/embed/RusKXEW1Lb8?si=3uFH2yjQpd3QxI_U"
            }
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Youtube;
