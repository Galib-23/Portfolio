import glogo from '../../assets/glogo.png';
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer items-center p-4 flex justify-center bg-neutral text-neutral-content bg-opacity-40">
                <aside className="items-center grid-flow-col">
                    <img className="w-12" src={glogo} alt="" />
                    <p className="">Copyright © 2023 - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;