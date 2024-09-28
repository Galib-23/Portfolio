import { useEffect } from "react";
import CallToAction from "../../../components/CallToAction";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import BackendProjects from "../backend-projects/BackendProjects";
import Banner from "../Banner/Banner";
import { ContactUs } from "../ContactUs/ContactUs";
import Designs from "../Designs/Designs";
import Featured from "../Featured/Featured";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import Youtube from "../youtube/Youtube";

const Home = () => {
  const trackVisitor = async () => {
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipResponse.json();

    const userAgent = navigator.userAgent;
    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const locationData = await locationResponse.json();
    const location = locationData.city + ", " + locationData.country;

    const visitData = JSON.parse(localStorage.getItem("visitData"));
    const oneHour = 60 * 60 * 1000;

    if (!visitData || Date.now() - visitData.timestamp > oneHour) {
      await fetch("http://localhost:5000/api/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip, location, userAgent }),
      });
      localStorage.setItem('visitData', JSON.stringify({ timestamp: Date.now() }));
    }
  };
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <BackendProjects />
      <Youtube />
      <CallToAction />
      <Designs></Designs>
      {/* <UiDesign></UiDesign> */}
      <Featured></Featured>
      <Timeline></Timeline>
      <Skills></Skills>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
