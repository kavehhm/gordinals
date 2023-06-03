import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Nav';
import hero from './images/asset8.jpg'
import './fonts/Minecraft.ttf'
import Fetch from './components/Fetch';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div style={{ fontFamily: 'myfont' }} className="tracking-[0.3rem]">
      <div><Toaster/></div>

      <Hero />
      <Fetch />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
