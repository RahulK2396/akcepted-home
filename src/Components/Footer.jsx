// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-black text-white py-10">
//             <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
//                 <div className="flex flex-col mb-6 lg:mb-0">
//                     <div className="text-xl font-bold mb-4">akcepted</div>
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-blue-500"><i className="fab fa-twitter"></i></a>
//                         <a href="#" className="text-blue-700"><i className="fab fa-facebook"></i></a>
//                         <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
//                     </div>
//                 </div>
//                 <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
//                     <div className="flex flex-col">
//                         <a href="#" className="mb-2">Work</a>
//                         <a href="#" className="mb-2">About</a>
//                         <a href="#">Careers</a>
//                     </div>
//                     <div className="flex flex-col">
//                         <a href="#" className="mb-2">Services</a>
//                         <a href="#" className="mb-2">Blogs</a>
//                         <a href="#">Contact us</a>
//                     </div>
//                     <div className="flex flex-col">
//                         <div className="mb-4">Subscribe to our Newsletter</div>
//                         <form className="flex">
//                             <input type="email" placeholder="Enter Email" className="px-4 py-2 text-black" />
//                             <button type="submit" className="bg-orange-500 px-4 py-2">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className="container mx-auto px-4 text-center mt-6">
//                 <p className="text-sm">All Rights Reserved @ akcepted Technologies Solutions LLP</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col mb-6 lg:mb-0">
                    <div className="text-xl font-bold mb-4">akcepted</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-blue-700"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
                    <div className="flex flex-col">
                        <a href="#" className="mb-2 hover:underline">Work</a>
                        <a href="#" className="mb-2 hover:underline">About</a>
                        <a href="#" className="hover:underline">Careers</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="#" className="mb-2 hover:underline">Services</a>
                        <a href="#" className="mb-2 hover:underline">Blogs</a>
                        <a href="#" className="hover:underline">Contact us</a>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">Subscribe to our Newsletter</div>
                        <form className="flex">
                            <input type="email" placeholder="Enter Email" className="px-4 py-2 text-black rounded-l-md" />
                            <button type="submit" className="bg-orange-500 px-4 py-2 rounded-r-md">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 text-center mt-6">
                <p className="text-sm">All Rights Reserved @ akcepted Technologies Solutions LLP</p>
            </div>
        </footer>
    );
}

export default Footer;

