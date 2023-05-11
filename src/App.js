import SideNav from "./components/SideNav/SideNav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Hero />
      <Benefits />
      <Contact />
      <About />
    </div>
  );
}

export default App;
