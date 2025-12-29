import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

// Sample team data
const teamMembers = [
    {
        id: 1,
        name: "Dev Roy",
        role: "Chief Executive Officer",
        image: "https://intraintel.ai/assets/DevRoyImgV2-873e3ff3.svg",
        description: "Dev Roy is the visionary CEO and founder of IntraIntel.ai, dedicated to transforming how businesses leverage technology to solve critical challenges. With over a decade of experience in business development, cloud strategy, and enterprise architecture, Dev leads IntraIntel.ai in pushing the boundaries of AI, cloud computing, and enterprise solutions. Under Dev’s leadership, IntraIntel.ai focuses on delivering cutting-edge AI-driven platforms that integrate seamlessly across multi-cloud environments, including AWS, Azure, GCP, and hybrid solutions. By prioritizing user-centric design and innovative technology, IntraIntel.ai empowers organizations to streamline data management, enhance productivity, and unlock the potential of their internal data. As a seasoned leader, Dev has spearheaded initiatives generating over $150 million in revenue through successful proposals and strategic partnerships. Prior to founding IntraIntel.ai, Dev led RoarTech Inc., where he oversaw complex cloud migration, digital transformation, and AI integration projects, building a foundation of excellence that drives IntraIntel.ai’s mission to deliver intelligent, adaptive, and transformative technology solutions.",
        expertise: [],
        linkedin: "",
        twitter: "",
        email: "",
        type: "leadership"
    },
    {
        id: 2,
        name: "Brian Hoffman",
        role: "Chief Technology Officer",
        image: "https://intraintel.ai/assets/BrianHoffmanImgV2-baad2579.svg",
        description: "Brian Hoffman brings multiple decades of experience as a product and engineering leader, specializing in cutting-edge technologies like blockchain, peer-to-peer networking, and cryptography. As the CTO of IntraIntel.ai, Brian leads the development of our AI-driven data intelligence platform, ensuring robust, secure, and innovative solutions for enterprise clients. Prior to joining IntraIntel.ai, Brian held leadership roles at companies like Kraken Digital Asset Exchange and Ofinno, where he successfully managed teams to develop pioneering products in the crypto and software engineering domains. His expertise in technical architecture, cloud computing, and product strategy drives IntraIntel.ai’s mission to redefine how businesses interact with their data.",
        expertise: [],
        linkedin: "",
        twitter: "",
        email: "",
        type: "leadership"
    },
    {
        id: 3,
        name: "Shanon Brar",
        role: "Chief Operating Officer",
        image: "https://intraintel.ai/assets/ShanonBrarImgV2-1afa4786.svg",
        description: "Shanon Brar is the Chief Operating Officer at IntraIntel.ai, bringing over 15 years of expertise in small business operation head, business analysis, project management, and software implementation. With a proven track record of driving successful projects across diverse industries including government, healthcare, and finance, Shanon excels in aligning technology solutions with business needs. She has led multi-phase projects, ensuring seamless integration and operational efficiency while maintaining strong communication with stakeholders. Her strategic leadership and experience in Agile methodologies make her a vital asset to IntraIntel.ai, where she is focused on optimizing operations, fostering innovation, and guiding the team to deliver cutting-edge AI solutions. Shanon’s commitment to excellence and her ability to bridge the gap between technical teams and business stakeholders ensure that IntraIntel.ai remains at the forefront of intelligent data solutions.",
        expertise: [],
        linkedin: "",
        twitter: "",
        email: "",
        type: "leadership"
    },
    {
        id: 4,
        name: "Hemant Datta",
        role: "Advisory Team Member",
        image: "https://intraintel.ai/assets/Hemant%20Datta-8564df36.jpeg",
        description: "Hemant Datta is a seasoned Information Technology Executive, entrepreneur, mentor, and advisor with over 20 years of experience managing multimillion-dollar technology initiatives. Renowned for his leadership, strategic vision, and innovative mindset, Hemant has a proven track record of driving technology modernization across various industries. As the co-founder of JHC Technology, he played a pivotal role in guiding organizations and government agencies toward adopting disruptive technologies such as Cloud Computing, developing content management solutions, and implementing strategic business processes to achieve modernization goals. Hemant is a certified SCORE mentor and has served on the Board of Directors for the Alliance for Digital Innovation (ADI), an organization dedicated to advancing the adoption of innovative commercial technologies in government. Beyond the technology sector, he is an active investor in real estate ventures and has previously invested in the food and hospitality industry. Hemant holds an MBA from George Washington University and a Master’s Degree in Information Technology from Virginia Tech, further solidifying his expertise and thought leadership in the field.",
        expertise: [],
        linkedin: "",
        twitter: "",
        email: "",
        type: "advisor"
    },
    {
        id: 5,
        name: "Stephanie Davidson",
        role: "Advisory Team Member",
        image: "https://intraintel.ai/assets/stephanie%20Davidson-1a207b0a.jpeg",
        description: "Stephanie Davidson is a seasoned sales professional with over 25 years of experience in the computer software industry. As the Principal Owner of SwiftGTM Advisors, she leverages her expertise to help early-stage technology companies navigate the complex government marketplace, successfully selling their products and services to federal agencies and their partner ecosystems. Stephanie is highly skilled in the sales process, Software as a Service (SaaS), security and IT solutions, and sales management, with a proven track record of consistent sales success. She combines her deep industry knowledge with an MBA in Marketing from American University’s Kogod School of Business, enabling her to drive business growth and deliver innovative go-to-market strategies. Stephanie’s leadership and strategic insight make her an invaluable partner in helping organizations achieve their technology adoption and modernization goals.",
        expertise: [],
        linkedin: "",
        twitter: "",
        email: "",
        type: "advisor"
    },
    {
        id: 6,
        name: "Raj DasGupta",
        role: "Advisory Team Member",
        image: "https://intraintel.ai/assets/RajDasDutta-b7fa38d7.png",
        description: "Raj DasGupta is an expert in Public and Private Cloud Computing, Software-Defined Networking (SDN), Web-Scale Architecture, and Application and Network Security. He also brings extensive knowledge in AI, machine learning, and cybersecurity analytics, making him a key driver of cutting-edge technological innovations. As the Chief Technology Officer (CTO) of RIVA Solutions, Raj leads the organization’s core capabilities in Cybersecurity, Infrastructure & Cloud, Agile Development, and Emerging Technologies (AI/ML/RPA). With over 20 years of experience, Raj has consistently driven innovation and operational efficiency. Raj is also active in the Angel Investor and VC community, further leveraging his expertise to shape impactful and scalable technology solutions.",
        expertise: [],
        linkedin: "",
        twitter: "",
        email: "",
        type: "advisor"
    }
];

const TeamMemberCard = ({ member, index }) => {
    return (
        <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] flex-shrink-0 snap-center">
            {/* Clean, flat card with no border or shadow */}
            <div className="grid md:grid-cols-[1.6fr_0.8fr] gap-6 md:gap-8 items-center bg-transparent p-4 md:p-8">

                {/* Text Content */}
                <div className="space-y-4 order-2 md:order-1">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                        {/* Number Badge */}
                        <div className="inline-block">
                            <div className="text-5xl md:text-6xl font-light opacity-10 text-brand-blue">
                                0{index + 1}
                            </div>
                        </div>

                        <div>
                            {/* Role */}
                            <div>
                                <span className="text-xs font-bold tracking-wider uppercase text-brand-blue">
                                    {member.role}
                                </span>
                            </div>

                            {/* Name */}
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-text-main">
                                {member.name}
                            </h3>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base leading-relaxed text-text-medium line-clamp-[6] md:line-clamp-none">
                        {member.description}
                    </p>

                    {/* Expertise Tags */}
                    {member.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 text-xs font-medium text-text-medium border border-muted rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Social Links */}
                    <div className="flex gap-2 pt-2">
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name}'s LinkedIn profile`}
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        )}
                        {member.twitter && (
                            <a
                                href={member.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name}'s Twitter profile`}
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                        )}
                        {member.email && (
                            <a
                                href={`mailto:${member.email}`}
                                aria-label={`Email ${member.name}`}
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Card - Clean, no shadow/depth */}
                <div className="relative order-1 md:order-2">
                    <div
                        className="relative rounded-2xl overflow-hidden"
                    >
                        <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const TeamCarousel = () => {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollInterval = setInterval(() => {
            if (isPaused) return;

            const cardWidth = container.querySelector('div').offsetWidth;
            const gap = 24;
            const scrollAmount = cardWidth + gap;

            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll to next
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 4000);

        return () => clearInterval(scrollInterval);
    }, [isPaused]);

    return (
        <section className="relative py-20 md:py-20 px-6 overflow-hidden bg-transparent">


            {/* Header */}
            <div className="text-center mb-16 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6"
                >
                    <div className="section-subtitle px-4 py-2 rounded-full bg-blue-50 inline-block">
                        Our Leadership
                    </div>
                </motion.div>

                <h2 className="section-title">
                    <span className="text-text-main">Meet the minds</span>
                    <br />
                    <span className="section-title-highlight">
                        behind the innovation
                    </span>
                </h2>

                <p className="text-xl leading-relaxed text-text-medium">
                    Brilliant minds driving the future of AI and data intelligence
                </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative w-full z-10">
                {/* Grid Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 md:px-12 scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Spacer removed for better alignment */}

                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={member.id}
                            member={member}
                            index={index}
                        />
                    ))}

                    {/* Spacer for right padding visual balance */}
                    <div className="w-1 md:w-12 flex-shrink-0" />
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 relative z-10">
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full font-bold text-white shadow-xl bg-brand-blue flex items-center gap-2 mx-auto"
                >
                    <span>Join Our Team</span>
                    <ArrowRight className="w-5 h-5" />
                </motion.button>
            </div>

            {/* Global style for hiding scrollbar in Webkit - Moved to globals.css */}
        </section>
    );
};

export default TeamCarousel;
