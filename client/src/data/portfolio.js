/* Both GitHub accounts, active one first, so `personal.github` reads from it
   wherever a single link is enough. The study account is no longer used but most
   of the project repos linked below still live on it. */
export const githubAccounts = [
  {
    handle: 'Louayguetat',
    url: 'https://github.com/Louayguetat',
    label: 'Active',
    note: 'Where I work now. Client projects and this portfolio.',
  },
  {
    handle: 'Louay-Guetat',
    url: 'https://github.com/Louay-Guetat',
    label: 'Archive',
    note: 'Older student account. Most of my project repos are still here.',
  },
];

export const personal = {
  name: 'Louay Guetat',
  title: 'Full Stack Engineer',
  tagline: 'I build web and mobile products for startups, from the interface to the backend.',
  bio: "I'm a full stack engineer based in Tunis. I've spent the last two years building software that real people use, mostly for small teams where I ended up owning the whole thing: the web app, the mobile app, the API, and the cloud setup underneath.",
  aboutExtra: "I work remotely for Alpha Momentum, a fintech startup in the US, on a financial research platform. Before that I did data science and agency work. I'm now looking for my next full-time role, and I'd move anywhere in Europe, the Americas, or Asia for the right team.",
  location: 'Tunis, Tunisia',
  available: 'Happy to relocate',
  email: 'louay.guetat1@gmail.com',
  phone: '+216 55 160 398',
  whatsapp: '21655160398',
  timezone: 'GMT+1, used to working across time zones',
  linkedin: 'https://www.linkedin.com/in/guetat-louay',
  github: githubAccounts[0].url,
  resumeUrl: '/CV/FullStack/Louay_Guetat_ENG.pdf',
};

/* Résumé variants. Each `id` is the folder name under client/public/CV, and each
   language `id` is the filename suffix, so the files resolve as
   /CV/<track>/Louay_Guetat_<lang>.<pdf|docx>. */
export const resumeTracks = [
  {
    id: 'FullStack',
    label: 'Full Stack',
    detail: 'For product and web roles. React and TypeScript on the front, Python and Node behind it.',
  },
  {
    id: 'AI',
    label: 'AI Engineering',
    detail: 'For AI roles. Retrieval pipelines, agent workflows, and working with language models.',
  },
];

export const resumeLanguages = [
  { id: 'ENG', label: 'English' },
  { id: 'FR', label: 'Français' },
];

export const stats = [
  { value: '2+ years', label: 'Building and shipping software people actually use' },
  { value: '37,000+', label: 'SEC filings running through a pipeline I built' },
  { value: '7', label: 'Products I took from an empty repo to release' },
];

export const focusAreas = [
  {
    icon: 'layers',
    title: 'Full-stack product',
    detail: 'React and TypeScript on the front, Python and Node behind it. I like owning both ends.',
    tags: ['React', 'TypeScript', 'FastAPI'],
  },
  {
    icon: 'ai',
    title: 'AI features',
    detail: 'Retrieval pipelines and agent workflows on top of OpenAI and Anthropic models.',
    tags: ['LangGraph', 'RAG', 'OpenAI'],
  },
  {
    icon: 'trend',
    title: 'Fintech and data',
    detail: 'SEC filing pipelines, financial models, and brokerage and banking integrations.',
    tags: ['SEC EDGAR', 'Plaid', 'Alpaca'],
  },
  {
    icon: 'cloud',
    title: 'Cloud and deployment',
    detail: 'AWS Lambda, ECS, and Batch, with CI/CD across dev, staging, and production.',
    tags: ['AWS', 'Docker', 'GitHub Actions'],
  },
];

export const quickFacts = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Right now', value: 'Full Stack Engineer at Alpha Momentum' },
  { label: 'Based in', value: 'Tunis, Tunisia' },
  { label: 'Relocation', value: 'Anywhere, happy to move', highlight: true },
  { label: 'Setup', value: 'On-site, hybrid, or remote' },
  { label: 'Visa', value: 'I would need sponsorship' },
];

export const coreStack = ['React', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'];

export const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Alpha Momentum',
    companyUrl: 'https://alphamomentum.ai',
    type: 'Remote, US startup',
    period: 'Feb 2025 - Present',
    current: true,
    description: 'Financial research platform with factor models, SEC filing search, research automation, and live trading through Alpaca.',
    highlights: [
      'Built the React 18 + TypeScript web app: OAuth login, live chat, SEC document browser, dashboards, and Stripe billing',
      'Built a Serverless Node.js API on AWS Lambda for auth, portfolios, billing, Plaid bank linking, Alpaca trading, and query routing',
      'Built Python FastAPI services: SEC pipeline for 37k+ documents on AWS Batch, financial data scrapers, and document search with Neo4j',
      'Set up LangChain and LangGraph workflows for equity research, valuation, portfolio optimization, macro, and risk',
      'Shipped React Native apps for iOS and Android with Plaid sync, Alpaca trading, in-app purchases, and Firebase Analytics',
      'Set up CI/CD on GitHub Actions: Docker to ECR, ECS redeploys, S3/CloudFront, Serverless Framework across dev, staging, and production',
    ],
    tech: ['TypeScript', 'Python', 'React 18', 'React Native', 'Node.js', 'FastAPI', 'AWS Lambda', 'ECS', 'Batch', 'MongoDB', 'Neo4j', 'PostgreSQL', 'LangChain', 'LangGraph', 'Docker', 'Stripe', 'Plaid', 'Alpaca'],
  },
  {
    role: 'Full Stack Developer',
    company: 'WeTekup',
    companyUrl: null,
    type: 'Tunis',
    period: 'Mar 2025 - Sep 2025',
    current: false,
    description: 'Built client-facing React websites and REST APIs for production deployment.',
    highlights: [
      'Built responsive React websites with component-based architecture and SCSS',
      'Delivered REST APIs with Node.js/Express backed by normalized PostgreSQL schemas',
      'Configured production deployments on Hostinger with Nginx reverse proxy, SSL/TLS, and caching',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'SCSS', 'Nginx'],
  },
  {
    role: 'Data Science Intern',
    company: 'Sagemcom',
    companyUrl: null,
    type: 'Tunis',
    period: 'Feb 2024 - Aug 2024',
    current: false,
    description: 'Built a data pipeline from collection through model integration and a web interface.',
    highlights: [
      'Scraped and built datasets using Selenium and BeautifulSoup',
      'Built retrieval pipelines with HuggingFace models and LangChain',
      'Built automated workflows with LangGraph',
      'Developed a ReactJS + Flask web interface with REST API integration',
    ],
    tech: ['Python', 'Flask', 'ReactJS', 'LangChain', 'LangGraph', 'HuggingFace', 'SQLite'],
  },
  {
    role: 'Full Stack Intern',
    company: 'WeTekup (Khedma.site)',
    companyUrl: null,
    type: 'Tunis',
    period: 'Jul 2023 - Sep 2023',
    current: false,
    description: 'Built a job marketplace platform from design to deployment.',
    highlights: [
      'Developed a job platform with ReactJS for employers and job seekers',
      'Built REST APIs with Django and managed the database using PostgreSQL',
    ],
    tech: ['ReactJS', 'Django', 'Python', 'PostgreSQL'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'E-Build',
    companyUrl: null,
    type: 'Tunis',
    period: 'Jul 2022 - Sep 2022',
    current: false,
    description: 'Frontend development internship focused on building web interfaces.',
    highlights: ['Built and maintained frontend components for web applications'],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Software Developer Intern',
    company: 'OACA',
    companyUrl: null,
    type: 'Tunis',
    period: 'Feb 2021 - Jun 2021',
    current: false,
    description: 'Developed Java desktop software for market management and monitoring.',
    highlights: [
      'Designed and developed a JavaX desktop application for market management',
      'Created UML diagrams and architecture documentation for the project',
    ],
    tech: ['Java', 'JavaX', 'UML'],
  },
];

export const projects = [
  {
    title: 'Alpha Momentum',
    url: 'https://alphamomentum.ai',
    github: null,
    status: 'Live in production',
    category: 'Fintech platform',
    role: 'Full Stack Engineer',
    period: 'Feb 2025 - Present',
    description: 'Financial research platform with factor models, SEC filing search, research automation, and live trading via Alpaca. I built the product from the React frontend to AWS infrastructure.',
    metrics: [
      { value: '37k+', label: 'SEC documents pipelined on AWS Batch' },
      { value: '3', label: 'Apps shipped: web, iOS, and Android' },
      { value: '5', label: 'LangGraph research workflows' },
    ],
    tech: ['React 18', 'TypeScript', 'FastAPI', 'LangChain', 'AWS', 'MongoDB', 'Neo4j', 'Stripe', 'Plaid'],
  },
  {
    title: 'Capital Thread',
    url: null,
    github: null,
    status: 'Client work, in progress',
    category: 'AI and private markets',
    role: 'Full Stack Engineer',
    period: 'Aug 2026 - Present',
    metrics: [
      { value: '65', label: 'REST endpoints over 25 tables' },
      { value: '437', label: 'Unit tests on the financial engines' },
      { value: '1 click', label: 'From raw filings to a finished memo' },
    ],
    description: 'A deal platform for private credit, private equity, and venture funds. It pulls opportunities from SEC EDGAR and Form D data, then runs a diligence pipeline that reads Inline XBRL and produces financial models, DCF valuations, and investment memos where every number links back to the filing it came from. The models write the narrative, but plain Python does all the arithmetic so the numbers are always checkable. I have been building it through Alpha Momentum since August 2026.',
    tech: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'OpenAI API', 'Anthropic API', 'SEC EDGAR', 'Arelle XBRL', 'OAuth 2.0'],
  },
  {
    title: 'Outlou',
    url: null,
    github: 'https://github.com/Louay-Guetat/LocationSocialMediaApp',
    status: 'Still building it',
    category: 'Mobile and social',
    role: 'Solo build',
    description: 'Location-based social network built with React Native and Firebase. Users share moments tied to places, discover nearby activity, and connect through map-based feeds. Includes QR profile links and support for English, Arabic, and French.',
    tech: ['React Native', 'Expo', 'Firebase', 'Node.js', 'Google Maps API', 'Backblaze B2', 'Resend'],
  },
  {
    title: 'EduMemes',
    url: 'https://edu.memes.tn',
    github: null,
    status: 'Live',
    category: 'EdTech',
    role: 'Solo build',
    description: 'Educational platform that uses memes and short videos to make learning more engaging. I built it solo with a React frontend, Node.js/MySQL backend, and a React Native app.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'React Native'],
  },
  {
    title: 'Intellectia',
    url: null,
    github: 'https://github.com/Louay-Guetat/Educational-Interactive-Intelligent-Platform',
    status: 'University project',
    category: 'AI and education',
    role: 'Team project',
    description: 'Math learning platform for children. Turns text problems into visual representations using vision models. Includes interactive quizzes and performance dashboards.',
    tech: ['React', 'Django', 'MongoDB', 'TensorFlow', 'HuggingFace', 'NumPy', 'Pandas'],
  },
  {
    title: 'PMBOK Risk Recommender',
    url: null,
    github: 'https://github.com/Louay-Guetat/Risk-Management-Recommendation-System',
    status: 'University project',
    category: 'Machine learning and NLP',
    role: 'Team project',
    description: 'Chatbot-style system for project risk management, trained on PMBOK 11th edition data. Uses a Graph Attention Network with a BERT embedder for text-based recommendations.',
    tech: ['Django', 'TensorFlow', 'PyTorch', 'NLP', 'GNN', 'BERT', 'NumPy'],
  },
  {
    title: 'Yoga Pose Classifier',
    url: null,
    github: 'https://github.com/Louay-Guetat/Yoga-classifcation',
    status: 'University project',
    category: 'Computer Vision',
    role: 'Solo build',
    description: 'CNN-based yoga pose classification model. The trained CNN reached 86% accuracy. ResNet reached 97% across multiple pose categories.',
    tech: ['Python', 'Django', 'CNN', 'ResNet', 'NumPy', 'Pandas'],
  },
];

export const skills = {
  'Frontend': ['React 19', 'TypeScript', 'Next.js', 'Vite', 'MUI', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Framer Motion', 'Angular', 'SCSS'],
  'Mobile': ['React Native', 'Expo', 'Firebase', 'Plaid SDK', 'IAP'],
  'Backend': ['Node.js', 'Express', 'FastAPI', 'Flask', 'Django', 'Spring Boot', 'Serverless'],
  'Machine Learning': ['LangChain', 'LangGraph', 'OpenAI API', 'Anthropic API', 'HuggingFace', 'RAG', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Keras'],
  'Databases': ['MongoDB', 'PostgreSQL', 'Neo4j', 'MySQL', 'Firebase', 'DynamoDB'],
  'Cloud & DevOps': ['AWS Lambda', 'ECS', 'S3', 'CloudFront', 'Cognito', 'Batch', 'Docker', 'GitHub Actions', 'Nginx', 'Azure'],
  'Integrations': ['Stripe', 'Plaid', 'Alpaca', 'OAuth 2.0', 'Polygon', 'SEC EDGAR'],
};

export const education = [
  {
    degree: 'Computer Engineering, Data Science',
    school: 'ESPRIT',
    location: 'Tunis',
    period: '2021 - 2024',
    note: 'Thesis on generative models for business knowledge. Mention: Very Good',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'ESSECT',
    location: 'Tunis',
    period: '2018 - 2021',
    note: null,
  },
  {
    degree: 'Baccalaureate in Mathematics',
    school: 'Lycée Pacha Street',
    location: 'Tunis',
    period: '2013 - 2018',
    note: null,
  },
];

export const languages = [
  { lang: 'Arabic', level: 'Native' },
  { lang: 'English', level: 'B2, Professional' },
  { lang: 'French', level: 'B2, Professional' },
];
