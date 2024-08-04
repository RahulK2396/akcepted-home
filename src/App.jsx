// import React from 'react';
// import Header from './Components/Header';
// import Hero from './Components/Hero';
// import About from './Components/About';
// // import VideoSection from './Components/VideoSection';

// function App() {
//   return (
//     <div className="App">
//       {/* <Header />
//       <Hero />
//       <About /> */}
//       {/* <VideoSection /> */}

//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import './index.css';
import Home from './Components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer';
import BestService from './Components/BestService';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<BestService />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
