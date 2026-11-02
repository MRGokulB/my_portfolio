export const portfolioData = {
  personal: {
    name: "Gangaprasad Boddawar",
    title: "Full Stack Systems Architect & AI Engineer",
    tagline: "Building resilient web architectures, autonomous AI pipelines, and high-concurrency cloud backends.",
    email: "boddawargokul@gmail.com",
    phone: "9307902794",
    location: "Nanded, Maharashtra, India | Remote (US Eastern Time Overlap)",
    bio: "Software engineer with 2+ years of production experience building high-performance web applications, distributed APIs, and autonomous AI systems. Shipped enterprise platforms using React 19, Next.js, TypeScript, Python (FastAPI), Node.js, and PostgreSQL (pgvector). Proven track record designing durable asynchronous pipelines, containerized Cloud Run microservices, and compliance-ready AI workflows.",
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
        { name: "TypeScript / JavaScript", level: 92, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Framer Motion & GSAP", level: 90, icon: "🎭" },
        { name: "Redux & State Mgmt", level: 88, icon: "🌀" },
        { name: "Three.js & UI Architecture", level: 85, icon: "🧊" }
      ]
    },
    {
      category: "Backend & Cloud",
      items: [
        { name: "Python & FastAPI", level: 92, icon: "🐍" },
        { name: "Node.js & Express", level: 90, icon: "🟢" },
        { name: "PostgreSQL & pgvector", level: 90, icon: "🐘" },
        { name: "Google Cloud (Cloud Run, Build)", level: 88, icon: "☁️" },
        { name: "Docker & Nginx (Brotli)", level: 88, icon: "🐳" },
        { name: "Prisma, MongoDB & SQLAlchemy", level: 85, icon: "🍃" }
      ]
    },
    {
      category: "Tools & AI Systems",
      items: [
        { name: "LLM Pipelines & RAG", level: 92, icon: "🤖" },
        { name: "Asynchronous Job Queues", level: 90, icon: "🔁" },
        { name: "Git, CI/CD & Secret Manager", level: 92, icon: "🔀" },
        { name: "REST APIs & WebSockets", level: 90, icon: "🔗" },
        { name: "WeasyPrint & PDF Pipelines", level: 88, icon: "📄" },
        { name: "Vercel & Cloud Deployments", level: 90, icon: "🚀" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Enclavia.ai (Enterprise AI Platform)",
      description:
        "An enterprise AI platform and digital infrastructure featuring build-time prerendered SEO/AEO architectures, containerized Brotli Nginx deployments on Cloud Run, and modular AI product suites.",
      image: `${import.meta.env.BASE_URL}assets/architecture-topology.jpg`,
      tags: ["React 19", "Python (FastAPI)", "PostgreSQL (pgvector)", "Cloud Run", "Docker", "GCP"],
      liveUrl: "https://enclavia.ai",
      githubUrl: "https://github.com/MRGokulB",
      featured: true
    },
    {
      id: 9,
      title: "JavaScript Universe (V8 Engine & Memory Visualizer)",
      description:
        "An engine-level, hardware-conscious interactive learning platform modeling V8 runtime internals, execution context stacks, heap memory allocations, and closures with cinematic scroll storytelling.",
      image: `${import.meta.env.BASE_URL}assets/javascript-v8.jpg`,
      tags: ["Next.js", "TypeScript", "GSAP ScrollTrigger", "Tailwind CSS", "V8 Internals", "Micro-Frontends"],
      liveUrl: "https://hub-bay-six-16.vercel.app/",
      githubUrl: "https://github.com/MRGokulB/js-mastery",
      featured: true
    },
    {
      id: 10,
      title: "DSA Universe (Hardware-Level Algorithm Visualizer)",
      description:
        "A decoupled micro-frontend monorepo presenting algorithmic mechanics through reactive animations, silicon-level contiguous memory allocation, pointer arithmetic, and cycle detection.",
      image: `${import.meta.env.BASE_URL}assets/dsa-visualization.jpg`,
      tags: ["Next.js", "TypeScript", "GSAP Animations", "Tailwind CSS", "Data Structures", "Micro-Frontends"],
      liveUrl: "https://home-two-rust.vercel.app",
      githubUrl: "https://github.com/MRGokulB/dsa-universe",
      featured: true
    },
    {
      id: 11,
      title: "Autonomous Proposal Capture & Compliance Engine",
      description:
        "A high-reliability proposal capture system orchestrating solicitation interpretation, pgvector semantic search, async durable job queues, and deterministic WeasyPrint PDF compilation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tags: ["FastAPI", "Python", "pgvector", "PostgreSQL", "Cloud Run", "WeasyPrint"],
      liveUrl: "",
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
      githubUrl: "https://github.com/MRGokulB",
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
  ],

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
      company: "Enclavia (IntraIntel)",
      url: "https://enclavia.ai",
      position: "Full Stack Software Engineer (AI Product Engineering)",
      period: "Nov 2025 – Oct 2026",
      description:
        "Shipped production full-stack web applications, AI agent pipelines, and containerized microservices across multi-cloud Google Cloud environments.",
      achievements: [
        "Architected an enterprise capture desk v2 with FastAPI, PostgreSQL (pgvector), and durable job queues to handle solicitation extraction, compliance checks, and deterministic WeasyPrint PDF generation.",
        "Containerized React frontends using custom Brotli-enabled Nginx configurations deployed to Google Cloud Run with automated Cloud Build CI/CD.",
        "Built an autonomous lead intelligence agent in Node.js and Prisma utilizing Claude tool-calling, background cron scheduling, and GCP Secret Manager for credential isolation.",
        "Implemented an LLM gateway with schema-forced structured outputs, multi-tiered model routing, and per-task token cost accounting.",
        "Authored four comprehensive engineering documentation packs (PLTFMG-48 to 52) and managed GitHub organization permissions for engineering onboarding."
      ]
    },
    {
      id: 2,
      company: "Freelance",
      position: "Full Stack Developer",
      period: "March 2025 – May 2025",
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
      position: "Frontend / Full Stack Developer",
      period: "Jul 2024 – Sep 2025",
      description:
        "Engineered responsive user interfaces and client-side data flows for a production e-commerce platform.",
      achievements: [
        "Developed responsive component architectures with React.js and Tailwind CSS, increasing page interaction speed and mobile engagement.",
        "Integrated REST APIs with centralized client state caching to eliminate redundant network payloads and accelerate route transitions.",
        "Standardized cross-browser rendering, image asset compression, and mobile viewport performance across checkout funnels.",
        "Participated in Agile sprints, managed production releases, and collaborated with design and backend teams."
      ]
    },
    {
      id: 5,
      company: "Mane Mess",
      position: "Full Stack Developer",
      period: "Feb 2025 – Present",
      description:
        "Built a comprehensive digital solution for a homemade tiffin service ('Mane Mess') to streamline operations and enhance customer experience.",
      achievements: [
        "Developed a modern, responsive landing page and user portal using React.js and Tailwind CSS.",
        "Implemented a secure admin dashboard for menu management, order tracking, and user oversight.",
        "Integrated Firebase for real-time database capabilities and secure authentication.",
        "Created a QR-code based daily attendance/tiffin tracking system for efficiency.",
        "Added multi-language support (i18next) to cater to a diverse local customer base."
      ]
    }
  ],

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
