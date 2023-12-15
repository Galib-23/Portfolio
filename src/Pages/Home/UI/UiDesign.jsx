import app1 from '../../../assets/app1.png'
import app2 from '../../../assets/app2.png'
const UiDesign = () => {
    return (
        <div className='mt-32'>
            <h2 className='text-6xl font-extrabold text-cyan-400 text-center mb-4'>UI DESIGNS</h2>
            <p className='text-xl font-semibold text-white text-center mb-16'>As a part-time UI designer specializing in mobile app interfaces, <br /> I wield the Inkscape software to craft sleek and user-centric <br />vector UI designs. With a passion for creating seamless and visually appealing experiences, <br /> I meticulously design interfaces that seamlessly merge functionality with aesthetics.</p>
            <div className='flex  justify-center gap-20'>
                <img className='w-72 rounded-3xl' src={app1} alt="" />
                <img className='w-72 rounded-3xl' src={app2} alt="" />
            </div>
        </div>
    );
};

export default UiDesign;