import trafficImage     from "../assets/Traffic.jpg";
import barkleImage      from "../assets/Barkle.jpg";
import watchImage       from "../assets/WatchOS.jpg";
import abilityImage     from "../assets/Ability.jpg";
import assignmentImage  from "../assets/Assightment.jpg";
import minecraftImage   from "../assets/MinecraftGUI.jpg";
import rapidResumeImage from "../assets/Rapid.jpg";

export const projects = [
  // 1 ───────────────────────────────────────────────────────
  /*{
    title: "Barkle",
    type:  "FULL‑STACK APPLICATION",
    description:
      "A fully deployed, cross‑platform application with 500 + active users. Barkle provides a federated social‑media experience with real‑time interactions, file storage, and highly customisable features across iOS, Android, and web.",
    image: barkleImage,
    userCount: "500+ Users",
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

  // 2 ───────────────────────────────────────────────────────
  {
    title: "Apple Intelligence WatchOS",
    type:  "WATCHOS APP",
    description:
      "A watchOS‑native assistant that lets you talk to your wrist and hear instant, AI‑generated replies. It leverages OpenAI Whisper for STT, streams up‑to‑date answers from Perplexity, and speaks back via ChatGPT‑TTS. The shimmering SwiftUI glow animation you see is open‑sourced separately in AppleIntelligenceGlowEffect (100 ★+).",
    image: watchImage,
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
      "Chrome‑extension & web platform where job‑seekers upload a resume and—with one click—receive LLM‑generated rewrites tailored to any job ad, delivered as LaTeX‑styled PDFs. Runs on a Node.js / Firebase backend with Firestore data models, Stripe‑powered credit billing, and Google OAuth + JWT for secure access.",
    image: rapidResumeImage,
    userCount: "Work In Progress",
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
    type:  "iOS + CARPLAY APP",
    description:
      "An iOS + CarPlay app that lets me control my full‑sized traffic light from the driver's seat. Built with Swift and SwiftUI, it connects over Bluetooth LE to an Arduino‑powered controller for real‑time red/amber/green control, dimming modes, and GPS + accelerometer assistance.",
    image: trafficImage,
    links: {
      github: "https://github.com/jacobamobin/TrafficLightControlSystem_IOS_CARPLAY"
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
    type:  "iOS APP · ML / 3D PRINTING",
    description:
      "An accessibility‑focused iOS app that turns natural‑language prompts and optional images into 3D‑printable assistive devices via a Python‑Blender pipeline. This project was built during the Gen AI Hackathon 2025.",
    image: abilityImage,
    links: {
      github: "https://github.com/jacobamobin/Ability"
    },
    technologies: [
      { name: "SwiftUI",  color: "#007AFF" },
      { name: "Python",   color: "#3776AB" },
      { name: "Blender",  color: "#F5792A" },
      { name: "SceneKit", color: "#8E8E93" }
    ]
  },

  // 6 ───────────────────────────────────────────────────────
  {
    title: "Minecraft Block Viewer 3D GUI",
    type:  "DESKTOP • JAVA",
    description:
      "A Java‑based tool that loads 100+ Minecraft blocks into a rotatable, sortable 3‑D interface—perfect for learning block properties and recipes. You can filter through hundreds of blocks by property and the UI and mousehandling is all done from scratch to give it a Minecraft like feel.",
    image: minecraftImage,
    links: {
      github: "https://github.com/jacobamobin/MinecraftBlockGUI"
    },
    technologies: [
      { name: "Java",    color: "#007396" },
      { name: "Java 3D", color: "#A179DC" },
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
    links: {
      github: "https://github.com/jacobamobin/AssightmentTrackerApp"
    },
    technologies: [
      { name: "SwiftUI",   color: "#007AFF" },
      { name: "SwiftData", color: "#FF9500" },
      { name: "WidgetKit", color: "#5AC8FA" }
    ]
  }
];
