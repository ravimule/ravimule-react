import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Facts from './Components/Facts';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
//import '../public/css/style.css';

function App() {
  return (
    <>
        <Header />
        <Intro />
        <main id="main">
            <About />
            <Skills />
            <Services/>
            <Facts/>
            <Testimonials />
            <Contact/>
        </main>
        <Footer/>
        <a className="back-to-top" href="#"><i className="fa fa-chevron-up"></i></a>
    </>
  );
}

export default App;
