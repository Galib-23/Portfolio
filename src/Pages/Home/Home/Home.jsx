import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Designs from "../Designs/Designs";
import Featured from "../Featured/Featured";
import Projects from "../Projects/Projects";
import UiDesign from "../UI/UiDesign";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Designs></Designs>
            <UiDesign></UiDesign>
            <Featured></Featured>
        </div>
    );
};

export default Home;