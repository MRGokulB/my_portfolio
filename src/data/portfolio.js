export const portfolioData = {
  personal: {
    name: "Gangaprasad Boddawar",
    title: "Full Stack Developer",
    tagline: "Building immersive digital experiences",
    email: "boddawargokul@gmail.com",
    phone: "9307902794",
    location: "Nanded, Maharashtra, India | Willing to relocate to Pune / Bangalore / Remote",
    bio: "Passionate developer with 10+ Months of experience creating cutting-edge web applications. I specialize in React, Three.js, and modern web technologies. I love transforming ideas into beautiful, functional products that users love.",
    resume: "/resume.pdf",
    social: {
      github: "https://github.com/MRGokulB",
      linkedin: "https://linkedin.com/in/johndev",
      twitter: "https://twitter.com/johndev",
      portfolio: "https://johndev.com"
    }
  },

  skills: [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 93, icon: "⚛️" },
      { name: "Redux Toolkit", level: 90, icon: "🌀" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript (ES6+)", level: 88, icon: "📘" },
      { name: "HTML5", level: 90, icon: "🌐" },
      { name: "CSS3", level: 88, icon: "💅" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚂" },
      { name: "FastAPI", level: 82, icon: "⚡" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Prisma ORM", level: 84, icon: "🔗" },
      { name: "REST APIs", level: 90, icon: "🔌" }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 92, icon: "🔀" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "AWS (Lambda, S3)", level: 82, icon: "☁️" },
      { name: "Socket.io", level: 85, icon: "🔁" },
      { name: "Firebase", level: 80, icon: "🔥" },
      { name: "Responsive Design & Accessibility", level: 87, icon: "📱" }
    ]
  }
]
,

  projects: [
  {
    id: 1,
    title: "Advertisement Compliance Management System",
    description:
      "A task management and compliance tracking platform with multi-role access, real-time collaboration, and enterprise-grade security.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&h=600&fit=crop",
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Prisma", "Socket.io", "AWS S3"],
    liveUrl: "",
    githubUrl: "https://github.com/MRGokulB", // Replace with actual repo if available
    featured: true
  },
  {
    id: 2,
    title: "GPS Management System",
    description:
      "An AI-powered tender and GPS management system with smart document processing, keyword extraction, and candidate matching.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    tags: ["React.js", "FastAPI", "MongoDB", "OpenAI API", "AWS Lambda", "Vercel"],
    liveUrl: "",
    githubUrl: "https://github.com/MRGokulB",
    featured: true
  },
  {
    id: 3,
    title: "Gym Buddy (Social Fitness App)",
    description:
      "A social fitness web app for connecting gym enthusiasts, sharing workouts, and tracking progress in real time.",
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&h=600&fit=crop",
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "Firebase", "JWT Auth"],
    liveUrl: "",
    githubUrl: "https://github.com/MRGokulB",
    featured: true
  },
  {
    id: 4,
    title: "AI Podcastr (AI Podcast Platform)",
    description:
      "A creative platform for generating and managing podcasts using OpenAI’s TTS and DALL·E APIs with secure user authentication and cloud storage.",
    image:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?w=800&h=600&fit=crop",
    tags: ["React.js", "Node.js", "Express.js", "Firebase", "OpenAI TTS", "DALL·E API"],
    liveUrl: "",
    githubUrl: "https://github.com/MRGokulB",
    featured: false
  },
  {
    id: 5,
    title: "Herbs Magic (E-commerce Frontend)",
    description:
      "A modern e-commerce interface designed to improve engagement and performance using React.js and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1581093588401-22b9a9e98d1e?w=800&h=600&fit=crop",
    tags: ["React.js", "Tailwind CSS", "REST API", "React Router", "UI Optimization"],
    liveUrl: "",
    githubUrl: "https://github.com/MRGokulB",
    featured: false
  }
]
,

  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SA-123456",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      url: "https://aws.amazon.com/certification/"
    },
    {
      id: 2,
      title: "Meta Front-End Developer Professional",
      issuer: "Meta (Facebook)",
      date: "2023",
      credentialId: "META-FE-789012",
      logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=100&fit=crop",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
    },
    {
      id: 3,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-DEV-345678",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      url: "https://cloud.google.com/certification/cloud-developer"
    },
    {
      id: 4,
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "FM-REACT-901234",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
      url: "https://frontendmasters.com"
    },
    {
      id: 5,
      title: "Three.js Journey",
      issuer: "Three.js Academy",
      date: "2023",
      credentialId: "TJS-567890",
      logo: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=100&h=100&fit=crop",
      url: "https://threejs-journey.com"
    },
    {
      id: 6,
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2022",
      credentialId: "UDACITY-FS-234567",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop",
      url: "https://www.udacity.com"
    }
  ],

  experience: [
  {
    id: 1,
    company: "LionelAgency Innovations",
    position: "Full Stack Developer",
    period: "March 2025 - Present",
    description:
      "Developed and deployed an Advertisement Compliance Management System — a robust task management platform with secure, real-time collaboration and role-based access control.",
    achievements: [
      "Architected the system using React.js, Redux Toolkit, Node.js, Express.js, and MongoDB with Prisma ORM.",
      "Implemented RBAC with 6+ roles and 50+ fine-grained permissions.",
      "Integrated real-time collaboration using WebSockets (Socket.io) for instant task updates and notifications.",
      "Enabled secure file versioning via AWS S3, improving coordination efficiency by 40%.",
      "Developed JWT-based authentication, CSRF protection, and session management for enterprise-grade security."
    ]
  },
  {
    id: 2,
    company: "Individual Project",
    position: "Full Stack Developer",
    period: "Sep 2025 – Aug 2025",
    description:
      "Created a GPS Management System — a full-stack platform with AI-powered PDF processing and smart candidate matching.",
    achievements: [
      "Built the system using React.js (frontend) and FastAPI (backend) with MongoDB.",
      "Integrated OpenAI APIs for keyword extraction from Marathi tenders with 85%+ accuracy.",
      "Reduced manual screening time by 70% through AI-powered automation.",
      "Implemented secure JWT authentication, RBAC, and file uploads.",
      "Deployed using AWS Lambda and Vercel for scalable cloud performance."
    ]
  },
  {
    id: 3,
    company: "Herbs Magic",
    position: "Frontend Developer Intern",
    period: "Dec 2024 – Feb 2025",
    description:
      "Contributed to UI development for an e-commerce platform, focusing on performance and responsive design.",
    achievements: [
      "Developed responsive interfaces using React.js and Tailwind CSS, improving engagement by 30%.",
      "Integrated REST APIs and React Router to optimize page transitions and data flow.",
      "Enhanced cross-device performance and accessibility.",
      "Participated in Agile sprints, coordinated standups, and collaborated with designers and backend developers."
    ]
  }
]
,

  education: {
  degrees: [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "M.E. Society’s Institute of Management & Career Courses (IMCC)",
      location: "Pune, Maharashtra, India",
      period: "2023 - 2025",
      gpa: "7.98 / 10",
      major: "Computer Applications",
      honors: "",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop",
      description:
        "Focused on advanced full-stack development, cloud computing, and system architecture. Built scalable web applications and real-time data-driven platforms during coursework.",
      coursework: [
        "Advanced Web Development",
        "Database Management Systems",
        "Cloud Computing",
        "Software Engineering",
        "System Design",
        "AI Fundamentals"
      ],
      achievements: [
        "Developed multiple full-stack projects including GPS Management and AI Podcast platforms",
        "Maintained consistent academic performance with CGPA 7.98",
        "Participated in coding competitions and hackathons",
        "Completed practical internships and live projects"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "S.S.B.E’s Institute of Technology & Management",
      location: "Nanded, Maharashtra, India",
      period: "2020 - 2023",
      gpa: "9.51 / 10",
      major: "Computer Applications",
      honors: "",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
      description:
        "Built a strong foundation in programming, database management, and UI development. Gained hands-on experience in frontend and backend web technologies.",
      coursework: [
        "C / C++ Programming",
        "Web Development",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Project Management"
      ],
      achievements: [
        "Graduated with distinction (CGPA 9.51)",
        "Led a team for final-year web development project",
        "Participated in technical symposiums and workshops",
        "Received recognition for academic excellence"
      ]
    }
  ],
  additionalLearning: [
    {
      title: "Artificial Intelligence Fundamentals",
      platform: "IBM SkillsBuild",
      year: "2024"
    },
    {
      title: "Fundamentals of Full Stack Development",
      platform: "ExcelR",
      year: "2024"
    } 
  ]
}

};