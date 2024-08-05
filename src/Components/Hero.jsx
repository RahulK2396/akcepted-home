
import heroBg from '../assets/herobg.png';
import hero1 from '../assets/hero1.png';

const Hero = () => {
    return (
        <div className=" relative w-full h-[800px] top-[60px] md:h[600px]  xs:h-[600px] ">

            <img src={heroBg} alt='Backgrounnd' className='absolute inset-0 w-[658px] h-[658px] top-[180px] left-[-250px]' />

            <div className='absolute inset-0 bg-[#f28125] opacity-75'></div>

            <div className="absolute w-[1295px] h-[420px] top-[-80px]  left-0 md:left-97px bg-cover bg-center bg-mainGraphic opacity-90">
                <div>
                    <div className="absolute w-unset h-[200px] top-[115px] left-0 text-center font-work-sans text-[43px] font-medium tracking-[-3px] text-black sm:w-[765px] sm:top-[199px] sm:left-[60px] sm:text-left sm:text-[81px] sm:leading-[100px]">
                        Let&apos;s build products<br></br> together for life
                    </div>
                    <div className="absolute w-[322px] h-[40px] top-[270px] left-0 text-center font-josefin-sans text-[22px] font-normal leading-none text-[#000000CC] sm:w-[632px] sm:h-[40px] sm:top-[425px] sm:left-[60px] sm:text-left sm:text-[30px] sm:leading-[40px]">
                        Empowering Innovation, Ensuring Affordability
                    </div>
                    <a
                        href="#"
                        className="absolute w-[250px] h-[66px] top-[360px] left-[33px] flex items-center justify-center text-black bg-white text-[24px] uppercase no-underline hover:bg-[#f28125] scale-105 sm:top-[500px] sm:left-[60px]"
                    >
                        Get Started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[16px] h-[15.56px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                    </a>
                </div>
                <div>
                    <img src={hero1} className="absolute top-[191px] right-0 w-[400px] h-[320px] bg-cover bg-center" alt='Image' />
                </div>
            </div>
        </div>

    );
};

export default Hero;

