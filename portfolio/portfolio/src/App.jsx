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
      {/* Header with profile */}
      <Header />
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <section className="max-w-3xl mx-auto pt-16 pb-24">
          <SocialLinks />
          <About />
        </section>

        {/* Content sections with consistent spacing */}
        <div className="space-y-32">
          {/* Skills section */}
          <section>
            <Skills />
          </section>

          {/* Projects section */}
          <section>
            <Projects />
          </section>

          {/* Hackathons section */}
          <section>
            <Hackathons />
          </section>

          {/* Contact section */}
          <section className="pb-32">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
