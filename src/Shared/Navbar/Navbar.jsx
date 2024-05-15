import { FiAlignJustify } from "react-icons/fi";
import glogo from '../../assets/glogo.png';
import profile from '../../assets/edit2.jpeg';
import {Link} from 'react-scroll';

const Navbar = () => {
    const navLinks = <>
        <li className="active:border-b-2"><Link to="banner" spy={true} smooth={true} duration={500}>HOME</Link></li>
        <li className="active:border-b-2"><Link to="about" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
        <li className="active:border-b-2"><Link to="projects" spy={true} smooth={true} duration={500}>MY PROJECTS</Link></li>
        <li className="active:border-b-2"><Link to="design" spy={true} smooth={true} duration={500}>DESIGNS</Link></li>
        <li className="active:border-b-2"><Link to="featured" spy={true} smooth={true} duration={500}>FEATURED</Link></li>
        <li className="active:border-b-2"><Link to="education" spy={true} smooth={true} duration={500}>EDUCATION</Link></li>
        <li className="active:border-b-2"><Link to="skills" spy={true} smooth={true} duration={500}>SKILLS</Link></li>
        <li className="active:border-b-2"><Link to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
    </>
    return (
        <div className="navbar w-full bg-gray-500 bg-opacity-40 md:fixed md:z-30 text-cyan-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-11" src={glogo} alt="" />
                    <h2 className="hidden md:flex text-lg font-semibold">ASADULLAH AL GALIB</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <details className="dropdown dropdown-left dropdown-bottom z-50">
                    <summary className="btn btn-accent btn-outline border-cyan-300 border-2"><FiAlignJustify className="text-xl text-cyan-300"></FiAlignJustify></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-60">
                        <div className="flex flex-col items-center text-black">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={profile} />
                                </div>
                            </div>
                            <h2 className="text-lg">Asadullah Al Galib</h2>
                            <h3 className="">Full Stack Web Developer</h3>
                            <h2 className="text-lg font-bold mt-4">Contact Info:</h2>
                            <p>Email: aagalib2323@gmail.com</p>
                            <p>Phone: +8801772967677</p>
                            <h2 className="text-lg font-bold mt-4">Address:</h2>
                            <p>Paba, Katakhali, Rajshahi</p>
                            <p>Post Code: 6211</p>
                            <p>BANGLADESH</p>
                            
                        </div>
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default Navbar; 