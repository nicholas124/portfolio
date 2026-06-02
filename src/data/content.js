// ─────────────────────────────────────────────────────────────
// Edit everything about the site from this one file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Nicholas Muchelemba',
  role: 'Backend & API Engineer',
  tagline:
    'I design and scale secure, cloud-native APIs and backend services — across healthcare, finance, and mining. AWS Solutions Architect & Certified Kubernetes Administrator.',
  location: 'Lusaka, Zambia',
  email: 'nmuchelemba60@gmail.com',
  resumeUrl: '/Nicholas_Muchelemba_Resume.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/nicholas124' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/nicholas-muchelemba' },
    { label: 'Email', url: 'mailto:nmuchelemba60@gmail.com' },
  ],
}

export const about = [
  `I'm a backend and API engineer with 4+ years of experience building and scaling
   secure, cloud-based systems across the healthcare, finance, and mining domains.`,
  `I specialize in designing reliable RESTful APIs and backend services with Python
   (FastAPI), Java, and AWS — focused on improving system performance, reducing manual
   processes, and enabling data-driven decisions. I'm a certified AWS Solutions Architect
   and Certified Kubernetes Administrator, currently pursuing a Master's in Data Science.`,
]

export const experience = [
  {
    role: 'API Software Engineer',
    company: 'Orbis International',
    period: 'Jul 2024 – Present',
    location: 'Remote',
    points: [
      'Lead the design and development of scalable RESTful APIs powering global telemedicine and AI-enabled healthcare platforms.',
      'Improved API reliability and performance through cloud-native practices and structured error handling.',
      'Built and maintained backend services in Python (FastAPI) and Java, enabling seamless integration with internal and third-party systems.',
      'Contributed to backend architecture decisions, testing strategies, and CI/CD deployment workflows.',
    ],
    tags: ['Python (FastAPI)', 'Java', 'REST APIs', 'AWS', 'Cloud Architecture'],
  },
  {
    role: 'Software Developer (Backend & Cloud)',
    company: 'Backend & Cloud',
    period: 'Feb 2023 – Jun 2024',
    location: 'Remote',
    points: [
      'Developed and maintained backend services and RESTful APIs in Python, Java, and FastAPI for cloud-based business applications.',
      'Built data processing and automation on AWS (S3, Athena, Translate, Kendra, SageMaker), improving data accessibility and efficiency.',
      'Designed and delivered Power BI dashboards to support analytics and decision-making.',
      'Contributed across the full SDLC: requirements, development, testing, deployment, and support.',
    ],
    tags: ['Python', 'FastAPI', 'AWS', 'Power BI'],
  },
  {
    role: 'Software Developer',
    company: 'First Quantum Minerals',
    period: 'Apr 2021 – Mar 2023',
    location: 'Zambia',
    points: [
      'Developed and maintained internal business applications in C# (.NET / Blazor) for mining operations and reporting workflows.',
      'Designed Power BI reports and dashboards, improving visibility into operational and production data.',
      'Built Python automation to reduce manual processes, and applied machine learning to improve prediction of mining BCM data.',
    ],
    tags: ['C#', '.NET', 'Blazor', 'Python', 'Power BI', 'ML'],
  },
  {
    role: 'Software Developer (Contract)',
    company: 'National Institute of Public Administration',
    period: 'Oct 2020 – Apr 2021',
    location: 'Zambia',
    points: [
      'Implemented and enhanced application features to improve system functionality, usability, and performance.',
      'Introduced Python automation to reduce repetitive tasks and improve operational efficiency.',
      'Worked across a mixed stack: PHP, JavaScript, Java, JSP, and Python.',
    ],
    tags: ['PHP', 'JavaScript', 'Java', 'JSP', 'Python'],
  },
]

export const projects = [
  {
    title: 'This Portfolio — Serverless on AWS',
    featured: true,
    image: '/architecture.svg',
    description:
      'The site you are reading — a full-stack serverless app on AWS. A React + Vite static build is served globally from a private S3 bucket through CloudFront, secured with an ACM TLS certificate and a custom domain on Route 53, with a CloudFront Function that 301-redirects www to the apex. The contact form and live visitor counter run on API Gateway + Lambda, backed by DynamoDB (counter) and SES (email). Everything runs within the AWS free tier.',
    tags: ['React', 'Vite', 'CloudFront', 'Lambda', 'API Gateway', 'DynamoDB', 'SES'],
    demo: 'https://nicholasmuchelemba.com',
    repo: 'https://github.com/nicholas124/portfolio',
  },
]

export const skills = [
  {
    group: 'Backend & APIs',
    items: [
      'Python (FastAPI)',
      'Java',
      'C# (.NET, Blazor)',
      'PHP',
      'RESTful API Design & Integration',
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      'AWS (S3, Athena, SageMaker, Kendra)',
      'Cloud Architecture & Infrastructure',
      'Kubernetes (CKA)',
      'CI/CD & Deployment',
    ],
  },
  {
    group: 'Data & ML',
    items: [
      'Data Processing & Automation',
      'Power BI & Data Visualization',
      'Machine Learning',
      'TensorFlow',
    ],
  },
]

export const education = [
  {
    school: 'The ZCAS University',
    degree: "Master's Degree, Data Science",
    period: 'Jan 2026 – Jun 2027 (in progress)',
    notes: [],
  },
  {
    school: 'Mulungushi University',
    degree: "Bachelor's Degree, Computer Science",
    period: '2016 – 2020',
    notes: [
      'Graduated with Distinction (Summa Cum Laude)',
      'Research: Crop disease detection using Convolutional Neural Networks',
    ],
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'The Linux Foundation', year: '2024' },
  { name: 'AWS Certified Machine Learning – Specialty', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'TensorFlow Developer Certificate', issuer: 'TensorFlow / Zero To Mastery', year: '2022' },
  { name: 'HCIA Routing & Switching', issuer: 'Huawei', year: '2020' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2020' },
]
