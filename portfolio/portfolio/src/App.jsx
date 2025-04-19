import { useState } from "react";
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
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`border-opacity-50 bg-[rgb(30,30,30)] duration-200 ${
        theme === "dark"
          ? "bg-gray-1000 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Header theme={theme} />
      
      <div className="body w-76/100 lg:w-70/100 xl:w-50/100 mx-auto pb-0.5">
        <div className="w-10%">
          <h1 className="flex items-center w-auto fade-down font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
            <span>👋</span>
            <span 
              className={`w-auto typing ml-1 ${theme === "dark" ? "dark" : "light"}`}
              style={{ display: "inline" }}
            >
              Hi, I'm Jacob
            </span>
          </h1>
        </div>
        
        <h2 className={`text-xl font-normal mt-3 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
          Computer Science Student at Toronto Metropolitan University
        </h2>

        <SocialLinks theme={theme} handleThemeChange={handleThemeChange} />
        <About />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Hackathons />
        <Contact />
      </div>
    </div>
  );
}

export default App;
