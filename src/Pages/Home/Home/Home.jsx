import CallToAction from "../../../components/CallToAction";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import { ContactUs } from "../ContactUs/ContactUs";
import Designs from "../Designs/Designs";
import Featured from "../Featured/Featured";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import Youtube from "../youtube/Youtube";
// import UiDesign from "../UI/UiDesign";

const Home = () => {
    return (
        <div className="bg-black overflow-x-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
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