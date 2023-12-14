import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
    const navLinks = <>
        <li className="font-semibold"><a>HOME</a></li>
        <li className="font-semibold"><a>ABOUT</a></li>
        <li className="font-semibold"><a>MY PROJECTS</a></li>
        <li className="font-semibold"><a>SKILLS</a></li>
        <li className="font-semibold"><a>DESIGNS</a></li>
        <li className="font-semibold"><a>CONTACT</a></li>
    </>
    return (
        <div className="navbar w-full bg-gray-500 bg-opacity-20 fixed z-30 text-cyan-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-accent btn-outline border-cyan-300 border-2">
                    <FiAlignJustify className="text-xl text-cyan-300"></FiAlignJustify>
                </button>
            </div>
        </div>
    );
};

export default Navbar; 