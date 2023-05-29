import SideNav from "./components/SideNav/SideNav";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Contact />
      <About />
    </div>
  );
}

export default App;
