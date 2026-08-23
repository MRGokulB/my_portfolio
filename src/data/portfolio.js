export const portfolioData = {
  personal: {
    name: "Gangaprasad Boddawar",
    title: "Full Stack Developer | AI Product Engineering",
    tagline: "Building immersive, intelligent digital experiences",
    email: "boddawargokul@gmail.com",
    phone: "9307902794",
    location: "Nanded, Maharashtra, India | Remote (US Eastern Time Overlap)",
    bio: "Passionate Full Stack Developer with extensive professional experience creating scalable web applications and intelligent systems. I specialize in React, Next.js, TypeScript, Node.js, PostgreSQL, and AI/ML integrations (LLMs, RAG). I excel at owning features end-to-end—from crafting intuitive UI/UX to designing robust data models and APIs.",
    resume: "/resume.pdf",
    social: {
      github: "https://github.com/MRGokulB",
      linkedin: "https://linkedin.com/in/gangaprasadboddawar",
      twitter: "https://twitter.com/MRGokulB",
      portfolio: "https://github.com/MRGokulB"
    }
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js & Next.js", level: 95, icon: "⚛️" },
        { name: "TypeScript / JavaScript", level: 90, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Framer Motion", level: 90, icon: "🎭" },
        { name: "Redux & State Mgmt", level: 88, icon: "🌀" },
        { name: "Three.js (R3F)", level: 85, icon: "🧊" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js & Express", level: 90, icon: "🟢" },
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "Supabase & Firebase", level: 85, icon: "⚡" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "REST APIs & GraphQL", level: 85, icon: "🔗" },
        { name: "MongoDB & Prisma", level: 85, icon: "🍃" }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "AI/ML (LLMs, RAG, Prompts)", level: 90, icon: "🤖" },
        { name: "Git, GitHub & CI/CD", level: 92, icon: "🔀" },
        { name: "AWS (Lambda, S3)", level: 82, icon: "☁️" },
        { name: "Payment Auth & Stripe", level: 85, icon: "💳" },
        { name: "Vercel Deployments", level: 90, icon: "🚀" },
        { name: "Socket.io", level: 85, icon: "🔁" }
      ]
    }
  ],


  projects: [
    {
      id: 1,
      title: "Enclavia.ai (Enterprise AI Platform)",
      description:
        "A secure, multi-cloud AI intelligence platform deploying specialized agents for regulatory compliance, clinical workflows, and data insights.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "Multi-Cloud", "Enterprise Security"],
      liveUrl: "https://Enclavia.ai",
      githubUrl: "https://github.com/MRGokulB",
      featured: true
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 6,
      title: "Herbs Magic (E-commerce Frontend)",
      description:
        "A modern e-commerce interface designed to improve engagement and performance using React.js and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
      tags: ["React.js", "Tailwind CSS", "REST API", "React Router", "UI Optimization"],
      liveUrl: "https://www.theherbsmagic.com/",
      githubUrl: "https://github.com/MRGokulB",
      featured: false
    },
    {
      id: 7,
      title: "Mane Mess (Smart Tiffin Service)",
      description:
        "A complete digital ecosystem for a tiffin service, featuring user/admin portals, subscription management, and QR-based daily tracking.",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      tags: ["React.js", "Firebase", "Tailwind CSS", "Framer Motion", "i18next"],
      liveUrl: "https://manemess.in",
      githubUrl: "https://github.com/MRGokulB",
      featured: true
    },
    {
      id: 8,
      title: "GCON Nanded (Government College Website)",
      description:
        "Designed, developed, and hosted the official website for Government College of Nursing, Nanded, ensuring an accessible and modern user experience.",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Full Stack Development", "Responsive Design"],
      liveUrl: "https://gconnanded.in",
      githubUrl: "https://github.com/MRGokulB",
      featured: true
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
      company: "Enclavia.ai",
      url: "https://Enclavia.ai",
      position: "Full Stack Developer (AI Product Engineering)",
      period: "Nov 2025 - Present",
      description:
        "Leading the development of Enclavia.ai, an enterprise-grade AI platform focused on secure data intelligence, clinical workflow automation, and multi-agent compliance systems.",
      achievements: [
        "Architected a privacy-first, full-stack application using Next.js, TypeScript, and Node.js for a multi-cloud environment.",
        "Built robust backend services with PostgreSQL and Supabase, implementing row-level security (RLS) policies for strict access control.",
        "Integrated LLM APIs and trained AI capabilities including retrieval-augmented generation (RAG) and anomaly detection.",
        "Designed RESTful APIs and webhook-driven automations to handle complex data models and continuous integrations.",
        "Collaborated with cross-functional teams to ensure high security (HIPAA compliance), optimizing both UI/UX and database queries."
      ]
    },
    {
      id: 2,
      company: "Freelance",
      position: "Full Stack Developer",
      period: "March 2025 - May 2025",
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
      id: 3,
      company: "GCON Nanded",
      url: "https://gconnanded.in",
      position: "Full Stack Developer",
      period: "Aug 2025 – Oct 2025",
      description:
        "Created and hosted the official website for Government College of Nursing, Nanded. Delivered a full-stack platform with a modern UI and robust backend.",
      achievements: [
        "Architected and built the official college website from scratch, focusing on high performance, accessibility, and modern UI/UX.",
        "Implemented secure content delivery and file upload capabilities for administrative notices and student updates.",
        "Ensured standard industry practices and optimized responsive design across all devices.",
        "Deployed and maintained the web hosting infrastructure to ensure reliable uptime for the college community."
      ]
    },
    {
      id: 4,
      company: "Herbs Magic",
      url: "https://www.theherbsmagic.com/",
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
    },
    {
      id: 5,
      company: "Mane Mess",
      position: "Full Stack Developer",
      period: "Feb 2025 - Present",
      description:
        "Built a comprehensive digital solution for a homemade tiffin service ('Mane Mess') to streamline operations and enhance customer experience.",
      achievements: [
        "Developed a modern, responsive landing page and user portal using React.js and Tailwind CSS.",
        "Implemented a secure admin dashboard for menu management, order tracking, and user oversight.",
        "Integrated Firebase for real-time database capabilities and secure authentication.",
        "Created a QR-code based daily attendance/tiffin tracking system for efficiency.",
        "Added multi-language support (i18next) to cater to a diverse local customer base."
      ]
    },

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
