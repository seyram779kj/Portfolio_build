import { CertificationItem, EducationItem, ExperienceItem, ProjectItem, VolunteeringItem } from '../types/portfolio';

// ============================================================================
// 1. DATA-DRIVEN WORK & DESIGN PROJECTS ARRAY
// To add a new project, simply duplicate any object below and fill in the fields.
// Images can be placed in /src/assets/projects/<project-id>/ and referenced here.
// ============================================================================
export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'lafya-ai',
    title: 'Lafya AI (formerly Afya)',
    category: 'Product',
    categoryDisplay: 'Product + Design',
    year: '2026',
    role: 'Research, Ideation, PRD & Dashboard Design (Team Project)',
    tools: ['Figma', 'Lovable', 'Google AI Studio', 'Framer'],
    timeline: 'Jan 2026 – Present',
    description: 'B2B WhatsApp hypertension screening platform for community and clinical triage.',
    coverImage: '/src/assets/projects/lafya-ai/cover.jpg',
    images: [
      {
        url: '/src/assets/projects/lafya-ai/cover.jpg',
        caption: 'WhatsApp cardiovascular screening workflow & patient triage logic interface',
      },
      {
        url: '/src/assets/projects/lafya-ai/triage-dashboard.jpg',
        caption: 'Clinical provider dashboard for patient triage and blood pressure alert thresholds',
        isPlaceholder: true,
      },
      {
        url: '/src/assets/projects/lafya-ai/chatbot-sequence.jpg',
        caption: 'Automated conversational screening protocol with lifestyle follow-ups',
        isPlaceholder: true,
      },
      {
        url: '/src/assets/projects/lafya-ai/design-system.jpg',
        caption: 'UI component library and mobile-responsive layouts built in Figma',
        isPlaceholder: true,
      },
    ],
    liveUrl: undefined,
    figmaUrl: undefined,
    prototypeUrl: undefined,
    overview: {
      problem:
        'High prevalence of undiagnosed hypertension and acute lack of accessible community-level screening and clinic referral pathways.',
      whatIDid: [
        'Conducted and synthesized user research with community health workers and clinical stakeholders.',
        'Led collaborative ideation sessions to establish conversational triage architecture.',
        'Authored PRDs defining patient history tracking, template notifications, and triage logic.',
        'Designed dashboard interfaces in Figma, prototyping responsive layouts with Lovable and Framer.',
      ],
      whatCameOutOfIt:
        'Delivered complete product requirements, user triage workflows, and responsive dashboard designs enabling seamless community cardiovascular screening and clinic referrals.',
    },
  },
  {
    id: 'getvaxxed',
    title: 'GetVaxxed',
    category: 'Product',
    categoryDisplay: 'Product',
    year: '2026',
    role: 'Product Management Contributor',
    tools: ['Product Discovery', 'PRDs', 'Figma', 'Healthcare Workflows'],
    timeline: '2026',
    description: 'Health worker platform, now live.',
    coverImage: '/src/assets/projects/getvaxxed/cover.jpg',
    images: [
      {
        url: '/src/assets/projects/getvaxxed/cover.jpg',
        caption: 'GetVaxxed live healthcare worker portal and vaccine management platform',
      },
      {
        url: '/src/assets/projects/getvaxxed/vaccination-log.jpg',
        caption: 'Patient vaccination status tracker and community cohort management',
        isPlaceholder: true,
      },
      {
        url: '/src/assets/projects/getvaxxed/itinerary-view.jpg',
        caption: 'Daily field itinerary and immunization schedule interface',
        isPlaceholder: true,
      },
    ],
    liveUrl: undefined,
    figmaUrl: undefined,
    prototypeUrl: undefined,
    overview: {
      problem:
        'Frontline healthcare workers required a reliable, real-time digital system to record vaccinations, monitor supplies, and coordinate field outreach.',
      whatIDid: [
        'Collaborated on product requirements and operational workflow mapping for community health agents.',
        'Drafted clear feature specifications to streamline immunization data capture.',
        'Supported cross-functional testing and field deployment coordination.',
      ],
      whatCameOutOfIt:
        'Platform launched and is now live, successfully enabling health workers to track vaccinations and support community immunization workflows.',
    },
  },
  {
    id: 'laundry-service',
    title: 'Full-Stack Laundry Service Website',
    category: 'Web Builds',
    categoryDisplay: 'Web Build',
    year: '2025',
    role: 'Full-Stack Developer & Designer (Built from scratch)',
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'Tailwind CSS'],
    timeline: '2025',
    description: 'Built from scratch, front end and back end.',
    coverImage: '/src/assets/projects/laundry-service/cover.jpg',
    images: [
      {
        url: '/src/assets/projects/laundry-service/cover.jpg',
        caption: 'Customer garment selection and service booking web interface',
      },
      {
        url: '/src/assets/projects/laundry-service/order-tracking.jpg',
        caption: 'Live order tracking status from pickup to wash, press, and dispatch',
        isPlaceholder: true,
      },
      {
        url: '/src/assets/projects/laundry-service/paystack-checkout.jpg',
        caption: 'Integrated Paystack payment gateway and administrator management console',
        isPlaceholder: true,
      },
    ],
    liveUrl: undefined,
    figmaUrl: undefined,
    prototypeUrl: undefined,
    overview: {
      problem:
        'Managing laundry service orders, tracking item status, and collecting customer payments through manual phone calls and notebooks led to delays and customer dissatisfaction.',
      whatIDid: [
        'Designed complete user interfaces and responsive web layouts from scratch.',
        'Built full-stack web application using React, Node.js, Express, and MongoDB.',
        'Integrated Paystack API for seamless digital payments and mobile money collection.',
        'Implemented role-based authentication for customers, service providers, and administrators with real-time status updates.',
      ],
      whatCameOutOfIt:
        'Delivered a production-ready, fully functional laundry management platform with self-service customer ordering, live tracking, and automated payment processing.',
    },
  },
  {
    id: 'jesi-ai',
    title: 'JESI AI',
    category: 'Product',
    categoryDisplay: 'Product / Customer-Facing',
    year: '2026',
    role: 'Training, Sales & Support Contributor',
    tools: ['Teacher Training', 'Curriculum QA', 'User Support', 'TypeScript', 'Automated Testing'],
    timeline: 'Jan 2026 – Present',
    description: 'Training, sales and support work with teachers.',
    coverImage: '/src/assets/projects/jesi-ai/cover.jpg',
    images: [
      {
        url: '/src/assets/projects/jesi-ai/cover.jpg',
        caption: 'JESI AI teacher portal and curriculum assistance overview',
      },
      {
        url: '/src/assets/projects/jesi-ai/teacher-onboarding.jpg',
        caption: 'Training materials and onboarding modules developed for educators',
        isPlaceholder: true,
      },
      {
        url: '/src/assets/projects/jesi-ai/test-coverage.jpg',
        caption: 'Automated test suite achieving 90% code coverage across curriculum APIs',
        isPlaceholder: true,
      },
    ],
    liveUrl: undefined,
    figmaUrl: undefined,
    prototypeUrl: undefined,
    overview: {
      problem:
        'Educators needed hands-on guidance to adopt AI-assisted curriculum planning tools, while curriculum extraction pipelines required rigorous QA to prevent pedagogical errors.',
      whatIDid: [
        'Conducted direct teacher training and onboarding sessions to drive tool adoption in classrooms.',
        'Assisted with sales outreach, customer feedback synthesis, and support triage for teachers.',
        'Managed rigorous quality assurance on extracted curriculum datasets.',
        'Designed and executed unit-testing suites in TypeScript to verify API stability and edge-case handling.',
      ],
      whatCameOutOfIt:
        'Achieved 90% unit test suite code coverage, smooth teacher onboarding, and enhanced platform reliability across classrooms.',
    },
  },
  {
    id: 'young-and-safe',
    title: 'Young and Safe / Young and Loud',
    category: 'Research',
    categoryDisplay: 'Research',
    year: '2026',
    role: 'Research & Data Specialist',
    tools: ['Field Surveys', 'Focus Groups', 'Data Extraction', 'Data Cleaning', 'Excel'],
    timeline: 'Jan 2026 – Jun 2026',
    description: 'Research and data collection.',
    coverImage: '/src/assets/projects/young-and-safe/cover.jpg',
    images: [
      {
        url: '/src/assets/projects/young-and-safe/cover.jpg',
        caption: 'Youth wellbeing survey deployment in community settings',
      },
      {
        url: '/src/assets/projects/young-and-safe/qualitative-matrix.jpg',
        caption: 'Qualitative synthesis and sentiment analysis from youth focus groups',
        isPlaceholder: true,
      },
      {
        url: '/src/assets/projects/young-and-safe/endline-visualizations.jpg',
        caption: 'Survey dataset tabulations prepared for the published End Line Report',
        isPlaceholder: true,
      },
    ],
    liveUrl: undefined,
    figmaUrl: undefined,
    prototypeUrl: undefined,
    overview: {
      problem:
        'The project required primary empirical field data and qualitative perspectives to evaluate youth wellbeing and outcomes for formal evaluation.',
      whatIDid: [
        'Conducted primary field surveys across community youth populations.',
        'Facilitated youth focus groups to capture qualitative lived experiences and concerns.',
        'Executed structured data entry, data cleaning, and dataset verification for the final evaluation.',
      ],
      whatCameOutOfIt:
        'Delivered verified quantitative field datasets and qualitative findings that directly powered the comprehensive End Line Report.',
    },
  },
];

// ============================================================================
// 2. PROFILE & PERSONAL DETAILS
// ============================================================================
export const PROFILE = {
  name: 'Kingsley Kwasi Atitsogbe',
  shortName: 'Kingsley',
  preferredName: 'Kingsley',
  legalName: 'Kingsley Kwasi Atitsogbe',
  title: 'Product Manager & Computer Science Professional',
  oneLiner:
    'Product Manager and Computer Science professional working across product, design, and software engineering to turn user research into practical digital products.',
  location: 'Accra & Ho, Ghana',
  email: 'ohenebaseyram@gmail.com',
  // Two active phone numbers as requested
  phonePrimary: '+233 505 178 012',
  phoneSecondary: '055 252 6415',
  phoneFormatted: '+233 505 178 012 / 055 252 6415',
  linkedinUrl: 'https://linkedin.com/in/kingsley-kwasi-atitsogbe-59735638',
  linkedinDisplay: 'linkedin.com/in/kingsley-kwasi-atitsogbe-59735638',
  about:
    'I am a Product Manager and Computer Science professional with hands-on experience in product strategy, user research, requirements gathering, PRD development, UX/UI collaboration, and digital product delivery. I connect user needs, research insights, and technical execution while working across product, design, engineering, and research teams. My background combines product management with full-stack software development in React, TypeScript, Node.js, Express, MongoDB, REST APIs, Git/GitHub, and AWS cloud technologies.',
  photo: '/src/assets/images/kingsley_real_photo_1790884013020.jpg',
  stats: [
    { label: 'UNIT TEST COVERAGE (JESI AI)', value: '90%' },
    { label: 'HND COMPUTER SCIENCE CGPA', value: '3.9' },
    { label: 'DEGREE (BSc CS CURRENT CGPA)', value: '3.7' },
  ],
};

// ============================================================================
// 3. WORK EXPERIENCE (Reverse-chronological)
// ============================================================================
export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'node-eight',
    role: 'Product Manager',
    company: 'Node Eight',
    location: 'Ho, Ghana',
    period: 'Jan 2026 – Present',
    highlights: [
      'Drive product discovery and delivery across technology and health-tech initiatives, connecting user needs, research insights, product strategy, and execution.',
      'Develop product requirements and PRDs, translating complex problems into clear product requirements, workflows, and actionable deliverables.',
      'Conduct and synthesize field research to understand user needs, identify pain points, and inform product decisions.',
      'Collaborate with designers and engineers to translate product concepts into practical, user-centered digital experiences.',
      'Contribute to the development and improvement of health-tech solutions including Lafya AI and GetVaxxed platforms.',
      'Support product prioritization, stakeholder communication, and iterative improvement throughout the product lifecycle.',
      'Authored product and technical documentation covering system architecture, user triage logic, and AI-driven behavior-change sequences; supported AWS-based deployments and serverless image pipelines.',
    ],
    skillsUsed: ['Agile/Scrum', 'Product Strategy', 'Discovery', 'User Research', 'PRDs', 'AWS', 'Figma'],
  },
  {
    id: 'various-projects',
    role: 'Data & Research Specialist',
    company: 'Various Projects',
    location: 'Ho & Accra, Ghana',
    period: 'Jan 2026 – Jun 2026',
    highlights: [
      'Young and Safe / Young and Loud: Conducted field surveys, facilitated focus groups, and supported data collection for the End Line Report.',
      'JESI AI: Managed quality assurance on curriculum data and high-volume data extraction for teachers, learners, and schools; supported teacher training and onboarding.',
      'Nouritrack: Executed health-data extraction and cleaning to ensure dataset accuracy.',
      'Ho Youth Wellbeing Report: Provided data collection support for regional health planning.',
    ],
    skillsUsed: ['Data Extraction & Cleaning', 'Data QA', 'Field Surveys', 'Focus Groups', 'Data Literacy'],
  },
  {
    id: 'ecg',
    role: 'IT Support Intern',
    company: 'Electricity Company of Ghana (ECG)',
    location: 'Accra, Ghana',
    period: 'Sep 2024 – Dec 2024',
    highlights: [
      'Provided day-to-day technical support and assisted with computer-related services and troubleshooting.',
      'Assisted users with hardware and software issues, basic system maintenance, and routine computer operations.',
      'Supported computer shop and IT service activities while developing practical experience in technical support and customer service.',
      'Supported data entry and analysis of prepaid-card faults using the ECG mobile application.',
    ],
    skillsUsed: ['Technical Support', 'Troubleshooting', 'Data Entry & Analysis', 'Mobile App Fault Analysis'],
  },
];

// ============================================================================
// 4. SKILLS & TOOLS
// ============================================================================
export const SKILL_GROUPS = [
  {
    category: 'Product & Strategy',
    description: 'Discovery, research synthesis, requirements gathering, and roadmap delivery.',
    skills: [
      'Agile/Scrum',
      'Product Strategy',
      'Discovery',
      'User Research',
      'Roadmapping',
      'PRDs',
      'Competitor Analysis',
      'Feedback-to-Ticket Synthesis',
      'Lean Business Model Canvas',
      'Investor Pitch Scripting',
      'Metrics & Evaluation Frameworks',
      'Pilot Program Design & Execution',
      'Sprint Planning',
      'Stakeholder Management',
    ],
  },
  {
    category: 'Design (UI/UX & Prototyping)',
    description: 'Interface design, wireframing, and user-flow prototyping.',
    skills: [
      'Figma',
      'Canva',
      'Lovable',
      'Framer',
      'Rapid Prototyping',
      'E-commerce & Health UIs',
      'User-Flow Mapping',
      'Wireframing',
    ],
  },
  {
    category: 'Data & AWS (Technical)',
    description: 'Full-stack software development, cloud infrastructure, and data QA.',
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'Git/GitHub',
      'Tailwind CSS',
      'HTML/CSS/JavaScript',
      'Python',
      'Flask',
      'AWS (EC2, S3, Lambda, DynamoDB)',
      'Classical ML (Random Forest, Naive Bayes)',
      'Software Requirements Documentation',
      'Data Extraction & Cleaning',
      'Data Literacy',
      'Data QA',
      'Field Surveys',
      'Focus-Group Facilitation',
    ],
  },
  {
    category: 'AI Tools & Productivity',
    description: 'Generative AI workflows, development environments, and coordination.',
    skills: [
      'Claude',
      'ChatGPT',
      'Google AI Studio',
      'Google Colab',
      'Kilo Code',
      'Replit',
      'Zencoder',
      'Asana',
      'Excel',
      'GitHub',
    ],
  },
];

// ============================================================================
// 5. EDUCATION
// ============================================================================
export const EDUCATION: EducationItem[] = [
  {
    degree: 'BSc Computer Science',
    institution: 'Ho Technical University',
    period: '2026 – Expected 2027',
    status: 'In progress',
    gpa: 'CGPA: 3.7',
  },
  {
    degree: 'HND Computer Science',
    institution: 'Ho Technical University',
    period: '2023 – 2025',
    status: 'Completed',
    gpa: 'CGPA: 3.9',
  },
  {
    degree: 'WASSCE, General Science',
    institution: 'Adidome Senior High School',
    period: '2022',
    status: 'Completed',
  },
  {
    degree: 'BECE',
    institution: 'George Gunn International Christian School',
    period: '2019',
    status: 'Completed',
  },
];

// ============================================================================
// 6. CERTIFICATIONS
// ============================================================================
export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'aws-waf',
    title: 'AWS Well-Architected Foundations',
    issuer: 'AWS',
    period: 'Jul 2026 – Aug 2026',
  },
  {
    id: 'aws-tech',
    title: 'AWS Technical Essentials',
    issuer: 'AWS',
    period: 'Jan 2026 – Jun 2026',
  },
  {
    id: 'mlops',
    title: 'MLOps / Data Engineering',
    issuer: 'DataCamp',
    period: 'Apr 2026 – May 2026',
  },
  {
    id: 'comm',
    title: 'Mastering Communication and Public Speaking',
    issuer: 'Alison',
    period: 'Jan 2026 – Feb 2026',
  },
  {
    id: 'ds',
    title: 'Understanding Data Science',
    issuer: 'DataCamp',
    period: 'Feb 2026',
  },
  {
    id: 'dl',
    title: 'Data Literacy',
    issuer: 'DataCamp',
    period: '2026',
  },
  {
    id: 'genai',
    title: 'Diplomas in Applied Generative AI and Business Communication',
    issuer: 'Alison',
    period: '2026',
  },
  {
    id: 'claude',
    title: 'Introduction to Claude Models',
    issuer: 'DataCamp',
    period: '2026',
  },
];

// ============================================================================
// 7. VOLUNTEERING
// ============================================================================
export const VOLUNTEERING: VolunteeringItem[] = [
  {
    id: 'last-friday',
    title: 'Logistics Manager',
    organization: 'Last Friday Night Handout',
    location: 'Ho, Ghana',
    period: 'Feb 2026',
    description:
      'Managed project logistics, including material procurement, task assignment, and on-site supervision for community outreach.',
  },
  {
    id: 'code-fest',
    title: 'Participant / Contributor',
    organization: 'Code Fest — Ho Technical University',
    location: 'Ho, Ghana',
    period: 'Aug 2025',
    description: 'Participated in university-wide collaborative engineering and coding competition.',
  },
  {
    id: 'node-eight-usher',
    title: 'Usher',
    organization: 'Node Eight',
    location: 'Ho, Ghana',
    period: 'Dec 2025 – Dec 2026',
    description: 'Assisted with event coordination, guest reception, and venue operations for innovation hub events.',
  },
  {
    id: 'gayo',
    title: 'Ground Worker',
    organization: 'GAYO (Green Africa Youth Organization)',
    location: 'Ho, Ghana',
    period: 'Mar 2026',
    description: 'Supported environmental sustainability community ground work and field activities.',
  },
];
