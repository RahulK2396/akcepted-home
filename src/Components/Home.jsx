
import Hero from './Hero';
import About from './About';
import BestService from './BestService';
import LatestProject from './LatestProject';
import GetinTouch from './GetinTouch';
import Community from './Community';

const Home = () => {
    return (
        <div className=' overflow-x-hidden'>
            <Hero />
            <About />
            <BestService />
            <LatestProject />
            <GetinTouch />
            <Community />

        </div>
    );
}

export default Home;
