import { motion } from "framer-motion";

const Skills = () => {
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
      className=""
    >
      <h1 className="section-title" id="skills">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: categoryIndex * 0.1,
              ease: "easeOut",
            }}
            className="glass-card relative overflow-hidden group"
          >
            {/* Background gradient overlay */}
            <div 
              className="absolute inset-0 bg-[#121212] transition-opacity duration-500"
            />
            <div 
              className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 bg-gradient-to-br"
              style={{
                background: `linear-gradient(45deg, ${items[0]?.color}30, ${items[1]?.color}30)`
              }}
            />
            
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {category}
              </h2>
              
              <div className="space-y-3">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:translate-x-2 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] backdrop-blur-sm"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                        border: `1px solid ${skill.color}20`
                      }}
                    >
                      <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                    </div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills; 