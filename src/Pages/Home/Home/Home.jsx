import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;