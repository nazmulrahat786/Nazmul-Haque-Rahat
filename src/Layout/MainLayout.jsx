import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div className=' overflow-x-hidden  bg-gradient-to-r from-indigo-50 via-white to-indigo-50'>
           <Navbar ></Navbar>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
           <ToastContainer />
           
        </div>
    );
};

export default MainLayout;