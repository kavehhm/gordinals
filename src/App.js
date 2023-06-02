import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Nav';
import hero from './images/asset8.jpg'
import './fonts/Minecraft.ttf'

function App() {
  return (
    <div style={{ fontFamily: 'myfont' }} className="tracking-[0.3rem]">
      <Hero />
    </div>
  );
}

export default App;
