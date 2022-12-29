import logo from './logo.svg';
import './App.css';
import Navbar from './nav/Navbar';
import { Home } from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Services from './services/Services';
import Testimonial from './testimonials/Testimonial';
import CollapsibleExample from './nav/Navbar';

function App() {
 
  return (
    <>
      <Navbar></Navbar>
      
      <Home></Home>
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
