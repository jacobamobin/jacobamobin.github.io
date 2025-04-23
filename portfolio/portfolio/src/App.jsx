import "./App.css";

// Layout Components
import Header from "./components/layout/Header";

// Section Components
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Hackathons from "./components/sections/Hackathons";
import Contact from "./components/sections/Contact";

// UI Components
import SocialLinks from "./components/ui/SocialLinks";

function App() {
  return (
    <div className="bg-[rgb(18,18,20)]">
      <Header />
      
      <div className="body max-w-3xl mx-auto pb-12 px-4 sm:px-6 pt-6">
        <SocialLinks />
        <About />
      </div>
      
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 pt-6">
        <Skills />
        <Projects />
        <Hackathons />
        <Contact />
      </div>
    </div>
  );
}

export default App;
