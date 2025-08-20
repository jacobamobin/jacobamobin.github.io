import trafficImage     from "../assets/Traffic.jpg";
import barkleImage      from "../assets/Barkle.jpg";
import watchImage       from "../assets/WatchOS.jpg";
import abilityImage     from "../assets/Ability.jpg";
import assignmentImage  from "../assets/Assightment.jpg";
import minecraftImage   from "../assets/MinecraftGUI.jpg";
import rapidResumeImage from "../assets/Rapid.jpg";
import ontarioCarMeetsImage from "../assets/OntarioCarMeets.jpg";
import ds3Img from "../assets/ds3.png";
import binBuddyImg from "../assets/BinBuddy.jpg";
import cliniMatchImg from "../assets/CliniMatch.png";

export const projects = [
  // 1 ───────────────────────────────────────────────────────
  /*{
    title: "Barkle",
    type:  "FULL‑STACK APPLICATION",
    description:
      "A fully deployed, cross‑platform application with 500 + active users. Barkle provides a federated social‑media experience with real‑time interactions, file storage, and highly customisable features across iOS, Android, and web.",
    image: barkleImage,
    userCount: "500+ Users",
    isHackathon: false,
    placement: null,
    links: {
      web:       "https://barkle.app",
      appStore:  "https://apps.apple.com/app/barkle",
      playStore: "https://play.google.com/store/apps/details?id=com.barkle"
    },
    technologies: [
      { name: "Vue.js",     color: "#42B883" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Node.js",    color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis",      color: "#D82C20" },
      { name: "Docker",     color: "#2496ED" },
      { name: "Firebase",   color: "#FFCA28" }
    ]
  }, */

  {
    title: "GTA (Ontario) Car Meets",
    type: "FULL‑STACK APPLICATION",
    description:
      "A car enthusiast platform connecting automotive communities across Ontario. Features real-time location tracking, interactive maps for meet discovery, and seamless event organization. The application provides a robust backend infrastructure with secure authentication and scalable cloud deployment.",
    image: ontarioCarMeetsImage,
    userCount: "",
    isHackathon: false,
    placement: null,
    links: {
      //web: "https://ontariocarmeets.com",
      appStore: "https://apps.apple.com/ca/app/gta-carmeets/id6746083732"
      //github: "https://github.com/jacobmobin/OntarioCarMeets"
    },
    technologies: [
      { name: "SwiftUI", color: "#007AFF" },
      { name: "SwiftData", color: "#FF2D55" },
      { name: "Spring Boot", color: "#6DB33F" },
      { name: "MySQL", color: "#4479A1" },
      { name: "JWT", color: "#000000" },
      { name: "Google Cloud", color: "#4285F4" },
      { name: "Swift", color: "#F05138" }
    ]
  },

  // 2 ───────────────────────────────────────────────────────
  {
    title: "Apple Intelligence WatchOS",
    type:  "WATCHOS APP",
    description:
      "A watchOS‑native assistant that lets you talk to your wrist and hear instant, AI‑generated replies. It leverages OpenAI Whisper for STT, streams up‑to‑date answers from Perplexity, and speaks back via ChatGPT‑TTS. The shimmering SwiftUI glow animation you see is open‑sourced separately in AppleIntelligenceGlowEffect (100 ★+).",
    image: watchImage,
    isHackathon: false,
    placement: null,
    links: {
      github: "https://github.com/jacobamobin/AppleInteligenceWatchOS"
    },
    technologies: [
      { name: "Swift",      color: "#FA7343" },
      { name: "SwiftUI",    color: "#007AFF" },
      { name: "WatchKit",      color: "#FA7343" },
      { name: "Whisper",    color: "#9B59B6" },
      { name: "Perplexity", color: "#E67E22" }
    ]
  },

  // 3 ───────────────────────────────────────────────────────
  {
    title: "RapidResume",
    type:  "WEB APPLICATION",
    description:
      "Private project.",
    image: rapidResumeImage,
    userCount: "Work In Progress",
    isHackathon: false,
    placement: null,
    links: {
      web: "https://yourusername.github.io/rapidresume"
    },
    technologies: [
      { name: "ReactJS",       color: "#61DAFB" },
      { name: "Node.js",       color: "#339933" },
      { name: "Firebase",      color: "#FFCA28" },
      { name: "TailwindCSS",   color: "#38B2AC" },
      { name: "Stripe",        color: "#635BFF" }
    ]
  },

  // 4 ───────────────────────────────────────────────────────
  {
    title: "Traffic Light Control Software",
    type:  "iOS + CARPLAY APP",
    description:
      "An iOS + CarPlay app that lets me control my full‑sized traffic light from the driver's seat. Built with Swift and SwiftUI, it connects over Bluetooth LE to an Arduino‑powered controller for real‑time red/amber/green control, dimming modes, and GPS + accelerometer assistance.",
    image: trafficImage,
    isHackathon: false,
    placement: null,
    links: {
      github: "https://github.com/jacobmobin/TrafficLightControlSystem_IOS_CARPLAY"
    },
    technologies: [
      { name: "Swift",         color: "#FA7343" },
      { name: "SwiftUI",       color: "#007AFF" },
      { name: "CoreBluetooth", color: "#0A84FF" },
      { name: "Arduino",       color: "#00979D" },
      { name: "CarPlay",       color: "#21C06B" }
    ]
  },

  // 5 ───────────────────────────────────────────────────────
  {
    title: "Ability",
    type:  "iOS APP · ML / 3D PRINTING",
    description:
      "An accessibility‑focused iOS app that empowers users, especially those with disabilities, to create custom 3D‑printable assistive devices. By providing text descriptions and optional images, users can generate and refine 3D models through an intuitive chat‑based interface. Built during the GenAI Genesis Hackathon 2025.",
    image: abilityImage,
    isHackathon: true,
    placement: null,
    links: {
      github: "https://github.com/jacobamobin/Ability",
      devpost: "https://devpost.com/software/ability"
    },
    technologies: [
      { name: "SwiftUI",  color: "#007AFF" },
      { name: "Python",   color: "#3776AB" },
      { name: "Blender",  color: "#F5792A" },
      { name: "SceneKit", color: "#8E8E93" },
      { name: "AI/ML",    color: "#FF6B6B" }
    ]
  },

  // 6 ───────────────────────────────────────────────────────
  {
    title: "Minecraft Block Viewer 3D GUI",
    type:  "DESKTOP • JAVA",
    description:
      "A Java‑based tool that loads 100+ Minecraft blocks into a rotatable, sortable 3‑D interface—perfect for learning block properties and recipes. You can filter through hundreds of blocks by property and the UI and mousehandling is all done from scratch to give it a Minecraft like feel.",
    image: minecraftImage,
    isHackathon: false,
    placement: null,
    links: {
      github: "https://github.com/jacobamobin/MinecraftBlockGUI"
    },
    technologies: [
      { name: "Java",    color: "#007396" },
      { name: "Java 3D", color: "#A179DC" },
      { name: "Swing",   color: "#6E6E6E" }
    ]
  },

  // 7 ───────────────────────────────────────────────────────
  {
    title: "Assignment Tracker",
    type:  "iOS • iPadOS • watchOS APP",
    description:
      "A SwiftUI + SwiftData planner that organises homework by due date, syncs to widgets, and notifies you of looming deadlines across all Apple devices.",
    image: assignmentImage,
    isHackathon: false,
    placement: null,
    links: {
      github: "https://github.com/jacobamobin/AssightmentTrackerApp"
    },
    technologies: [
      { name: "SwiftUI",   color: "#007AFF" },
      { name: "SwiftData", color: "#FF9500" },
      { name: "WidgetKit", color: "#5AC8FA" }
    ]
  },

  // 8 ───────────────────────────────────────────────────────
  {
    title: "Bin Buddy",
    type:  "WEB APPLICATION · SUSTAINABILITY",
    description:
      "A smart, eco-friendly waste management companion built at SolutionHacks. Bin Buddy instantly analyzes, categorizes, and tracks waste with photo uploads, provides environmental impact insights, and discovers nearby drop-off locations for e-waste, furniture, chemicals, etc. Features gamified achievements to make sustainability fun.",
    image: binBuddyImg,
    isHackathon: true,
    placement: "1st Overall",
    links: {
      github: "https://github.com/XDAathi/Bin-Buddy",
      devpost: "https://devpost.com/software/bin-buddy-ld8uak"
    },
    technologies: [
      { name: "React",     color: "#61DAFB" },
      { name: "Python",    color: "#3776AB" },
      { name: "Flask",     color: "#000000" },
      { name: "Supabase",  color: "#3ECF8E" },
      { name: "TailwindCSS", color: "#38B2AC" },
      { name: "Vite",      color: "#646CFF" }
    ]
  },

  // 9 ───────────────────────────────────────────────────────
  {
    title: "CliniMatch",
    type:  "WEB APPLICATION · HEALTHCARE AI",
    description:
      "An AI-powered clinical trial matching platform built for TerraHacks 2025. CliniMatch uses Google Gemini AI to translate complex medical jargon into simple, patient-friendly language, helping users find relevant clinical trials based on their health profile. Features interactive maps, secure user authentication, and intelligent trial recommendations.",
    image: cliniMatchImg,
    isHackathon: true,
    placement: null,
    links: {
      github: "https://github.com/jacobamobin/CliniMatch",
      devpost: "https://devpost.com/software/clinimatch"
    },
    technologies: [
      { name: "React",        color: "#61DAFB" },
      { name: "TypeScript",   color: "#3178C6" },
      { name: "Python",       color: "#3776AB" },
      { name: "Flask",        color: "#000000" },
      { name: "Google Gemini", color: "#4285F4" },
      { name: "Supabase",     color: "#3ECF8E" },
      { name: "TailwindCSS",  color: "#38B2AC" },
      { name: "Framer Motion", color: "#0055FF" }
    ]
  },

  // 10 ───────────────────────────────────────────────────────
  {
    title: "DS3 Datathon - Machine Learning Solutions",
    type:  "DATA SCIENCE · ML",
    description:
      "Competed in the DS3 Datathon 2025, placing 9th out of 180 participants. Solved three real-world problems: car safety evaluation (95% accuracy), car accident analysis (93% accuracy), and fungi classification. This was our first hands-on experience in Machine Learning and Data Science, tackling real-world issues like outliers and incomplete data.",
    image: ds3Img,
    isHackathon: true,
    placement: "9th",
    links: {
      github: "https://github.com/XDAathi/DS3-Datathon"
    },
    technologies: [
      { name: "Python",       color: "#3776AB" },
      { name: "Jupyter",      color: "#F37626" },
      { name: "Data Science", color: "#38B2AC" },
      { name: "Machine Learning", color: "#FF6B6B" },
      { name: "Pandas",       color: "#130654" },
      { name: "NumPy",        color: "#4DABCF" }
    ]
  }
];
