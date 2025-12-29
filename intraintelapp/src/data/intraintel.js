import {
    Brain,
    Shield,
    Cloud,
    Gauge,
    Users,
    Database,
    TrendingUp,
    Award,
    Mail,
    Phone,
    MapPin,
    Github,
    Search,
    Zap,
    Bot,
    DollarSign,
    FileText
} from "lucide-react";

import AwsCard from '../assets/aws.svg';
import GoogleCloudCard from '../assets/gcp.svg';
import DropboxCard from '../assets/dropbox.svg';
import AzureCard from '../assets/azure.svg';
import OneDriveCard from '../assets/onedrive.svg';
import BoxCard from '../assets/box.svg';
import TeamsCard from '../assets/teams.svg';
import SalesforceCard from '../assets/salesforce.svg';
import DriveCard from '../assets/gdrive.svg';
import SlackCard from '../assets/slack.svg';
import iCloud from '../assets/icloud.svg';

// ==========================================
// ABOUT PAGE DATA
// ==========================================

export const aboutData = {
    values: [
        {
            icon: Shield,
            title: "Security First",
            desc: "Your data never leaves your environment. Enterprise-grade protection built into every layer.",
            feature: "Zero data transfer outside your infrastructure"
        },
        {
            icon: Cloud,
            title: "Seamless Integration",
            desc: "Connect with 8+ storage platforms. AWS, Azure, GCP, and hybrid solutions.",
            feature: "Multi-cloud flexibility with no vendor lock-in"
        },
        {
            icon: Brain,
            title: "Intelligent Insights",
            desc: "Transform unstructured data into actionable intelligence with advanced AI.",
            feature: "LLM-powered analytics at enterprise scale"
        },
        {
            icon: Gauge,
            title: "Lightning Fast",
            desc: "96% analysis efficiency. Get answers in seconds, not hours.",
            feature: "Real-time processing with sub-second latency"
        },
    ],

    team: [
        {
            name: "Dev Roy",
            role: "Chief Executive Officer",
            bio: "Dev Roy is the visionary CEO and founder of IntraIntel.ai, dedicated to transforming how businesses leverage technology to solve critical challenges. With over a decade of experience in business development, cloud strategy, and enterprise architecture, Dev leads IntraIntel.ai in pushing the boundaries of AI, cloud computing, and enterprise solutions. Under Dev’s leadership, IntraIntel.ai focuses on delivering cutting-edge AI-driven platforms that integrate seamlessly across multi-cloud environments, including AWS, Azure, GCP, and hybrid solutions. By prioritizing user-centric design and innovative technology, IntraIntel.ai empowers organizations to streamline data management, enhance productivity, and unlock the potential of their internal data. As a seasoned leader, Dev has spearheaded initiatives generating over $150 million in revenue through successful proposals and strategic partnerships. Prior to founding IntraIntel.ai, Dev led RoarTech Inc., where he oversaw complex cloud migration, digital transformation, and AI integration projects, building a foundation of excellence that drives IntraIntel.ai’s mission to deliver intelligent, adaptive, and transformative technology solutions.",
            image: "/images/DevRoyImgV2.svg",
            type: "leadership"
        },
        {
            name: "Brian Hoffman",
            role: "Chief Technology Officer",
            bio: "Brian Hoffman brings multiple decades of experience as a product and engineering leader, specializing in cutting-edge technologies like blockchain, peer-to-peer networking, and cryptography. As the CTO of IntraIntel.ai, Brian leads the development of our AI-driven data intelligence platform, ensuring robust, secure, and innovative solutions for enterprise clients. Prior to joining IntraIntel.ai, Brian held leadership roles at companies like Kraken Digital Asset Exchange and Ofinno, where he successfully managed teams to develop pioneering products in the crypto and software engineering domains. His expertise in technical architecture, cloud computing, and product strategy drives IntraIntel.ai’s mission to redefine how businesses interact with their data.",
            image: "/images/BrianHoffmanImgV2.svg",
            type: "leadership"
        },
        {
            name: "Shanon Brar",
            role: "Chief Operating Officer",
            bio: "Shanon Brar is the Chief Operating Officer at IntraIntel.ai, bringing over 15 years of expertise in small business operation head, business analysis, project management, and software implementation. With a proven track record of driving successful projects across diverse industries including government, healthcare, and finance, Shanon excels in aligning technology solutions with business needs. She has led multi-phase projects, ensuring seamless integration and operational efficiency while maintaining strong communication with stakeholders. Her strategic leadership and experience in Agile methodologies make her a vital asset to IntraIntel.ai, where she is focused on optimizing operations, fostering innovation, and guiding the team to deliver cutting-edge AI solutions. Shanon’s commitment to excellence and her ability to bridge the gap between technical teams and business stakeholders ensure that IntraIntel.ai remains at the forefront of intelligent data solutions.",
            image: "/images/ShanonBrarImgV2.svg",
            type: "leadership"
        },
        {
            name: "Hemant Datta",
            role: "Advisory Team Member",
            bio: "Hemant Datta is a seasoned Information Technology Executive, entrepreneur, mentor, and advisor with over 20 years of experience managing multimillion-dollar technology initiatives. Renowned for his leadership, strategic vision, and innovative mindset, Hemant has a proven track record of driving technology modernization across various industries. As the co-founder of JHC Technology, he played a pivotal role in guiding organizations and government agencies toward adopting disruptive technologies such as Cloud Computing, developing content management solutions, and implementing strategic business processes to achieve modernization goals. Hemant is a certified SCORE mentor and has served on the Board of Directors for the Alliance for Digital Innovation (ADI), an organization dedicated to advancing the adoption of innovative commercial technologies in government. Beyond the technology sector, he is an active investor in real estate ventures and has previously invested in the food and hospitality industry. Hemant holds an MBA from George Washington University and a Master’s Degree in Information Technology from Virginia Tech, further solidifying his expertise and thought leadership in the field.",
            image: "/images/Hemant Datta.jpeg",
            type: "advisor"
        },
        {
            name: "Stephanie Davidson",
            role: "Advisory Team Member",
            bio: "Stephanie Davidson is a seasoned sales professional with over 25 years of experience in the computer software industry. As the Principal Owner of SwiftGTM Advisors, she leverages her expertise to help early-stage technology companies navigate the complex government marketplace, successfully selling their products and services to federal agencies and their partner ecosystems. Stephanie is highly skilled in the sales process, Software as a Service (SaaS), security and IT solutions, and sales management, with a proven track record of consistent sales success. She combines her deep industry knowledge with an MBA in Marketing from American University’s Kogod School of Business, enabling her to drive business growth and deliver innovative go-to-market strategies. Stephanie’s leadership and strategic insight make her an invaluable partner in helping organizations achieve their technology adoption and modernization goals.",
            image: "/images/stephanie Davidson.jpeg",
            type: "advisor"
        },
        {
            name: "Raj DasGupta",
            role: "Advisory Team Member",
            bio: "Raj DasGupta is an expert in Public and Private Cloud Computing, Software-Defined Networking (SDN), Web-Scale Architecture, and Application and Network Security. He also brings extensive knowledge in AI, machine learning, and cybersecurity analytics, making him a key driver of cutting-edge technological innovations. As the Chief Technology Officer (CTO) of RIVA Solutions, Raj leads the organization’s core capabilities in Cybersecurity, Infrastructure & Cloud, Agile Development, and Emerging Technologies (AI/ML/RPA). With over 20 years of experience, Raj has consistently driven innovation and operational efficiency. Raj is also active in the Angel Investor and VC community, further leveraging his expertise to shape impactful and scalable technology solutions.",
            image: "/images/RajDasDutta.png",
            type: "advisor"
        },
    ],

    stats: [
        { value: 400, suffix: "+", label: "Clients Served", icon: Users, desc: "Trusted by organizations worldwide" },
        { value: 8, suffix: "+", label: "Storage Integrations", icon: Database, desc: "Multi-cloud flexibility" },
        { value: 96, suffix: "%", label: "Analysis Efficiency", icon: TrendingUp, desc: "Lightning-fast processing" },
        { value: 100, suffix: "%", label: "Customer Satisfaction", icon: Award, desc: "Quality guaranteed" },
    ],

    journey: [
        { year: "2021", title: "The Vision", desc: "Founded with a mission to democratize AI-driven insights for every organization" },
        { year: "2022", title: "First Platform", desc: "Launched our secure data intelligence platform with enterprise-grade security" },
        { year: "2023", title: "Rapid Growth", desc: "Expanded to serve 400+ clients across government, healthcare, and finance" },
        { year: "2024", title: "AI Evolution", desc: "Integrated cutting-edge LLM technology with multi-cloud flexibility" },
    ]
};

export const homeStats = [
    { value: 40, suffix: "%", label: "Reduction in Search Time", icon: Search, desc: "Efficiency at scale" },
    { value: 10, prefix: "$", suffix: "K", label: "Annual Savings/Employee", icon: DollarSign, desc: "Cost effective" },
    { value: 5, suffix: " Minutes", label: "Deployment Time", icon: Zap, desc: "Instant value" },
    { value: 100, suffix: "+", label: "File Formats Supported", icon: FileText, desc: "Universal compatibility" },
];

// ==========================================
// INTEGRATIONS DATA
// ==========================================

export const integrationsData = [
    { name: 'AWS', icon: AwsCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-aws-yellow' },
    { name: 'Google Cloud', icon: GoogleCloudCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-gcloud-blue' },
    { name: 'Dropbox', icon: DropboxCard, gradient: 'from-blue-600 to-blue-700', bg: 'bg-dropbox-blue' },
    { name: 'Azure', icon: AzureCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-azure-cyan' },
    { name: 'OneDrive', icon: OneDriveCard, gradient: 'from-blue-400 to-blue-500', bg: 'bg-odrive-blue' },
    { name: 'Box', icon: BoxCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-box-blue' },
    { name: 'Teams', icon: TeamsCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-lavender' },
    { name: 'Salesforce', icon: SalesforceCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-sf-blue' },
    { name: 'Drive', icon: DriveCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-sharepoint-green' },
    { name: 'Slack', icon: SlackCard, gradient: 'from-blue-500 to-blue-600', bg: 'bg-pink-50' },
    { name: 'GitHub', icon: Github, gradient: 'from-gray-700 to-gray-900', bg: 'bg-github-gray' },
    { name: 'iCloud', icon: iCloud, gradient: 'from-blue-400 to-blue-600', bg: 'bg-icloud-blue' },
];


// ==========================================
// SPOTLIGHT DATA
// ==========================================

export const spotlightData = [
    {
        id: 1,
        video: "https://player.vimeo.com/progressive_redirect/playback/1095657754/rendition/540p/file.mp4?loc=external&signature=44832817229a8aa24b565c83c6ac10553332235e8e12fce8efd7ed28361c3819",
        quote: "IntraIntel transformed how we access our internal data. What used to take hours of searching now takes seconds, and our team can focus on analysis instead of hunting for documents.",
        name: "Sarah Mitchell",
        position: "Director of Operations at TechCorp",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54e4a1a52f55f01a1b4_beautiful-ai-home-%20(2).avif",
    },
    {
        id: 2,
        video: "https://player.vimeo.com/progressive_redirect/playback/1095657722/rendition/540p/file.mp4?loc=external&signature=3b98beabb31841d42aa4658bb0cb4c7147d2edfa92aa894874ebb5e70560e5f9",
        quote: "The security-first approach was exactly what we needed. Our sensitive data stays in our environment while we get the power of AI-driven insights. It's the best of both worlds.",
        name: "Dr. James Chen",
        position: "Chief Information Officer at HealthFirst Medical",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54eaec8c772dcba9fb7_beautiful-ai-home-%20(3).avif",
    },
    {
        id: 3,
        video: "https://player.vimeo.com/progressive_redirect/playback/1095657701/rendition/540p/file.mp4?loc=external&signature=b26ec748770c542f3af1a46073ef572d2a4cb38ee0581f75f105401e9acf67ae",
        quote: "Implementation was seamless. We connected our cloud storage in minutes and our team was up and running the same day. The ROI has been incredible.",
        name: "Michael Rodriguez",
        position: "VP of Technology at Financial Solutions Inc.",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54e18bfa0b7578df401_beautiful-ai-home-%20(4).avif",
    },
];

// ==========================================
// TESTIMONIALS DATA
// ==========================================

export const testimonialsData = [
    {
        id: 1,
        rating: 5,
        quote: "If I were to compare doing the same thing in PowerPoint, I'd say I'm 80% more efficient using Beautiful.ai.",
        name: "Graham Tracey",
        position: "Senior Strategic Consultant, Hobsons",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54ee0d54c7f2ee39b86_beautiful-ai-home-%20(5).avif"
    },
    {
        id: 2,
        rating: 5,
        quote: "This product makes it easy to create beautiful slides without needing to be a PowerPoint expert. As a startup founder, the time saved is incredible—and the professional look of my slide decks makes it seem like I spent hours on design.",
        name: "Clint Berry",
        position: "CEO, Kolla",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54e8968421e7197b634_beautiful-ai-home-%20(6).avif"
    },
    {
        id: 3,
        rating: 5,
        quote: "Beautiful.ai is a game changer for creating beautiful, engaging learning content at unheard of speed. Their smart templates and AI assist tools have helped us to create some of the most amazing stuff we've ever put out.",
        name: "Ryan Heinl",
        position: "Executive Director, Wake Forest University",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54ed1d578b076b78555_beautiful-ai-home-%20(7).avif"
    },
    {
        id: 4,
        rating: 5,
        quote: "Beautiful AI has become a fundamental part of our business. We utilize it nearly exclusively as our 'go-to' tool for all our workshop content designs. The team at Beautiful is responsive, cares about the customer, and has built a superior product.",
        name: "Mitch Mitchem",
        position: "CEO, HIVE Interactive",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54ec980b3947ad02a31_beautiful-ai-home-%20(8).avif"
    },
    {
        id: 5,
        rating: 5,
        quote: "I love Beautiful.ai. It allows me to create unique, visually appealing presentations with pre-made templates to save time. And it's really easy to use. Would definitely recommend.",
        name: "Kara D Bowers M.D.",
        position: "Resident Physician, General Surgery, JFK Medical Center",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54ef2daf3ad8edafd74_beautiful-ai-home-%20(9).avif"
    },
    {
        id: 6,
        rating: 5,
        quote: "Using Beautiful.ai templates breaks the norm and helps you work smarter, think differently, and tell your story more effectively—which, in my opinion, helps you sell more effectively too.",
        name: "Kara Margraf",
        position: "Marketing Manager, Intelagree",
        image: "https://cdn.prod.website-files.com/59deb588800ae30001ec19c9/689de54ef2daf3ad8edafd74_beautiful-ai-home-%20(9).avif"
    }
];

// ==========================================
// RESOURCES DATA
// ==========================================

export const resourcesData = {
    primary: {
        image: "https://sendbird.imgix.net/cms/what-is-an-AI-agent_Sendbird.webp?auto=compress&wm=webp&lossless=0&fit=crop&w=768",
        category: "BLOG",
        title: "What is an AI agent? A complete overview and guide",
        description: "AI agents are a breakthrough technology. This guide explores their capabilities, use cases, benefits, examples, and more to help you understand their transformative potential.",
        href: "https://sendbird.com/blog/what-is-an-ai-agent"
    },
    secondary: [
        {
            image: "https://sendbird.imgix.net/cms/AI-agent-vs-chatbot.webp?auto=compress&wm=webp&lossless=0&fit=crop&w=425",
            category: "BLOG",
            title: "AI agents vs. chatbots: Differences & similarities explained",
            description: "Find out how to choose an AI agent versus an AI chatbot, and the best examples and use cases...",
            href: "https://sendbird.com/blog/ai-agent-vs-chatbot"
        },
        {
            image: "https://sendbird.imgix.net/cms/How-to-build-an-AI-agent_Sendbird.webp?auto=compress&wm=webp&lossless=0&fit=crop&w=425",
            category: "BLOG",
            title: "How to build an AI agent: 8-step tutorial",
            description: "From scratch, build an AI agent with Sendbird's simple, step-by-step guide and AI agent platform.",
            href: "https://sendbird.com/blog/how-to-build-an-ai-agent"
        },
        {
            image: "https://sendbird.imgix.net/cms/what-is-agentic-ai_2xrs.webp?auto=compress&wm=webp&lossless=0&fit=crop&w=425",
            category: "BLOG",
            title: "What is agentic AI? Definition & FAQs",
            description: "Understand the value and benefits of agentic AI and how to leverage agentic AI for your day...",
            href: "https://sendbird.com/blog/what-is-agentic-ai"
        }
    ]
};

export const detailedResourcesData = [
    // New Content Integration (Top Priority)
    // Newsletters
    {
        id: 101,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'Can Smarter Criteria Design Rescue Stalled Clinical Trials?',
        description: 'Recruitment remains one of the biggest barriers to successful clinical trials. Over 80% fail to enroll participants on time.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #1',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovators,</p>
            <p>Recruitment remains one of the biggest barriers to successful clinical trials. Despite advances in trial design and technology, the numbers speak for themselves:</p>
            <ul>
                <li>Over 80% of clinical trials fail to enroll participants on time</li>
                <li>55% of global trials report termination due to low accrual rates</li>
                <li>In the U.S., only 40% of Phase 3 trials achieve enrollment success</li>
                <li>On average, there's a 30% participant attrition rate even in completed trials</li>
            </ul>
            <h3>What’s Going Wrong?</h3>
            <p>A major culprit is inadequate or poorly designed eligibility criteria. When the criteria are too restrictive, recruitment slows down or fails entirely. When criteria are too broad, you risk introducing heterogeneity that dilutes results and includes participants who may face safety risks due to comorbidities or contraindications.</p>
            <p>The real challenge? Balancing feasibility, safety, and generalizability is difficult but necessary! Your eligibility criteria must do more than protect the study’s internal validity. They should ensure timely recruitment, reflect the real-world patient population who will ultimately benefit from the intervention, and avoid unintended exclusion of key subgroups (e.g., older adults, minorities, or those with mild comorbidities). In essence, your study cohort needs to reflect reality, not an idealized version of it.</p>
            <h3>Smart Criteria Simulation</h3>
            <p>What if we fix the eligibility criteria upfront, before the protocol is even finalized? At IntraIntel.ai, we’re building tools to help clinical researchers design smarter, safer, and more inclusive trials, before a single patient is enrolled.</p>
            <p>Our Inclusion/Exclusion Simulation Engine allows you to model real-world patient data (from EHRs, historical studies, or trial registries) to:</p>
            <ul>
                <li>Simulate recruitment feasibility under different criteria combinations</li>
                <li>Identify how changes in eligibility affect subpopulation representation (e.g., age, comorbidities, gender, race)</li>
                <li>Reduce protocol amendments and recruitment delays through proactive design adjustments</li>
            </ul>
            <h3>Protocol Feasibility Shouldn’t be a Gamble!</h3>
            <p>With AI-powered simulation, your team can design trials that are: More inclusive, Scientifically rigorous, And faster to recruit.</p>
            <p>Until then,<br>Team IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 102,
        type: 'newsletter',
        category: 'Newsletter',
        title: '🧪 Can Pharmacies Become the Next Diagnostic Hubs?',
        description: 'More than 90% of Americans live within 5 miles of a pharmacy, yet we’re barely scratching the surface of what pharmacies can offer beyond prescription dispensing.',
        image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #2',
        size: 'tall',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>More than 90% of Americans live within 5 miles of a pharmacy, yet we’re barely scratching the surface of what pharmacies can offer beyond prescription dispensing. With the rise of AI in healthcare, there’s a growing opportunity to turn community pharmacies into decentralized diagnostic centers, giving millions faster access to screenings, insights, and preventive care.</p>
            <h3>Community Pharmacies</h3>
            <p>Pharmacies have always been on the frontlines, but they've rarely had the tools to act beyond that. Most still rely on outdated systems, siloed data, and reactive workflows. But the real future of diagnostics isn’t in high-cost labs or complex hospital infrastructures— it’s in the community pharmacy.</p>
            <p>AI makes it possible:</p>
            <ul>
                <li>Pharmacists can use AI-assisted tools to screen for chronic illnesses, flag high-risk patients, and recommend interventions without being overwhelmed by complex data.</li>
                <li>Real-time analysis of diagnostics (from at-home kits or on-site devices) can be layered with patient history, lifestyle patterns, and regional trends.</li>
            </ul>
            <p>But what’s held us back until now?</p>
            <ul>
                <li>Fragmented data systems</li>
                <li>Privacy and compliance concerns</li>
                <li>Lack of clinical-grade insights delivered in a simple, actionable way</li>
            </ul>
            <p>At IntraIntel.AI, we’re solving exactly that. With our multi-agent AI platform, pharmacies can securely analyze, interpret, and act on patient data without storing or transferring anything.</p>
            <p>Until Next Time,<br>Dev Roy<br>CEO IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 103,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'The Hidden Risk in Your EHR System',
        description: '80% of EHR data is unstructured. Billions of data points, potentially life-saving insights, are locked in formats we can’t easily search, analyze, or share.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #3',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Every year, the U.S. healthcare system generates over 1.2 billion clinical documents, and that number is growing by nearly 48% annually. This explosion of data could fuel better care, smarter decisions, and faster research. We’ve spent the last decade digitizing health records.</p>
            <p>But 80% of EHR data is unstructured. Free-text notes, discharge summaries, radiology reports, referrals, etc. Most of it is barely used. Billions of data points, potentially life-saving insights, are locked in formats we can’t easily search, analyze, or share.</p>
            <h3>What Are We Missing?</h3>
            <p>Unstructured clinical notes often contain:</p>
            <ul>
                <li>Contextual clues about how a patient felt during a visit</li>
                <li>Detailed family history or previous diagnoses</li>
                <li>Behavioral, social, or environmental risk factors</li>
            </ul>
            <p>These insights are rarely captured in structured fields but can be critical for accurate diagnosis, effective treatment, and personalized care. Yet, because they aren’t searchable or interoperable, this data often goes unused in real-world clinical decision-making.</p>
            <h3>The Expensive Consequences</h3>
            <p>When providers don’t have access to complete patient histories, the results are: Misdiagnoses, Redundant tests and treatments, Lower-quality care at a higher cost.</p>
            <p>To deliver truly data-driven care, we must use innovations in AI and natural language processing (NLP) to extract, summarize, and share insights from clinical notes, without adding to clinicians’ workloads!</p>
            <p>Until next time,<br>Dev Roy<br>CEO IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 104,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'Don’t Give Your Data to the Rest of the World',
        description: 'Where is your patient data going? And who has access to it? In the race to adopt AI, this question is often overlooked.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #4',
        size: 'wide',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Where is your patient data going? And who has access to it? In the race to adopt AI and become more efficient, this question is often overlooked. But when the promise of AI-driven insights also comes at the cost of data retention, the risks multiply fast.</p>
            <h3>Risk of AI Data Retention</h3>
            <p>While AI offers tremendous potential to improve healthcare delivery, at the same time, AI applications bring risks and challenges to human rights and medical ethics. Poorly governed AI systems can:</p>
            <ul>
                <li>Compromise personal privacy</li>
                <li>Undermine clinical decision-making autonomy</li>
                <li>Erode patient dignity</li>
                <li>Perpetuate algorithmic bias and discrimination</li>
            </ul>
            <p>In healthcare, sensitive patient data is not just another dataset. It's a high-value, high-risk asset. Even data that appears "anonymized" is far from safe. A landmark 2019 study found that 99.98% of de-identified datasets could be re-identified using just 15 demographic attributes like birth dates, zip codes, and diagnostic images.</p>
            <p>The threat is no longer theoretical. In 2025, a cyberattack on an Australian IVF clinic exposed nearly 1 terabyte of genetic and medical records, some of which were retrievable directly from AI models that had retained sensitive patterns during training.</p>
            <h3>So, What's the Alternative?</h3>
            <p>AI that retains patient data increases both ethical liability and cyber risk. AI doesn't need to store your data to deliver insights.</p>
            <p>At IntraIntel.ai, we securely ring fence the data without retaining it. Our privacy-first platform is fully compliant with HIPAA, and SOC2. By removing the need for storage, we protect patient privacy, reduce cyber risk, and enable compliant innovation.</p>
            <p>Until next time,<br>Dev Roy<br>CEO IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 105,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'Can Your EHR See a Suicide Coming?',
        description: 'Nearly 1 billion people worldwide live with a mental disorder. Timely intervention can prevent symptoms from escalating into crisis.',
        image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #5',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Nearly 1 billion people worldwide live with a mental disorder. Timely intervention can prevent symptoms from escalating into crisis and hospitalization. But far too often, patients first engage with psychiatric services after they’ve already crossed that threshold, arriving in emergency departments or psychiatric facilities in acute distress.</p>
            <h3>Predictive Analytics Misses the Warning Signs</h3>
            <p>Mental health doesn’t collapse overnight. It declines gradually, along a continuum from subtle distress to diagnosable conditions to crisis. Yet most systems treat these as isolated moments instead of an evolving, interconnected story.</p>
            <p>And here’s the crux: Many early warning signs aren’t missing from our data—they were never documented to begin with.</p>
            <ul>
                <li>80% of mental health data in EHRs lives in unstructured notes, not structured fields</li>
                <li>Suicidal ideation and trauma history often go unrecorded due to stigma, privacy concerns, or alert fatigue</li>
                <li>ICD codes miss nuance, often skipping key behavioral indicators</li>
                <li>Siloed behavioral health systems block a full view of patient history across providers</li>
            </ul>
            <p>Predictive models fail to flag risk. Analytics miss context. And care teams are left reacting instead of proactively engaging.</p>
            <h3>What Can You Do About This?</h3>
            <p>At IntraIntel.ai, we believe solutions must go beyond NLP. It’s about designing workflows clinicians believe in, creating interoperable systems that respect patient dignity, and building safeguards that protect the most vulnerable, without compromising on care.</p>
            <p>Until next time,<br>Dev Roy<br>CEO IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 106,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'Are Traditional Risk Calculators Failing Modern Medicine?',
        description: 'Common risk calculators were built for a different era. An era before real-time EMRs, AI, and contextual patient data.',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda48?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #6',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Clinical risk calculators like CHADS-VASC, BARC, and STS have become standard tools in procedural care. Yet every day, clinicians face a quiet but growing frustration:</p>
            <ul>
                <li>Manual data entry slows everything down</li>
                <li>Calculators rarely account for comorbidities, labs, or imaging</li>
                <li>Insights are generic, not patient-specific</li>
                <li>And worst of all, risk discussions happen after the procedure is already scheduled</li>
            </ul>
            <h3>Risk Calculators Miss the Full Picture</h3>
            <p>Today’s clinicians need more. A patient on anticoagulants is cleared for hip surgery, but the DVT risk isn’t flagged in time for pre-op planning. A patient with TIAs is scheduled for carotid endarterectomy, but their perioperative stroke risk wasn’t visible at the point of consent.</p>
            <h3>Comprehensive Risk Evaluation</h3>
            <p>What’s needed isn’t just a “smarter calculator.” It’s a smarter system. One that pulls context-rich data from the EMR automatically, recognizes when a procedure is planned and generates real-time risk insights, and embeds guidance into the actual decision point, not after.</p>
            <p>At IntraIntel.ai, we’re designing Automatic Procedural Risk Calculators that do just that. We believe real transformation happens when risk becomes proactive, not reactive.</p>
            <p>Until next time,<br>Dev Roy<br>CEO IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 107,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'FDA Drug Approval Changes in 2025',
        description: 'The FDA has quietly rolled out some of the most significant updates to the drug approval process in over a decade. These aren’t just bureaucratic tweaks.',
        image: 'https://images.unsplash.com/photo-1576091160550-2187580023f7?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #7',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>The FDA has quietly rolled out some of the most significant updates to the drug approval process in over a decade. And while headlines are focused on “faster reviews,” the real story is deeper and more complex.</p>
            <h3>What’s Changing in 2025</h3>
            <p>These aren’t just bureaucratic tweaks. They signal a shift in how regulatory bodies think about evidence, risk, and post-market accountability.</p>
            <ul>
                <li>Review timelines are accelerating for high-burden disease areas</li>
                <li>Post-market surveillance is now tied to real-world evidence, not just trial endpoints</li>
                <li>AI-powered compliance tools are being greenlit for trial oversight and safety signal detection</li>
            </ul>
            <p>These updates are designed to close the loop between approval and clinical practice. But for health systems, biotechs, and digital therapeutics developers, it introduces a new demand: Evidence doesn’t end at FDA submission; it’s ongoing. Risk monitoring is no longer a quarterly report; it’s continuous.</p>
            <h3>The Age of “Dynamic Approval”</h3>
            <p>We’re entering a new era where regulatory risk is now distributed across the product lifecycle, payers will increasingly request ongoing outcome data post-launch, and digital biomarkers are becoming central to reimbursement.</p>
            <p>At IntraIntel.ai, we’re helping organizations adapt with AI-driven tools that monitor risk signals, automate outcome data aggregation, and surface patient-level insights.</p>
            <p>Until next time,<br>Dev Roy<br>CEO, IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 108,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'Could Your EMR Spot a Stroke Risk Before Surgery (Without You Asking?)',
        description: 'In perioperative care, time is precision. A missed stroke risk can turn a routine procedure into a life-altering event.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #8',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>In perioperative care, time is precision. A missed stroke risk can turn a routine procedure into a life-altering event. Yet, despite thousands of data points in the EMR, stroke risk often goes unnoticed until it’s too late. Why? The EMR is waiting for you to ask the right question. And if you don’t ask, it doesn’t answer.</p>
            <h3>The Blind Spot in Perioperative Stroke Prevention</h3>
            <p>Stroke risk rarely hides in one place. It lives across scattered PDFs, lab reports, radiology notes, EHR silos and in the invisible gaps between clinical systems.</p>
            <ul>
                <li>Undiagnosed atrial fibrillation (AF) not yet coded</li>
                <li>Abnormal ECGs never reconciled with current medication lists</li>
                <li>Prior TIAs buried in scanned neurologist letters</li>
                <li>Missed doses of anticoagulants not flagged in medication reconciliation</li>
            </ul>
            <p>Most EMRs are reactive, not predictive. They’re getting better, but only if we make them smarter.</p>
            <h3>Predictive Perioperative Care</h3>
            <p>We’re embedding these capabilities directly into your EMR workflow, not as another dashboard, but as real-time, context-aware safety nets. Imagine this: Before the procedure is scheduled, your EMR flags a patient with a missed AF history, incomplete anticoagulation, and elevated stroke risk, without you needing to ask.</p>
            <p>Until next time,<br>Dev Roy<br>CEO IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 109,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'What Hospitals Implementing AI Agents Should Consider?',
        description: 'AI agents are entering hospitals… scheduling appointments, summarizing charts. Without constraints, an AI agent can be like an unsupervised resident.',
        image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #9',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>AI agents are entering hospitals… They're scheduling appointments, summarizing charts, even helping write discharge notes. Without the right constraints, an AI agent can be like a first-year resident in a busy ER eager, fast, and dangerously unsupervised.</p>
            <h3>Before Implementing AI Agents</h3>
            <p>AI agents promise automation, speed, and cost savings. But in clinical environments, these benefits come with hidden risks: Misinterpreted clinical context, Unauthorized system access, Workflow chaos, and Breached privacy.</p>
            <h3>The Problem Isn’t What They Can Do. It's What They Should Do…</h3>
            <p>Unlike traditional software, AI agents aren’t rule-based; they’re goal-based. You give them an objective, and they figure out the steps. Before you deploy AI agents in healthcare, ask these questions:</p>
            <ul>
                <li>What is the agent allowed to do and what’s off-limits?</li>
                <li>Is the agent reading the room or just the record?</li>
                <li>What happens when it gets something wrong?</li>
                <li>How will it impact the broader workflow?</li>
            </ul>
            <p>When done right, AI agents don’t just complete tasks, they prevent errors, flag risks, and improve throughput. At IntraIntel, we build smarter agents with role-specific capabilities, workflow-aware logic, and safety-first design.</p>
            <p>Dev Roy<br>CEO | Clinical.IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 110,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'AI in Hospitals: Safe, Scalable… or Risky?',
        description: 'Artificial Intelligence is entering your hospital faster than you may realize. But is it entering safely? Costly medical errors could be the result.',
        image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #10',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Artificial Intelligence is entering your hospital faster than you may realize. But is it entering safely? When AI systems are not aligned with patient safety protocols, they risk doing more harm than good, flagging irrelevant data, reinforcing bias, or silently issuing unsafe clinical recommendations.</p>
            <h3>Costly Medical Errors</h3>
            <p>Adverse events in hospitals pose a serious threat to global patient safety. A landmark report estimated that 45,000 to 98,000 patients die annually in the U.S. due to preventable medical errors. These failures stem not from technology gaps alone, but from deep-rooted structural and cultural barriers.</p>
            <h3>Where AI Can Help, If Deployed Thoughtfully</h3>
            <p>AI can amplify risk management efforts when used intelligently and ethically: Bayesian Models for predicting underreporting, NLP Tools for extracting incidents, and ML Classifiers for categorizing events.</p>
            <h3>Recommended Actions for Hospitals & Health Systems</h3>
            <ul>
                <li>Establish AI Safety Oversight Committees</li>
                <li>Follow Peer-Reviewed Guidance & Conduct Real-World Testing</li>
                <li>Train Clinicians and Inform Patients</li>
                <li>Maintain an AI Inventory + Emergency Protocols</li>
            </ul>
            <p>At IntraIntel, we design AI agents for real-world clinical use with built-in safety nets.</p>
            <p>Dev Roy<br>CEO, IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 111,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'How Solaris Endovascular Is Using AI to Reinvent Investor Due Diligence?',
        description: 'Over 60% of MedTech funding delays stem from inefficient documentation workflows. Solaris Endovascular is changing that with AI.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #11',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Even when the clinical science is strong, investor due diligence remains one of the slowest, most fragmented steps in commercialization. Solaris Endovascular, a pioneer in vascular stent technologies, decided to change that by partnering with Clinical.IntraIntel.ai to automate and accelerate the investor due diligence process.</p>
            <h3>The Goal</h3>
            <p>To transform the traditional diligence cycle into a 4–6 week, AI-verified process that produces evidence-backed reports, automated risk summaries, and investor-ready documentation directly from the company’s data room.</p>
            <h3>How the Due Diligence Engine Works</h3>
            <ul>
                <li>Ingests and organizes the entire Solaris data room</li>
                <li>Automates 176+ due diligence questions</li>
                <li>Auto-generates a 30–40 page Due Diligence Report</li>
                <li>Drafts a Private Placement Memorandum (PPM)</li>
            </ul>
            <p>By connecting every data point from clinical results to financials, Clinical.IntraIntel.ai transforms due diligence from a bottleneck into a competitive advantage.</p>
            <p>Dev Roy<br>CEO, IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 112,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'Are You Falling Victim to the MedTech "Communication Gap"?',
        description: 'Nearly 60% of MedTech launch delays stem from inefficient communication workflows. See how we helped TransRadial Technologies.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #12',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Recent studies confirm that nearly 60% of MedTech launch delays stem from inefficient communication workflows between your clinical, marketing, and commercial teams. That’s exactly the gap we’re helping TransRadial Technologies close.</p>
            <h3>TransRadial Technologies x Clinical.IntraIntel.ai</h3>
            <p>TransRadial’s SĀPH™ System is redefining vascular closure in radial access procedures. To accelerate adoption and strengthen clinician confidence, TransRadial has partnered with Clinical.IntraIntel.ai to power evidence-driven communication.</p>
            <h3>The Bigger Picture</h3>
            <p>The TransRadial partnership demonstrates how MedTech communication can evolve—from fragmented, manual processes to AI-enabled clinical clarity. Clinical.IntraIntel.ai enables companies to cut documentation turnaround by 60%, increase FDA alignment probability, and equip hospitals with real-time educational access.</p>
            <p>Dev Roy<br>CEO, IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 113,
        type: 'newsletter',
        category: 'Newsletter',
        title: 'What If Hospitals Had a Real-Time Patient Safety Dashboard?',
        description: 'Patient safety isn’t just a metric. It’s the foundation of trust, outcomes, and operational excellence.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
        meta: 'Newsletter #13',
        size: 'normal',
        publishedDate: 'Dec 2024',
        content: `
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-xl text-slate-600 font-light">Healthcare Innovator,</p>
            <p>Patient safety isn’t just a metric. It’s the foundation of trust, outcomes, and operational excellence. Yet for decades, risk management has remained reactive, intervening only after adverse events occur. That era is ending…. Real-time safety dashboards are enabling hospitals to detect risks before they escalate.</p>
            <h3>Real-Time Safety Dashboards</h3>
            <ul>
                <li>Apollo Hospitals saw an 80% reduction in Code Blue alerts by deploying AI-driven monitoring of patient vitals.</li>
                <li>In overcrowded ERs, real-time visualizations simplify data, reducing diagnostic mistakes by 30%.</li>
                <li>Nurse workload dropped by 70% where dashboard alerts were used to triage tasks.</li>
            </ul>
            <h3>National Healthcare Safety Dashboard</h3>
            <p>The National Healthcare Safety Dashboard (launched Dec 2024) now supports alignment with AHRQ and CMS standards. It sends real-time alerts on protocol breaches before they trigger audits or regulatory action.</p>
            <p>Despite their promise, most dashboards fail to deliver impact because of three common challenges: Integration Challenges, Data Trustworthiness, and Cultural Resistance.</p>
            <p>Clinical.IntraIntel.ai is revolutionizing endpoint validation in clinical trials, replacing manual guesswork with real-time, AI-powered predictions aligned to FDA-accepted endpoints.</p>
            <p>Dev Roy<br>CEO, IntraIntel.ai</p>
        </div>
        `
    },
    {
        id: 20,
        type: 'guide',
        category: 'Whitepaper',
        title: 'Multi-Storage Data Solution for the Future Using LLM and Generative AI',
        description: "We're thrilled to unveil a groundbreaking whitepaper that explores how generative AI and LLMs are revolutionizing data management, enabling scalable, secure, and efficient storage solutions.",
        image: '/assets/multi_storage_photorealistic_1765528988026.png',
        meta: '18 pages • PDF',
        size: 'large',
        rating: '5.0/5',
        downloads: '900+',
        downloadUrl: '#',
        learnings: [
            "Explosive Data Growth: Strategies for managing skyrocketing data volumes.",
            "Hybrid Architectures: Adopting flexible storage models.",
            "Unified Data Fabric: Creating a cohesive data ecosystem.",
            "Cybersecurity: Implementing robust security for AI-driven insights."
        ],
        content: `
      <div class="space-y-8">
        <div class="prose prose-lg prose-slate max-w-none">
          <p class="text-xl text-slate-600 leading-relaxed font-light">
            <strong>Our founder and CEO, Dev Roy, delves deeply into the fascinating intersection of Large Language Models (LLMs) and modern data architectures.</strong>
          </p>
          
          <p>The paper explores how generative AI, powered by LLMs, is reshaping and revolutionizing data management, enabling scalable, secure, and efficient storage solutions. 🌐🔒</p>

          <p>As data growth skyrockets, and with more organisations adopting LLMs, devising a forward-looking multi-storage strategy has become crucial. 📈🗂️</p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded-r-lg">
            <strong>Our whitepaper outlines a strategic roadmap for deploying multi-storage solutions tailored to match the evolving AI-driven workloads.</strong>
          </div>

          <h3>Key Trends Driving Multi-Storage Solutions</h3>
          <ul class="grid sm:grid-cols-2 gap-4 not-prose">
            <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-slate-100">🚀 <b>Explosive data growth</b></li>
            <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-slate-100">🚀 <b>Adoption of hybrid storage architectures</b></li>
            <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-slate-100">🚀 <b>AI-driven data insights</b></li>
            <li class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-slate-100">🚀 <b>Cybersecurity Imperatives</b></li>
          </ul>

          <p class="mt-8">But, as with any revolutionary approach, challenges do exist. We highlight these challenges and present Intraintel.ai's exciting vision for solution approaches, including:</p>
          
          <ul class="space-y-2 mt-4">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span><b>Unified data fabric</b></li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span><b>Cyberstorage integration</b></li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span><b>Scalable Cloud-native platforms</b></li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span><b>AI-enhanced storage orchestration</b></li>
          </ul>

          <p class="mt-8 text-slate-700 bg-amber-50 p-4 rounded-lg border border-amber-100">
            🎁 Be it for <b>Personalized AI Assistants, Enterprise Knowledge Graphs, Real-Time Analytics, or Edge Computing for IoT</b>, you'll find valuable insights and use cases in our paper 🎁.
          </p>
          
          <p class="text-center font-bold text-blue-600 mt-8">Why wait? Follow the link to our resource page and unlock this treasure trove of knowledge!</p>
          <div class="text-center mt-8">
             <p>Unless...</p>
             <p class="font-bold text-slate-900">Intraintel.ai Team 🚀🌐</p>
          </div>
        </div>

        <!-- Embedded Lead Capture Form -->
        <div class="bg-slate-50 p-8 rounded-2xl shadow-inner border border-slate-100">
          <h3 class="text-2xl font-bold text-center text-slate-900 mb-6">Download the Guide PDF</h3>
          <form class="space-y-4 max-w-md mx-auto" onsubmit="event.preventDefault(); alert('Thank you! The guide has been sent to your email.');">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1 capitalize">First Name</label>
                <input type="text" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Jane" />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1 capitalize">Last Name</label>
                <input type="text" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1 capitalize">Email</label>
              <input type="email" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="jane@company.com" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1 capitalize">Company Name</label>
              <input type="text" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Acme Inc." />
            </div>
            <button type="submit" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5">
              Get the Guide
            </button>
            <p class="text-xs text-center text-slate-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
      </div>
    `
    },
    {
        id: 22,
        type: 'video',
        category: 'Product',
        title: 'About IntraIntel.ai',
        description: 'At IntraIntel.AI, we aim to empower individuals and organizations to confidently make data-driven decisions. We understand that your data is not just a collection of numbers and text; it is a valuable asset that is key to unlocking insights, driving innovation, and achieving your goals. That\'s why we\'ve created a platform that allows you to harness the power of Generative AI within the secure boundaries of your own storage and data files.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        videoUrl: 'https://www.youtube.com/embed/OYkVwt94x9M',
        meta: '2 min watch',
        size: 'wide',
        views: '5.2k',
        publishedDate: 'Dec 10, 2024'
    },
    {
        id: 21,
        type: 'guide',
        category: 'eBook',
        title: 'The Ultimate Guide to AI Agents',
        description: 'Artificial Intelligence (AI) is opening up exciting new possibilities, and at the center of this transformation are AI agents. These powerful software systems act with autonomy, learning and adapting to deliver smarter, faster, and more efficient solutions.',
        image: '/assets/ai_agents_macro_neurons.png',
        meta: '30 pages • PDF',
        size: 'normal',
        rating: '4.8/5',
        downloads: '1.5k+',
        downloadUrl: '#',
        learnings: [
            "Autonomy: Operate without constant human guidance, enabling seamless task execution.",
            "Reactivity: Quickly respond to real-time changes in data or the environment.",
            "Proactivity: Anticipate needs and take initiative to achieve specified goals.",
            "Learning Ability: Continuously improve through advanced learning algorithms and adapt with experience."
        ],
        content: `
        <p>From personalized customer experiences to streamlined business operations, AI agents are revolutionizing how we live and work. But what exactly are AI agents? How do they function? And what role can they play in shaping the future of your organization?</p>
        
        <h3>Categories of AI Agents</h3>
        <p>AI agents come in different types, each designed to handle specific tasks based on their complexity and functionality.</p>
        <ol>
            <li><strong>Reactive Agents</strong><br>Respond to immediate changes without retaining historical data. Example: Online customer support chatbots 💬 that address queries in real-time.</li>
            <li><strong>Deliberative Agents</strong><br>Use internal models to plan ahead and make strategic decisions. Example: Navigation systems in autonomous cars 🚗 predicting and avoiding obstacles.</li>
            <li><strong>Learning Agents</strong><br>Leverage data to evolve their decision-making processes. Example: E-commerce recommendation engines 🛍️ tailoring suggestions to user behavior.</li>
            <li><strong>Collaborative Agents</strong><br>Operate as part of a multi-agent network to tackle large-scale challenges. Example: Factory systems where separate AI agents oversee production lines 🏭.</li>
        </ol>

        <h3>Industry Highlights</h3>
        <ul>
            <li><strong>Healthcare 🩺</strong> AI agents assist with diagnostics, clinical decision-making, and patient management.</li>
            <li><strong>Finance 💰</strong> From fraud detection to personalized investment strategies, AI agents manage complex financial data in real-time.</li>
            <li><strong>Retail 🛒</strong> Powerful recommendation systems and inventory management solutions minimize waste.</li>
            <li><strong>Customer Support 📞</strong> AI-driven chatbots deliver 24/7 responses and personalized service experiences.</li>
        </ul>

        <h3>Future Trends in AI Agents</h3>
        <p>AI agents are not just about catching up—they’re about shaping the future. Emerging trends include:</p>
        <ul>
            <li><strong>Emotionally Intelligent Agents 🧑‍🤝‍🧑</strong> Agents that can sense and respond to human emotions.</li>
            <li><strong>Multi-Agent Ecosystems 🌐</strong> Teams of AI agents working collaboratively to solve global challenges.</li>
        </ul>
    `
    },
    {
        id: 23,
        type: 'blog',
        category: 'Blog',
        title: 'Unlocking the Future of Enterprise AI with Large Language Models (LLMs)',
        description: 'Artificial Intelligence is no longer just a futuristic concept; it\'s a driving force behind modern innovation. For enterprises navigating the complexities of vast datasets and decision-making, Large Language Models (LLMs) offer a groundbreaking approach.',
        image: '/assets/enterprise_ai_fiber_flow_1765529051142.png',
        meta: '5 min read',
        size: 'normal',
        rating: '4.8/5',
        downloads: '1.2k+',
        downloadUrl: '#',
        author: 'David Kim',
        publishedDate: 'Dec 05, 2024',
        learnings: [
            "Hardware Independence: Cost-effective scalability using CPUs instead of expensive GPUs.",
            "Real-Time Insights: Access actionable data in seconds with xLLM technology.",
            "Explainable AI (XAI): Transparent decision-making processes you can trust.",
            "Constraint-Free Compliance: Secure data synthesizing without privacy breaches."
        ],
        content: `
        <p><strong>Why Enterprise AI Is the Key to Staying Competitive</strong></p>
        <p>AI implementations, particularly LLMs, are transforming businesses before our eyes. From generative AI applications to retrieval-augmented generation (RAG) models, enterprise AI offers the promise of greater efficiency, cost savings, and unparalleled analytical power. Companies like IntraIntel.ai are pushing boundaries by delivering solutions that simplify infrastructure needs via CPU-based LLMs while maintaining high scalability and precision.</p>
        
        <p><strong>But why is AI so vital now?</strong> Simply put: enterprises generate vast quantities of unstructured data that traditional tools struggle to manage. AI-driven tools, like Enterprise xLLM, make previously untapped data actionable by providing insights, predicting trends, and automating complex workflows. The result? Enhanced decision-making and a clearer competitive edge.</p>

        <h3>Revolutionizing Business with LLMs and Generative AI</h3>
        <p>Enterprise adoption of LLMs has been accelerated with solutions like Enterprise xLLM, which boasts:</p>
        <ul>
            <li><strong>No GPU Requirement</strong> - Traditional AI setups depend on costly GPUs, but xLLM delivers high performance using standard CPUs—unlocking AI for businesses of all sizes.</li>
            <li><strong>Explainable AI (XAI)</strong> - Enhance decision-making transparency. With clear model outputs, you can trust what the AI recommends.</li>
            <li><strong>Real-time Fine-tuning</strong> - Adjust your model on the go to reflect changes in your business or industry, staying ahead of competitors.</li>
        </ul>
        
        <p>For example, Fortune 100 companies have already seen a 40% reduction in time spent searching for corporate documents after deploying AI-driven knowledge management tools powered by xLLM.</p>

        <h3>AI Applications in Action—Case Studies</h3>
        <ul>
            <li><strong>Streamlined Customer Support:</strong> 25% improvement in satisfaction and 40% faster resolution.</li>
            <li><strong>Healthcare Innovations:</strong> 15% increase in accuracy for identifying early health risks.</li>
            <li><strong>Legal Document Automation:</strong> 60% reduction in review times and $2.5M annual savings.</li>
            <li><strong>Retail Forecasting:</strong> 35% improved accuracy and 20% operational cost reduction.</li>
        </ul>

        <h3>What’s Next for Enterprise AI?</h3>
        <ul>
            <li><strong>Auto-Indexing and Cataloging:</strong> Automated indexing making data management seamless.</li>
            <li><strong>Enhanced User Interaction:</strong> Improved interfaces for debugging and fine-tuning.</li>
            <li><strong>Probabilistic AI Advancements:</strong> Better statistical methods for complex datasets.</li>
        </ul>

        <p><strong>Why Choose IntraIntel.ai?</strong> We specialize in scalable, flexible, and secure AI solutions. From healthcare to finance, we speak your industry’s language.</p>
    `
    },
    {
        id: 24,
        type: 'blog',
        category: 'Blog',
        title: 'The Future of AI Governance for Enterprises: A Strategic Framework',
        description: 'In an era where AI is redefining industries, enterprises must prioritize responsible AI governance to balance innovation, compliance, and ethical considerations. This guide explores actionable strategies for implementing robust AI governance frameworks.',
        image: '/assets/governance_glass_monolith_1765539139922.png',
        meta: '7 min read',
        size: 'normal',
        rating: '4.9/5',
        downloads: '850+',
        downloadUrl: '#',
        author: 'Sarah Chen',
        publishedDate: 'Dec 08, 2024',
        learnings: [
            "Centralized Governance: Establishing cross-functional committees for oversight.",
            "System Inventory: Maintaining automated catalogs of all AI assets.",
            "Risk Mitigation: Proactive identification of bias and security vulnerabilities.",
            "Dynamic Adaptation: Evolving policies alongside regulations and tech."
        ],
        content: `
        <p><strong>Why AI Governance Matters for Enterprises</strong></p>
        <p>The adoption of AI technologies in enterprises has skyrocketed, offering transformative capabilities across operations, decision-making, and customer engagement. However, with great power comes great responsibility—enterprises must ensure AI systems are transparent, compliant, and ethical. A well-defined AI governance strategy ensures AI innovation remains aligned with organizational values and regulatory requirements.</p>

        <h3>Key Actions to Implement Enterprise AI Governance</h3>
        
        <h4>1. Establish a Centralized AI Governance Committee</h4>
        <p>Enterprises need a cross-functional governance body that oversees AI projects, ensures accountability, and promotes ethical standards.</p>
        <ul>
            <li><strong>Define Oversight Protocols:</strong> Standardize processes for AI system evaluation and approval.</li>
            <li><strong>Ensure Cross-Team Collaboration:</strong> Bring together legal, compliance, IT, and business leaders.</li>
        </ul>

        <h4>2. Create an Inventory of AI Systems</h4>
        <p>Maintaining visibility into enterprise AI systems is essential for compliance and operational control. Enterprises must catalog AI solutions, including details on their data sources, algorithms, and risk profiles.</p>
        <ul>
            <li><strong>Automated AI Audits:</strong> Use tools to monitor AI system usage and document performance.</li>
            <li><strong>Transparent Reporting:</strong> Maintain real-time dashboards of AI projects and their compliance status.</li>
        </ul>

        <h4>3. Map and Mitigate AI Risks</h4>
        <p>Enterprises should proactively identify and address risks associated with AI systems, such as bias, inaccuracies, and security vulnerabilities.</p>
        <ul>
            <li><strong>Risk Frameworks:</strong> Adopt standards like NIST’s AI Risk Management Framework.</li>
            <li><strong>Bias Mitigation:</strong> Apply fairness testing tools to identify and correct algorithmic bias.</li>
        </ul>

        <h4>4. Foster Enterprise-Wide AI Literacy</h4>
        <p>To effectively govern AI, enterprises must build a workforce that understands AI fundamentals and governance principles.</p>
        
        <h3>Beyond Compliance: Building Ethical and Transparent AI</h3>
        <p>Enterprises should strive to exceed basic compliance requirements by integrating ethical AI principles into every stage of development and deployment. Aligning with frameworks like ISO/IEC 42001 and fostering industry collaborations can drive long-term success.</p>

        <h3>Results: Empowering Enterprises with Responsible AI</h3>
        <p>Effective AI governance delivers tangible benefits that drive enterprise innovation, trust, and operational excellence:</p>
        <ul>
            <li><strong>Enhanced Transparency:</strong> Clear oversight and documentation of AI processes.</li>
            <li><strong>Risk Mitigation:</strong> Proactive measures to address AI-related biases and failures.</li>
            <li><strong>Improved ROI:</strong> Scalable and compliant AI solutions that accelerate value creation.</li>
        </ul>
        
        <p><strong>Contact us</strong> today to build a future-proof AI governance strategy that drives responsible growth.</p>
    `
    },


    // Existing Resources

    {
        id: 1,
        type: 'guide',
        category: 'Featured Guide',
        title: 'The Complete Enterprise AI Handbook 2024',
        description: 'A definitive 50-page guide to implementing, scaling, and securing Generative AI in large organizations.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        meta: '50 pages • PDF',
        size: 'large',
        featured: true,
        rating: '4.9/5',
        downloads: '2.5k+',
        learnings: [
            "Architectural patterns for scalable RAG systems",
            "Security compliance checklists (SOC2, GDPR)",
            "Cost optimization strategies for LLM inference",
            "Benchmarking framework for model selection"
        ]
    },
    {
        id: 4,
        type: 'blog',
        category: 'Case Study',
        title: 'Scaling to 10M Documents',
        description: 'How we optimized our vector database.',
        image: '/assets/scaling_infinite_archive_1765539174933.png',
        meta: '6 min read',
        size: 'normal',
        author: 'Sarah Chen',
        publishedDate: 'Oct 15, 2024',
        content: `
      <p class="lead text-xl md:text-2xl text-text-medium mb-8 font-light leading-relaxed">
        In the rapidly evolving landscape of artificial intelligence, the ability to retrieve accurate and relevant information is just as critical as the generation capabilities of the models themselves. As enterprises scale their AI operations, they often hit a wall: <strong>latency</strong> and <strong>accuracy</strong> at scale.
      </p>

      <h2 class="text-2xl md:text-3xl mt-12 mb-6 font-bold text-text-main">The Challenge of Scale</h2>
      <p class="text-text-medium mb-6 leading-relaxed">
        When dealing with millions of documents, traditional keyword search falls short. Semantic search offers a solution, but it introduces its own set of complexities. How do you maintain sub-second response times when querying a vector database containing billions of embeddings?
      </p>

      <figure class="my-10 p-6 bg-surface-2 rounded-2xl border border-border">
          <blockquote class="text-xl italic text-text-main font-serif leading-relaxed">
              "The future of enterprise AI lies not just in model size, but in the efficiency of retrieval systems. Context is king, and speed is queen."
          </blockquote>
          <figcaption class="mt-4 text-sm text-text-medium font-medium uppercase tracking-wide">
              — Dr. Emily Zhang, Chief AI Architect
          </figcaption>
      </figure>

      <h2 class="text-2xl md:text-3xl mt-12 mb-6 font-bold text-text-main">Implementing the Solution</h2>
      <p class="text-text-medium mb-6 leading-relaxed">
        We found that a hybrid approach yields the best results. By combining dense vector retrieval with sparse keyword search (BM25), we can capture both semantic meaning and exact keyword matches.
      </p>
      
      <ul class="space-y-4 my-6">
          <li class="flex items-start gap-3">
            <span class="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
            <span class="text-text-main"><strong>Vector Database Optimization:</strong> Using HNSW indexes for approximate nearest neighbor search.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
            <span class="text-text-main"><strong>Semantic Caching:</strong> Storing common queries and their embeddings to bypass model inference.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
            <span class="text-text-main"><strong>Reranking:</strong> Using a cross-encoder to re-score the top K results for higher precision.</span>
          </li>
      </ul>

      <p class="text-text-medium mt-6 leading-relaxed">
        This architecture allowed us to scale to 10 million documents while keeping P99 latency under 200ms.
      </p>
    `
    },
    {
        id: 3,
        type: 'blog',
        category: 'Engineering',
        title: 'Semantic Search vs Keyword Search',
        description: 'Understanding the core differences.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        meta: '4 min read',
        size: 'normal',
        author: 'Alex Rivera',
        publishedDate: 'Oct 28, 2024',
        content: `
      <p class="lead text-xl text-text-medium mb-6">Semantic search represents a paradigm shift...</p>
      <p class="text-text-medium">Keywords are tied to potential token matches...</p>
    `
    },
    {
        id: 2,
        type: 'video',
        category: 'Tutorial',
        title: 'Connecting Data Sources',
        description: 'Quick start video.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        meta: '5 min watch',
        size: 'tall',
        views: '1.2k',
        publishedDate: 'Nov 20, 2024'
    },
    {
        id: 5,
        type: 'video',
        category: 'Webinar',
        title: 'Q4 Product Roadmap: What\'s Coming Next',
        description: 'Join our product team as they unveil the future of IntraIntel.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
        meta: '45 min',
        size: 'wide',
        views: '3.4k',
        publishedDate: 'Dec 01, 2024'
    },
    {
        id: 11,
        type: 'guide',
        category: 'Integration',
        title: 'API Integration Patterns',
        description: 'Seamlessly connecting IntraIntel with your existing stack.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
        meta: '12 pages • PDF',
        rating: '4.7/5',
        downloads: '1.2k+',
        learnings: [
            "REST vs GraphQL for AI",
            "Streaming response handling",
            "Rate limiting strategies",
            "Error handling patterns"
        ]
    },
    {
        id: 14,
        type: 'guide',
        category: 'Architecture',
        title: 'Scalable RAG Architectures',
        description: 'Designing retrieval-augmented generation systems for scale.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        meta: '25 pages • PDF',
        rating: '5.0/5',
        downloads: '3k+',
        learnings: [
            "Vector database sharding",
            "Hybrid search implementation",
            "Latency optimization",
            "Data privacy in RAG"
        ]
    }
];

export const agentsData = [
    {
        id: 'finance',
        title: 'Finance & Accounting',
        subtitle: 'Autonomous Financial Infrastructure',
        icon: "Landmark",
        desc: "Orchestrates the entire financial lifecycle from invoice generation to complex forecasting. Works as an always-on auditing system that ensures zero-trust accuracy across all ledgers.",
        accent: "blue",
        metrics: ["99.9% Accuracy", "<50ms Latency", "Real-time Audit"],
        integrations: ["Xero", "Quickbooks", "SAP", "Netsuite"],
        capabilities: [
            { id: 'f1', title: 'Invoice Intelligence', desc: 'Auto-captures, validates, and processes invoices.', icon: "FileText" },
            { id: 'f2', title: 'Smart Reconciliation', desc: 'Matches transactions across banks & ledgers instantly.', icon: "Check" },
            { id: 'f3', title: 'Cash Flow Forecast', desc: 'Predictive modeling for liquidity management.', icon: "TrendingUp" },
            { id: 'f4', title: 'Expense Auditing', desc: 'Detects anomalies and policy violations in real-time.', icon: "Shield" }
        ]
    },
    {
        id: 'bi',
        title: 'Business Intelligence',
        subtitle: 'Strategy & Insights Engine',
        icon: "TrendingUp",
        desc: "Transforms raw data into strategic narratives. It doesn't just display charts; it explains 'why' focusing on actionable intelligence that drives decision-making.",
        accent: "indigo",
        metrics: ["10x Faster Reports", "Natural Language Q&A", "Predictive Alerts"],
        integrations: ["Snowflake", "Tableau", "PowerBI", "Salesforce"],
        capabilities: [
            { id: 'b1', title: 'Narrative Reporting', desc: 'Auto-generates written executive summaries.', icon: "FileText" },
            { id: 'b2', title: 'Trend Detection', desc: 'Identifies market shifts before they happen.', icon: "Activity" },
            { id: 'b3', title: 'Competitor Analysis', desc: 'Real-time monitoring of market landscape.', icon: "Globe" },
            { id: 'b4', title: 'Scenario Planning', desc: 'Simulates financial outcomes for strategic bets.', icon: "Layers" }
        ]
    },
    {
        id: 'ops',
        title: 'Operations & Workflow',
        subtitle: 'Process Orchestration Layer',
        icon: "Workflow",
        desc: "The silent engine of productivity. Automates complex, multi-step workflows that span across departments, removing bottlenecks and manual handoffs.",
        accent: "emerald",
        metrics: ["80% Less Admin", "24/7 Uptime", "Zero Handoff Lag"],
        integrations: ["Jira", "Slack", "ServiceNow", "Asana"],
        capabilities: [
            { id: 'o1', title: 'Task Orchestration', desc: 'Assigns and tracks cross-functional tasks.', icon: "Layers" },
            { id: 'o2', title: 'Document Automation', desc: 'Generates contracts, policies, and memos.', icon: "FileText" },
            { id: 'o3', title: 'Vendor Management', desc: 'Streamlines onboarding and compliance checks.', icon: "Users" },
            { id: 'o4', title: 'Resource Allocation', desc: 'Optimizes staff and asset utilization.', icon: "Server" }
        ]
    },
    {
        id: 'knowledge',
        title: 'Knowledge Management',
        subtitle: 'Institutional Memory System',
        icon: "Database",
        desc: "Turns your company's scattered documents into a unified, queryable brain. Eliminates the 'where is that file?' problem forever.",
        accent: "amber",
        metrics: ["Sub-second Search", "100+ Formats", "Smart Citations"],
        integrations: ["SharePoint", "Google Drive", "Confluence", "Notion"],
        capabilities: [
            { id: 'k1', title: 'Contextual Search', desc: 'Understands intent, not just keywords.', icon: "Search" },
            { id: 'k2', title: 'Auto-Tagging', desc: 'Organizes chaotic folders automatically.', icon: "Layers" },
            { id: 'k3', title: 'Policy Extraction', desc: 'Instantly answers compliance questions.', icon: "Shield" },
            { id: 'k4', title: 'Knowledge Gap ID', desc: 'Highlights missing documentation areas.', icon: "AlertTriangle" }
        ]
    },
    {
        id: 'conversational',
        title: 'Conversational AI',
        subtitle: 'Internal & External Interaction',
        icon: "MessageSquare",
        desc: "Delivers human-quality interactions at infinite scale. Handles complex customer queries and internal support tickets with empathy and accuracy.",
        accent: "violet",
        metrics: ["60% Deflection", "4.8/5 CSAT", "24/7 Support"],
        integrations: ["Zendesk", "Intercom", "Teams", "Email"],
        capabilities: [
            { id: 'c1', title: 'Support Automation', desc: 'Resolves Tier 1 & 2 tickets instantly.', icon: "Zap" },
            { id: 'c2', title: 'HR Assistant', desc: 'Answers benefits and policy questions.', icon: "Users" },
            { id: 'c3', title: 'IT Helpdesk', desc: 'Troubleshoots common device/access issues.', icon: "MonitorPlay" },
            { id: 'c4', title: 'Meeting Copilot', desc: 'Transcribes and summarizes calls.', icon: "FileText" }
        ]
    },
    {
        id: 'voice',
        title: 'Voice & Interaction',
        subtitle: 'Neural Voice Interface',
        icon: "Phone",
        desc: "Brings AI to the telephony layer. Conducts natural, bi-directional voice conversations for bookings, surveys, and personalized outreach.",
        accent: "rose",
        metrics: ["<300ms Latency", "Natural Tone", "Multi-Language"],
        integrations: ["Twilio", "Zoom", "Genesys", "RingCentral"],
        capabilities: [
            { id: 'v1', title: 'Inbound Routing', desc: 'Intelligent call triage and routing.', icon: "Network" },
            { id: 'v2', title: 'Outbound Campaigns', desc: 'Personalized appointment reminders.', icon: "Phone" },
            { id: 'v3', title: 'Sentiment Analysis', desc: 'Detects caller mood in real-time.', icon: "Activity" },
            { id: 'v4', title: 'Voice Biometrics', desc: 'Secure authentication via voice print.', icon: "Lock" }
        ]
    },
    {
        id: 'sales',
        title: 'Sales & Marketing',
        subtitle: 'Revenue Acceleration Engine',
        icon: "Target",
        desc: "Supercharges the revenue team. Identifies high-intent leads, personalizes outreach at scale, and automates CRM hygiene.",
        accent: "orange",
        metrics: ["3x Pipeline Gen", "2x Conversion", "Auto-CRM Sync"],
        integrations: ["Salesforce", "HubSpot", "LinkedIn", "Outreach"],
        capabilities: [
            { id: 's1', title: 'Lead Scoring', desc: 'Predicts conversion probability.', icon: "TrendingUp" },
            { id: 's2', title: 'Personalized Email', desc: 'Writes hyper-relevant outreach copy.', icon: "FileText" },
            { id: 's3', title: 'Competitor Intel', desc: 'Battlecards generated from live data.', icon: "Shield" },
            { id: 's4', title: 'Deal Coaching', desc: 'Real-time suggestions during calls.', icon: "MessageSquare" }
        ]
    },
    {
        id: 'industry',
        title: 'Industry Specific',
        subtitle: 'Vertical Domain Adapters',
        icon: "Briefcase",
        desc: "Specialized models for regulated industries. Deep understanding of medical coding, legal precedents, and manufacturing protocols.",
        accent: "teal",
        metrics: ["HIPAA Compliant", "FDA Ready", "ISO Certified"],
        integrations: ["Epic", "Cerner", "Oracle Mfg", "Clio"],
        capabilities: [
            { id: 'i1', title: 'Medical Coding', desc: 'Automates ICD-10/CPT coding.', icon: "Activity" },
            { id: 'i2', title: 'Legal Research', desc: 'Finds relevant case law instantly.', icon: "Search" },
            { id: 'i3', title: 'Supply Chain', desc: 'Predicts component shortages.', icon: "Factory" },
            { id: 'i4', title: 'Compliance Check', desc: 'Auto-audits for regulatory risks.', icon: "Check" }
        ]
    }
];



// ==========================================
// CONTACT PAGE DATA
// ==========================================

export const contactData = {
    info: [
        {
            icon: Mail,
            label: "Email Us",
            value: "contact@intraintel.ai",
            href: "mailto:contact@intraintel.ai",
            description: "Get in touch via email"
        },
        {
            icon: Phone,
            label: "Call Us",
            value: "+1 703 984 9981",
            href: "tel:+17039849981",
            description: "Monday to Friday, 9AM-6PM EST"
        },
        {
            icon: MapPin,
            label: "Visit Us",
            value: "Fairfax, Virginia, USA",
            href: "#",
            description: "Our headquarters"
        }
    ]
};

// ==========================================
// COMPANY INFORMATION
// ==========================================

export const companyInfo = {
    name: "IntraIntel.AI",
    tagline: "Your Data. Your AI. Your Way.",
    description: "Secure, private, fast enterprise AI search.",
    email: "contact@intraintel.ai",
    phone: "+1 703 984 9981",
    address: {
        city: "Fairfax",
        state: "Virginia",
        country: "USA"
    },
    social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
    }
};

// ==========================================
// NAVIGATION DATA
// ==========================================

export const navigationData = {
    main: [
        { name: "Platform", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ],
    footer: {
        product: [
            { name: "Solutions", path: "#features" },
            { name: "Integrations", path: "#integrations" },
            { name: "Pricing", path: "#pricing" },
            { name: "Security", path: "#security" }
        ],
        company: [
            { name: "About Us", path: "/about" },
            { name: "Team", path: "/about#team" },
            { name: "Careers", path: "#careers" },
            { name: "Contact", path: "/contact" }
        ],
        resources: [
            { name: "Documentation", path: "#docs" },
            { name: "Blog", path: "#blog" },
            { name: "Support", path: "#support" },
            { name: "FAQ", path: "#faq" }
        ],
        legal: [
            { name: "Privacy Policy", path: "#privacy" },
            { name: "Terms of Service", path: "#terms" },
            { name: "Cookie Policy", path: "#cookies" }
        ]
    }
};

// ==========================================
// SEO META DATA
// ==========================================

export const seoData = {
    home: {
        title: "IntraIntel.AI - Your Data. Your AI. Your Way.",
        description: "Secure, private, fast enterprise AI search. Transform your enterprise data into actionable insights with AI that operates inside your security boundaries. Connect with AWS, Azure, GCP, and more.",
        keywords: "enterprise AI, secure AI search, private AI, data intelligence, cloud storage integration, AWS AI, Azure AI, GCP AI, LLM, generative AI, enterprise search, document intelligence, AI analytics",
        ogImage: "/og-home.png",
        canonicalUrl: "https://intraintel.ai",
        schemaType: "SoftwareApplication"
    },
    about: {
        title: "About Us - IntraIntel.AI | Enterprise AI Solutions",
        description: "Learn about IntraIntel.AI's mission to democratize AI-driven insights. Meet our leadership team and discover how we're transforming enterprise data intelligence with secure, private AI solutions.",
        keywords: "about IntraIntel, AI company, enterprise AI team, data intelligence mission, AI leadership, secure AI platform, enterprise solutions",
        ogImage: "/og-about.png",
        canonicalUrl: "https://intraintel.ai/about"
    },
    contact: {
        title: "Contact Us - IntraIntel.AI | Get in Touch",
        description: "Contact IntraIntel.AI to learn how our secure AI platform can transform your enterprise data. Reach out to our team in Fairfax, Virginia for demos, support, and partnership opportunities.",
        keywords: "contact IntraIntel, AI demo, enterprise AI support, get in touch, AI consultation, IntraIntel contact",
        ogImage: "/og-contact.png",
        canonicalUrl: "https://intraintel.ai/contact"
    },
    resources: {
        title: "Resources - IntraIntel.AI | Documentation & Insights",
        description: "Explore IntraIntel.AI resources, documentation, and insights. Learn how to leverage secure enterprise AI for your organization.",
        keywords: "AI resources, enterprise AI documentation, AI insights, whitepapers, case studies",
        ogImage: "/og-home.png",
        canonicalUrl: "https://intraintel.ai/resources"
    },
    features: {
        title: "Solutions - IntraIntel.AI | Intelligent Capabilities",
        description: "Discover the powerful features of IntraIntel.AI. From deep semantic search to enterprise-grade security and real-time processing.",
        keywords: "AI features, semantic search, enterprise security, real-time AI, data intelligence capabilities",
        ogImage: "/og-home.png",
        canonicalUrl: "https://intraintel.ai/features",
        schemaType: "SoftwareApplication",
        featureList: [
            "End-to-End SaaS Platform",
            "RAG Architecture (Retrieval-Augmented Generation)",
            "Multi-Agent Orchestration",
            "Universal Data Connectors (ERP, CRM, SQL)",
            "Enterprise Leadership Dashboard",
            "Custom Domain Vocabulary Training",
            "Automated Gap & Risk Analysis"
        ]
    },
    team: {
        title: "Our Team - IntraIntel.AI | The Minds Behind the Mission",
        description: "Meet the diverse team of visionaries and experts at IntraIntel.AI. Decades of experience in AI, cloud architecture, and enterprise solutions.",
        keywords: "IntraIntel team, AI experts, leadership, advisory board, tech innovators",
        ogImage: "/og-about.png",
        canonicalUrl: "https://intraintel.ai/team"
    },
    notFound: {
        title: "Page Not Found - IntraIntel.AI",
        description: "The page you're looking for doesn't exist. Return to IntraIntel.AI to explore our secure enterprise AI solutions.",
        keywords: "404, page not found",
        ogImage: "/og-home.png",
        noindex: true,
        nofollow: true
    }
};

