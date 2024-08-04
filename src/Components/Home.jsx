import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=' overflow-x-hidden'>
            <Hero />
            <About />
            <Services />
            <Work />
            <Contact />
        </div>
    );
}

export default Home;
