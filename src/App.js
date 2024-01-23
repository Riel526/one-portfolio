import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technology from "./components/Technology";
import Contact from "./components/Contact";



function App() {
  return (
  <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Technology />
    <Contact/>
    <SocialLinks />
  </div>
  );
}

export default App;
