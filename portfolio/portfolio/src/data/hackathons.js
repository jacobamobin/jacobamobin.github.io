import genaiImg from '../assets/genai.png';
import ds3Img from '../assets/ds3.png';
import rsxImg from '../assets/rsx.png';

export const hackathons = [
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
      github: "hhttps://github.com/XDAathi/DS3-Datathon",
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