export const portfolioData = {
  personal: {
    name: "Gangaprasad Boddawar",
    title: "Full Stack Developer",
    tagline: "Building immersive digital experiences",
    email: "boddawargokul@gmail.com",
    phone: "9307902794",
    location: "Nanded, Maharashtra, India | Willing to relocate to Pune / Bangalore / Remote",
    bio: "Passionate developer with 5+ years of experience creating cutting-edge web applications. I specialize in React, Three.js, and modern web technologies. I love transforming ideas into beautiful, functional products that users love.",
    resume: "/resume.pdf",
    social: {
      github: "https://github.com/johndev",
      linkedin: "https://linkedin.com/in/johndev",
      twitter: "https://twitter.com/johndev",
      portfolio: "https://johndev.com"
    }
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Three.js", level: 90, icon: "🎮" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Framer Motion", level: 87, icon: "✨" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express", level: 88, icon: "🚂" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "GraphQL", level: 80, icon: "◼️" },
        { name: "REST APIs", level: 92, icon: "🔌" }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 93, icon: "🔀" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Figma", level: 88, icon: "🎨" },
        { name: "Jest", level: 85, icon: "🃏" },
        { name: "Webpack", level: 82, icon: "📦" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "3D Product Configurator",
      description: "An interactive 3D product customization tool built with React Three Fiber. Users can customize colors, materials, and components in real-time.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      tags: ["React", "Three.js", "WebGL", "Framer Motion"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/johndev/project1",
      featured: true
    },
    {
      id: 2,
      title: "AI Dashboard Analytics",
      description: "Modern analytics dashboard with real-time data visualization, AI-powered insights, and comprehensive reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Next.js", "TypeScript", "D3.js", "TailwindCSS"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/johndev/project2",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["MERN Stack", "Stripe", "Redux", "Node.js"],
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/johndev/project3",
      featured: true
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Modern social networking platform with real-time messaging, post sharing, and user interactions.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Socket.io", "Material-UI"],
      liveUrl: "https://project4.com",
      githubUrl: "https://github.com/johndev/project4",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio CMS",
      description: "Headless CMS for managing portfolio content with a beautiful admin interface and API.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Next.js", "Prisma", "PostgreSQL", "tRPC"],
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/johndev/project5",
      featured: false
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Beautiful weather application with 3D visualizations and accurate forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      tags: ["React", "OpenWeather API", "Chart.js"],
      liveUrl: "https://project6.com",
      githubUrl: "https://github.com/johndev/project6",
      featured: false
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
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Leading frontend development team, architecting scalable React applications, and implementing 3D visualizations.",
      achievements: [
        "Reduced bundle size by 40% through code optimization",
        "Implemented Three.js 3D product viewer used by 100K+ users",
        "Mentored 5 junior developers"
      ]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Developed 15+ production applications",
        "Improved application performance by 60%",
        "Integrated third-party APIs and payment systems"
      ]
    },
    {
      id: 3,
      company: "Freelance",
      position: "Web Developer",
      period: "2019 - 2020",
      description: "Created custom websites and web applications for various clients.",
      achievements: [
        "Delivered 20+ client projects on time",
        "Maintained 95% client satisfaction rate",
        "Built responsive and accessible websites"
      ]
    }
  ],

  education: {
    degrees: [
      {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "Stanford University",
        location: "Stanford, CA",
        period: "2015 - 2019",
        gpa: "3.8/4.0",
        major: "Computer Science",
        honors: "Magna Cum Laude",
        logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
        description: "Focused on software engineering, algorithms, and web technologies. Completed senior project on real-time 3D rendering for web applications.",
        coursework: [
          "Data Structures & Algorithms",
          "Web Development",
          "Database Systems",
          "Computer Graphics",
          "Machine Learning",
          "Software Engineering"
        ],
        achievements: [
          "Dean's List all semesters",
          "Best Senior Project Award 2019",
          "Published research paper on WebGL optimization",
          "President of Computer Science Club"
        ]
      },
      {
        id: 2,
        degree: "Master of Science in Software Engineering",
        institution: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        period: "2019 - 2021",
        gpa: "3.9/4.0",
        major: "Software Engineering",
        honors: "Summa Cum Laude",
        logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop",
        description: "Advanced studies in distributed systems, cloud architecture, and modern web frameworks. Thesis focused on performance optimization in React applications.",
        coursework: [
          "Advanced Algorithms",
          "Distributed Systems",
          "Cloud Computing",
          "Advanced Web Technologies",
          "UI/UX Design",
          "Software Architecture"
        ],
        achievements: [
          "Graduate Research Assistant",
          "Published thesis with 100+ citations",
          "TA for Web Development course",
          "Won MIT Hackathon 2020"
        ]
      }
    ],
    additionalLearning: [
      {
        title: "Full Stack Web Development",
        platform: "Coursera",
        year: "2022"
      },
      {
        title: "Advanced React Patterns",
        platform: "Frontend Masters",
        year: "2023"
      },
      {
        title: "Three.js Journey",
        platform: "Three.js Academy",
        year: "2023"
      },
      {
        title: "System Design",
        platform: "Educative",
        year: "2024"
      },
      {
        title: "AWS Solutions Architect",
        platform: "A Cloud Guru",
        year: "2024"
      },
      {
        title: "Docker & Kubernetes",
        platform: "Udemy",
        year: "2024"
      }
    ]
  }
};