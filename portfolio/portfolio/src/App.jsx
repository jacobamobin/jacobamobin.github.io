import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Hackathons from "./components/sections/Hackathons";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </div>
        
        {/* Experience Section */}
        <Experience />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Hackathons Section */}
        <Hackathons />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
