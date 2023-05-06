import SideNav from "./components/SideNav/SideNav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Hero />
      <Benefits />
      <About />
    </div>
  );
}

export default App;
