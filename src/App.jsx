import About from "./components/About"
import Eyes from "./components/Eyes"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="min-h-screen w-full text-white bg-zinc-900">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App
