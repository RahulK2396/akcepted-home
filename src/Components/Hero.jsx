import React from 'react';
import heroBg from '../assets/herobg.png';
import hero1 from '../assets/hero1.png';

const Hero = () => {
    return (
        <div className=" relative w-full h-[800px] top-[60px] md:h[600px]  ">

            <img src={heroBg} alt='Backgrounnd' className='absolute inset-0 w-[658px] h-[658px] top-[180px] left-[-250px]' />

            <div className='absolute inset-0 bg-[#f28125] opacity-75'></div>

            <div className="absolute w-[1295px] h-[420px] top-[-80px] left-[97px] bg-cover bg-center bg-mainGraphic opacity-90">
                <div>
                    <div className="absolute w-[765px] h-[200px] top-[199px] left-[60px] text-left font-work-sans text-[81px] font-medium leading-[100px] tracking-[-3px] text-black">
                        Let's build products together for life
                    </div>
                    <div className="absolute w-[632px] h-[40px] top-[425px] left-[60px] text-left font-josefin-sans text-[30px] font-normal leading-[40px] text-[#000000CC]">
                        Empowering Innovation, Ensuring Affordability
                    </div>
                    <a
                        href="#"
                        className="absolute w-[250px] h-[66px] top-[500px] left-[60px] flex items-center justify-center text-black bg-white text-[24px] uppercase no-underline hover:bg-[#f28125] scale-105"
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

