import genaiImg from '../assets/genai.png';
import ds3Img from '../assets/ds3.png';
import rsxImg from '../assets/rsx.png';
import binBuddyImg from '../assets/BinBuddy.jpg';
import cliniMatchImg from '../assets/CliniMatch.png';

export const hackathons = [
  {
    title: "TerraHacks 2025",
    date: "Aug. 2025",
    location: "Toronto, ON",
    description: "Participated in TerraHacks 2025, focusing on technology solutions for healthcare and social impact. Built CliniMatch, an AI-powered platform that connects patients with relevant clinical trials by translating complex medical jargon into simple, understandable language using Google Gemini AI.",
    image: cliniMatchImg,
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Python", color: "#3776AB" },
      { name: "Google Gemini", color: "#4285F4" },
      { name: "Supabase", color: "#3ECF8E" }
    ],
    links: {
      github: "https://github.com/jacobamobin/CliniMatch",
      devpost: "https://devpost.com/software/clinimatch"
    }
  },
    {
        title: "SolutionHacks",
        date: "Jun. 2025",
        location: "Toronto, ON",
        description: "Participated in SolutionHacks, focusing on building solutions for sustainable development goals. Our team developed Bin Buddy, a smart waste management companion that won the 'Best Projects that Aim to Solve a Sustainable Development Goal' award. The project analyzes and categorizes waste through photo uploads while providing environmental impact insights.",
        achievement: "1st Place Overall",
        image: binBuddyImg,
        technologies: [
          { name: "React", color: "#61DAFB" },
          { name: "Python", color: "#3776AB" },
          { name: "Flask", color: "#000000" },
          { name: "Supabase", color: "#3ECF8E" }
        ],
        links: {
          github: "https://github.com/XDAathi/Bin-Buddy",
          devpost: "https://devpost.com/software/bin-buddy-ld8uak"
        }
    },
  {
    title: "GenAI Genesis Hackathon",
    date: "Mar. 2025",
    location: "Toronto, ON",
    description: "Participated in the GenAI Genesis Hackathon, focusing on innovative applications of generative AI and machine learning technologies. In this competition teams had 48 hours to create a full stack application revoling around human empowerment using generative AI.",
    image: genaiImg,
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "AI/ML", color: "#FF6B6B" }
    ],
    links: {
      github: "https://github.com/jacobamobin/Ability",
      devpost: "https://devpost.com/software/ability"
    }
  },
  {
    title: "DS3 Datathon",
    date: "Feb. 2025",
    location: "Toronto, ON",
    description: "Competed in the DS3 Datathon, applying advanced data science techniques to solve real-world problems. This was a week long competiton where teams competed to create as accuracte of a prediction model for 2 car info and crash datasets, and one fungi classification dataset, all problems have real world applications, and real world issues like outliers and bad/incomplete data.",
    image: ds3Img,
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "Data Science", color: "#38B2AC" }
    ],
    links: {
      github: "https://github.com/XDAathi/DS3-Datathon",
    }
  },
  
  {
    title: "Robotics for Space Exploration",
    date: "Feb. 2024",
    location: "University of Toronto",
    description: "Secured 4th place in the Robotics for Space Exploration competition at the University of Toronto where I and a team of 3 others built a robot that competed in multiple challenges mimiking the challenges real rovers face on mars and other celestial bodies.",
    achievement: "4th Place",
    image: rsxImg,
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "Robotics", color: "#805AD5" },
      { name: "Machine Learning", color: "#38A169" }
    ]
  }
]; 