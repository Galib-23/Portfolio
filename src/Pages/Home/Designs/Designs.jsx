import paint from '../../../assets/paint.png';
import collage from '../../../assets/collage.jpg'


const Designs = () => {
    return (
        <div className='mt-40'>
            <h2 className='text-6xl font-extrabold text-cyan-400 text-center mb-4'>VECTOR ARTS</h2>
            <p className='text-xl font-semibold text-white text-center mb-16'>Whether crafting intricate illustrations using Inkspace <br /> versatile tools or meticulously editing videos to convey compelling narratives, my dedication to the <br /> craft ensures each project is a seamless blend of artistry and precision.</p>
            <div className='flex justify-evenly items-center'>
                <div className=''>
                    <img className='w-[700px]' src={collage} alt="" />
                </div>
                <div>
                    <img className='w-44' src={paint} alt="" />
                    <h2 className='mt-6 text-4xl font-extrabold text-cyan-400'>MY GRAPHICS DESIGNS</h2>
                    <p className='text-xl mt-2 text-white'>
                        As a part-time graphic designer proficient in <br /> Inkspace  and a skilled video editor, I blend creativity <br /> with technical expertise to bring ideas to <br /> life. With a passion for visual storytelling, I <br /> harness the power of design to create <br /> captivating graphics and engaging video content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Designs;