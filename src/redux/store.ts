import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ContactInfo {
  name: string
  phone: string
  email: string
  linkedin: string
  github: string
}

interface Education {
  id: string
  institution: string
  degree: string
  duration: string
  gpa: string
}

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  responsibilities: string[]
}

interface Project {
  id: string
  name: string
  technologies: string
  status: string
  description: string[]
}

interface Skill {
  id: string
  category: string
  skills: string[]
}

interface Achievement {
  id: string
  title: string
  description: string
  date: string
}

interface ResumeState {
  contact: ContactInfo
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: Skill[]
  achievements: Achievement[]
}

interface SectionState {
  value: string
}

const initialResumeData: ResumeState = {
  contact: {
    name: "Varun Kangotra",
    phone: "+91-9257307752",
    email: "varunkangotra.it25@gmail.com",
    linkedin: "varun-it25",
    github: "varun-it25",
  },
  education: [
    {
      id: "1",
      institution: "Jaipur Engineering College and Research Centre",
      degree: "B.Tech : Information Technology (IT)",
      duration: "Nov 2021 - May 2025",
      gpa: "CGPA : 7.5",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Kvon Tech Consultancy",
      position: "Full Stack Intern — Html, CSS, BootStrap, Jquery, React, Node",
      duration: "Feb 2025 – July 2025",
      location: "Jaipur, India",
      responsibilities: [
        "Designed and developed responsive user interfaces using HTML, CSS, Bootstrap, and jQuery, enhancing UI consistency across 4+ web applications.",
        "Built and integrated dynamic frontend features with backend logic using AJAX and JavaScript, improving real-time data handling by 35%.",
        "Developed backend functionality and RESTful APIs using Node.js, streamlining data processing and business logic.",
        "Conducted manual and functional testing to ensure cross-browser compatibility and responsiveness, identifying and resolving 30+ bugs.",
        "Conducted code reviews and maintained version control using Git and GitHub, leading to a 15% reduction in code merge conflicts.",
        "Implemented responsive UI components with HTML, CSS, JavaScript, and React, increasing user engagement metrics by 20%.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      name: "SRC Portal",
      technologies: "React.js, Tailwind CSS, TypeScript, Node.js, MongoDB, Cloudinary, Supabase",
      status: "Live",
      description: [
        "Built a complete web portal for the Spiritual Research Cell (SRC) college club, including a public website and an admin panel for event and team management.",
        "Designed responsive UI components and integrated dynamic content using React, Tailwind CSS, and TypeScript for a seamless user experience.",
        "Developed backend services with Node.js, MongoDB, Supabase, and Cloudinary to handle registrations, team data, media uploads, and stats tracking.",
      ],
    },
    {
      id: "2",
      name: "Digital Signature Tool",
      technologies: "React.js, HTML5 Canvas, JavaScript, Sass",
      status: "Live",
      description: [
        "Built a web-based digital signature tool allowing users to draw signatures on a canvas and export them as PNG file.",
        "Utilized HTML5 Canvas API with React.js and JavaScript to enable smooth, responsive drawing functionality.",
        "Styled the application using Sass to create a clean, modern, and mobile-friendly UI.",
      ],
    },
  ],
  skills: [
    {
      id: "1",
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    },
    {
      id: "2",
      category: "Frontend Technologies",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
    },
    {
      id: "3",
      category: "Backend Technologies",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"],
    },
    {
      id: "4",
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
  ],
  achievements: [
    {
      id: "1",
      title: "Best Project Award",
      description: "Received best project award for SRC Portal development",
      date: "2024",
    },
  ],
}

const resumeSlice = createSlice({
  name: "resume",
  initialState: initialResumeData,
  reducers: {
    updateContact: (state, action: PayloadAction<ContactInfo>) => {
      state.contact = action.payload
    },
    updateEducation: (state, action: PayloadAction<Education[]>) => {
      state.education = action.payload
    },
    updateExperience: (state, action: PayloadAction<Experience[]>) => {
      state.experience = action.payload
    },
    updateProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload
    },
    updateSkills: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload
    },
    updateAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.achievements = action.payload
    },
  },
})

const sectionSlice = createSlice({
  name: "section",
  initialState: { value: "About" } as SectionState,
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { updateContact, updateEducation, updateExperience, updateProjects, updateSkills, updateAchievements } =
  resumeSlice.actions
export const { setSection } = sectionSlice.actions

export const store = configureStore({
  reducer: {
    resume: resumeSlice.reducer,
    section: sectionSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 