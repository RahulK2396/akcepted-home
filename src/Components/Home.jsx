
import Hero from './Hero';
import About from './About';
import BestService from './BestService';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=' overflow-x-hidden'>
            <Hero />
            <About />
            <BestService />
            <Work />
            <Contact />
        </div>
    );
}

export default Home;
