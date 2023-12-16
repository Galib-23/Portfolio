import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import glogo from '../../assets/glogo.png';
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer items-center p-4 bg-neutral text-neutral-content bg-opacity-40">
                <aside className="items-center grid-flow-col">
                    <img className="w-12" src={glogo} alt="" />
                    <p className="">Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
                    <a href=""><FaGithub className="text-2xl"></FaGithub></a>
                    <a href=""><FaLinkedin className="text-2xl"></FaLinkedin></a>
                    <a href=""><FaFacebook className="text-2xl"></FaFacebook></a>
                    <a href=""><MdOutlineEmail className="text-2xl"/></a>
                    <a href=""><FaYoutube className="text-2xl"></FaYoutube></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;