import { motion } from "framer-motion";

const Skills = ({ theme }) => {
  const skills = {
    Languages: [
      { 
        name: "Java",
        icon: "devicon-java-plain colored",
        color: "#f89820"
      },
      { 
        name: "Python",
        icon: "devicon-python-plain colored",
        color: "#3776AB"
      },
      { 
        name: "Assembly",
        icon: "devicon-gcc-plain colored",
        color: "#478CBF"
      },
      { 
        name: "HTML/CSS",
        icon: "devicon-html5-plain colored",
        color: "#E34F26"
      },
      { 
        name: "C",
        icon: "devicon-c-plain colored",
        color: "#A8B9CC"
      },
      { 
        name: "Swift",
        icon: "devicon-swift-plain colored",
        color: "#F05138"
      },
      { 
        name: "JavaScript",
        icon: "devicon-javascript-plain colored",
        color: "#F7DF1E"
      }
    ],
    Frameworks: [
      { 
        name: "React JS",
        icon: "devicon-react-original colored",
        color: "#61DAFB"
      },
      { 
        name: "React Native",
        icon: "devicon-react-original colored",
        color: "#61DAFB"
      },
      { 
        name: "SwiftUI",
        icon: "devicon-swift-plain colored",
        color: "#F05138"
      },
      { 
        name: "SwiftData",
        icon: "devicon-swift-plain colored",
        color: "#F05138"
      }
    ],
    "Developer Tools": [
      { 
        name: "Git",
        icon: "devicon-git-plain colored",
        color: "#F05032"
      },
      { 
        name: "VS Code",
        icon: "devicon-vscode-plain colored",
        color: "#007ACC"
      },
      { 
        name: "PyCharm",
        icon: "devicon-pycharm-plain colored",
        color: "#21D789"
      },
      { 
        name: "Jupyter",
        icon: "devicon-jupyter-plain colored",
        color: "#F37626"
      }
    ]
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="mt-10"
    >
      <h1 className="font-bold text-2xl mb-6" id="skills">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className={`p-6 rounded-lg ${
              theme === "dark"
                ? "bg-[rgb(24,24,24)] border-1 border-gray-600"
                : "bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="space-y-3">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-3 p-2 rounded-md transition-all duration-300 hover:translate-x-1 ${
                    theme === "dark"
                      ? "hover:bg-gray-800"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills; 