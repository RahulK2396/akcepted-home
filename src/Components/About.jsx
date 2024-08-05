// import React from 'react';
// import about1 from '../assets/about1.png';
// import about2 from '../assets/about2.png';
// import about3 from '../assets/about3.jpg';

// const About = () => {
//     return (
//         <div className=" p-20 text-center w-full h-full mx-auto relative">
//             <img src={about3} alt='Image' className='w-[1245px] h-[802px]' />
//             {/* Graphic Vectors */}
//             <img
//                 src={about1}
//                 alt="Graphic Vector 1"
//                 className="absolute w-[512px] h-[512px] top-[800px] left-[-200px] opacity-10"
//             />
//             <img
//                 src={about2}
//                 alt="Graphic Vector 2"
//                 className="absolute w-[512px] h-[512px] top-[975px] left-[858.35px] opacity-10 transform rotate-[-20.43deg]"
//             />
//             <h2 className="text-[20px] font-medium leading-[20px] text-center font-josefin-sans pt-12">
//                 Who We Are
//             </h2>
//             <p className="mt-4 text-[46px] font-medium leading-[60px] font-work-sans text-center">
//                 Akcepted is a digital solution for a product agency that relates people relations with products and other services.
//             </p>
//             <div className="flex justify-center mt-6">
//                 <button className="bg-[#f18124] text-white px-8 py-4 w-[354px] h-[66px] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out transform hover:bg-[#d3701f] hover:scale-105 flex items-center justify-center gap-2">
//                     Get a Free Consultation
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[16px] h-[15.56px]"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default About;

import  { useRef, useEffect } from 'react';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
// import about3 from '../assets/about3.jpg';
import videoSrc from '../assets/Final Video.mp4';

const About = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handlePlayVideo = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handlePlayVideo, {
            threshold: 0.5
        });

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);


    return (
        <div className="p-5 h-[400px] md:h-[1000px] md:p-20 text-center top-[-250px] w-full mx-auto relative">
            {/* <img src={about3} alt="Main Image" className="w-full h-auto max-w-[1245px] mx-auto" /> */}
            <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-auto max-w-[1245px] mx-auto"
                controls
                alt="Main Video"
            />
            {/* Graphic Vectors */}
            <img
                src={about1}
                alt="Graphic Vector 1"
                className="absolute w-[40%] max-w-[512px] top-[730px] left-[70px] opacity-10 transform -translate-x-1/2"
            />
            <img
                src={about2}
                alt="Graphic Vector 2"
                className="absolute w-[40%] max-w-[512px] top-[940px] right-[170px] opacity-10 transform rotate-[-15.43deg] translate-x-1/2"
            />
            <h2 className="text-[20px] font-medium leading-[20px] font-josefin-sans pt-[89px]">
                Who We Are
            </h2>
            <p className="mt-4 text-[28px] md:text-[58px] font-medium leading-[36px] md:leading-[60px] font-work-sans text-center">
                Akcepted is a digital solution for a product agency that relates people relations with products and other services.
            </p>
            <div className="flex justify-center mt-6 pt-8">
                <button className="bg-[#f18124] text-white px-8  py-4 rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out transform hover:bg-[#d3701f] hover:scale-105 flex items-center justify-center gap-2">
                    Get a Free Consultation
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16px] h-[15.56px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default About;

