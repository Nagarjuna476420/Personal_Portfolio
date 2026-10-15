/**
 * Portfolio Data Configuration
 * Centralized data source for Nagarjuna Reddy Chinthala's portfolio.
 */

export const personalInfo = {
  name: "Nagarjuna",
  surname: "Reddy Chinthala",
  fullName: "Nagarjuna Reddy Chinthala",
  role: "Full Stack Developer",
  specialization: ".NET Core & React.js",
  headline: "Building fast, reliable products from database to interface.",
  bio: "2+ years shipping enterprise web applications, REST APIs, background worker services, and high-performance React interfaces across ride-sharing, meeting management, and CRM domains.",
  about: [
    "I'm a Full Stack Developer working across .NET Core, .NET 8/9, C#, TypeScript, and SQL Server. I architect end-to-end web applications, secure REST APIs, scalable background services, and responsive React interfaces.",
    "My hands-on experience covers spatial algorithms, geospatial search, enterprise OAuth 2.0 authentication, and transactional notification architectures spanning feature implementation, testing, and production optimization.",
    "Current focus: maintaining and scaling the WorkEasy CRM frontend, while driving core full-stack enhancements for Duri and SIA."
  ],
  email: "chintalanagarjuna420@gmail.com",
  phone: "+91 9391284191",
  location: "Hyderabad, India",
  stats: [
    { value: "2+", label: "Years of Professional Experience" },
    { value: "3", label: "Enterprise Products Delivered" },
    { value: "65%", label: "Faster Calculation Performance" },
    { value: "99.8%", label: "Notification Delivery Rate" }
  ]
};

export const skillsData = {
  "Backend": [
    ".NET Core", ".NET 8/9", "ASP.NET Core Web API", "C#", 
    "REST APIs", "Async / Await", "Entity Framework Core", "Dependency Injection"
  ],
  "Frontend": [
    "React.js", "TypeScript", "JavaScript ES6+", "HTML5 & CSS3", 
    "SCSS / CSS Modules", "Reusable Components", "Responsive UI", "Tailwind CSS"
  ],
  "Database & Geospatial": [
    "SQL Server", "T-SQL", "Stored Procedures", "Query Optimization", 
    "Execution Plans", "Spatial Indexing", "Geography Types", "Polyline Routing"
  ],
  "Architecture & Patterns": [
    "Clean Architecture", "Repository Pattern", "SOLID Principles", 
    "Worker Services", "Scheduled Jobs", "Notification Outbox Pattern"
  ],
  "Auth & Cloud Integrations": [
    "OAuth 2.0 / JWT", "Azure AD SSO", "Microsoft Graph API", 
    "Google Cloud APIs", "Google Drive & OneDrive", "WhatsApp Cloud API", "SMS Gateways"
  ],
  "Tools & Engineering Practices": [
    "Git & GitHub", "Visual Studio & VS Code", "Postman", 
    "CI/CD Pipelines", "Agile / Scrum", "xUnit & Moq", "Lighthouse Optimization"
  ]
};

export const techMarqueeItems = [
  ".NET Core", "C#", "React.js", "TypeScript", "SQL Server", 
  "REST APIs", "OAuth 2.0", "Entity Framework Core", "Microsoft Graph", 
  "Google Cloud", "WhatsApp Cloud API", "Worker Services", "Clean Architecture", 
  "xUnit", "Tailwind CSS", "Git"
];

export const experienceData = [
  {
    id: "duri",
    companyShort: "Duri",
    role: "Full Stack Developer",
    project: "Duri Ride Sharing Platform",
    company: "Hansai Technosoft Pvt. Ltd.",
    period: "2024 – 2026",
    highlights: [
      "Engineered a .NET Core FareEngine using route distance, stop sequences, seat tiers, and surge multipliers, accelerating fare calculation by 65%.",
      "Built geospatial SearchAPI endpoints with SQL Server spatial indexes and polyline intersection logic, cutting search latency from 380 ms to under 75 ms.",
      "Refactored stored procedures, spatial queries, execution plans, and indexes, reducing SQL Server CPU utilization by 35%.",
      "Integrated WhatsApp Business Cloud API and SMS gateways for OTPs, booking confirmations, and trip updates, achieving 99.8% notification delivery success.",
      "Built modular React and TypeScript components with standardized state patterns, reducing client-side runtime errors by 40%."
    ],
    tech: [".NET Core", "C#", "React.js", "TypeScript", "SQL Server", "Worker Services", "WhatsApp Cloud API", "Spatial Search"]
  },
  {
    id: "sia",
    companyShort: "SIA",
    role: "Full Stack Developer",
    project: "SIA Corporate Web Platform / MeetMod.ai",
    company: "Hansai Technosoft Pvt. Ltd.",
    period: "2025 – 2026",
    highlights: [
      "Implemented Microsoft 365 and Google Workspace OAuth 2.0 flows for enterprise Single Sign-On (SSO).",
      "Integrated Google Drive and OneDrive APIs to automate document synchronization and secure cloud file exchange.",
      "Applied lazy loading, code splitting, and memoized selectors, reaching a Google Lighthouse performance score above 95.",
      "Enhanced meeting creation, attendee management, recurring meeting scheduler, and interactive calendar views."
    ],
    tech: ["React.js", "TypeScript", "Microsoft Graph API", "Google Cloud APIs", "OAuth 2.0", "SCSS", "Calendar Engine"]
  },
  {
    id: "workeasy",
    companyShort: "WorkEasy",
    role: "React Developer",
    project: "WorkEasy CRM Application",
    company: "Hansai Technosoft Pvt. Ltd.",
    period: "May 2026 – Present",
    highlights: [
      "Maintain and enhance CRM components, responsive screens, and high-volume workflows using modular, reusable React components.",
      "Troubleshoot complex frontend state issues, implement customer feature requests, and validate behavior across sales pipelines.",
      "Translate wireframes and functional specifications into resilient, responsive user interfaces integrated with backend microservices."
    ],
    tech: ["React.js", "JavaScript", "Responsive UI", "CRM Workflows", "REST APIs", "State Management"]
  }
];

export const projectCaseStudies = [
  {
    id: "duri-platform",
    title: "Duri: Ride-Sharing Platform",
    role: "Full Stack Developer",
    tagline: "An enterprise ride-sharing platform covering ride publishing, live booking, geospatial search, transactional alerts, and automated operations.",
    problem: "Riders and drivers needed instantaneous route-aware ride discovery, dynamic surge fares, and 100% reliable communications, while the backend handled high-throughput recurring background jobs.",
    features: [
      "Ride publishing, real-time booking approval/rejection, cancellations, and saved route alerts",
      "OTP verification, device session management, JWT access tokens, and rolling refresh tokens",
      "Transactional Notification Outbox pattern with background worker queuing",
      "Windows & IANA timezone reconciliation between UTC database persistence and local IST user display"
    ],
    outcomes: "Fare calculation accelerated by 65%; search latency plunged from 380 ms to <75 ms; database CPU usage decreased by 35%; 99.8% notification delivery.",
    codeSnippet: `// Geospatial Search & Fare Pipeline
FareEngine.Calculate(
  route.Distance,
  stops.Sequence,
  seat.Tier,
  surge.Multiplier
);

SearchAPI -> SQL Server
  geography::STIntersects()
  Polyline ∩ Route Cells
  Latency: 380ms -> <75ms

Outbox -> Background Worker -> WhatsApp / SMS`,
    chips: [".NET Core", "C#", "React.js", "TypeScript", "SQL Server", "REST APIs", "Worker Services", "WhatsApp API"]
  },
  {
    id: "sia-meetmod",
    title: "SIA Corporate Platform / MeetMod.ai",
    role: "Full Stack Developer",
    tagline: "An integrated enterprise meeting productivity suite seamlessly bridging Microsoft 365 and Google Workspace ecosystems.",
    problem: "Enterprise teams faced fragmented productivity tools requiring unified SSO identity, automatic cloud document sync, and cross-calendar scheduling without meeting conflicts.",
    features: [
      "Enterprise OAuth 2.0 SSO supporting Microsoft 365 and Google Workspace identities",
      "Bi-directional Google Drive & OneDrive document syncing with access permission controls",
      "Rich calendar engine supporting month, week, day, and agenda views with timezone conversion",
      "Conflict-detection algorithms, virtual join link generation, and encrypted session persistence"
    ],
    outcomes: "Google Lighthouse performance score exceeding 95; unified enterprise workflow adopted by international client teams.",
    codeSnippet: `// Multi-Tenant Cloud Auth & Calendar Sync
AuthEngine.Federate(
  Provider: "Microsoft365" | "GoogleWorkspace",
  Protocol: OAuth2.0 / PKCE
);

StorageGateway.Sync({
  from: "GoogleDrive",
  to: "OneDrive",
  permissions: "SyncReadWrite"
});

CalendarEngine.Render({
  views: ["month", "week", "day"],
  timezone: ClientTimezone.resolve()
});`,
    chips: ["React.js", "TypeScript", "Microsoft Graph API", "Google Cloud APIs", "OAuth 2.0", "SCSS", "Performance"]
  },
  {
    id: "workeasy-crm",
    title: "WorkEasy CRM",
    role: "React Developer",
    tagline: "A scalable customer relationship management web application powering lead tracking, customer communication pipelines, and sales analytics.",
    problem: "Sales representatives required an intuitive, zero-lag interface to handle high-frequency customer notes, dynamic stage funnels, and integrated outreach.",
    features: [
      "Modular dashboard architecture built on atomic, reusable React components",
      "Dynamic data grids with client-side sorting, fuzzy searching, and custom column configurations",
      "Automated client validation, dirty form checking, and optimistic UI updates",
      "Comprehensive mobile and tablet responsiveness across complex multi-step workflows"
    ],
    outcomes: "Drastically accelerated agent workflow time; maintained zero critical frontend regression across production updates.",
    codeSnippet: `// CRM Modular Component Pipeline
<LeadPipelineContainer>
  <StageBoard stages={activeStages} />
  <ActivityFeed stream={liveUpdates} />
  <DealForm onSubmit={handleOptimisticSave} />
</LeadPipelineContainer>

// Stack: React.js + Modular CSS + REST Services`,
    chips: ["React.js", "JavaScript", "Responsive UI", "CRM Architecture", "State Management"]
  }
];

export const featuredSteps = [
  {
    step: "01",
    subtitle: "Featured Engineering",
    title: "Duri Ride Sharing",
    desc: "A production-grade ride-sharing platform engineered from database to interface."
  },
  {
    step: "02",
    subtitle: "The Core Problem",
    title: "High Latency & Fares",
    desc: "Route-aware spatial matching, surge calculation, and high-frequency push notifications had to stay fast as data volume scaled."
  },
  {
    step: "03",
    subtitle: "The Architecture",
    title: "Geospatial & Outbox",
    desc: "Architected a custom .NET Core FareEngine with SQL Server spatial indexes, and built an asynchronous Outbox worker to decouple alerts."
  },
  {
    step: "04",
    subtitle: "Key Capabilities",
    title: "End-to-End Features",
    desc: "Ride publishing, booking approvals, OTP verification, JWT sessions, timezone reconciliation, and WhatsApp Cloud API dispatch."
  },
  {
    step: "05",
    subtitle: "Tech Stack",
    title: "Modern & Robust",
    desc: ".NET Core, C#, React.js, TypeScript, SQL Server, Worker Services, and WhatsApp Cloud API.",
    chips: [".NET Core", "C#", "React.js", "TypeScript", "SQL Server", "Worker Services", "WhatsApp API"]
  },
  {
    step: "06",
    subtitle: "Measurable Impact",
    title: "65% Faster Fares",
    desc: "Reduced search latency from 380 ms to <75 ms, reduced SQL Server CPU by 35%, and achieved a 99.8% notification delivery rate."
  }
];

export const highlightsData = [
  { metric: "65%", label: "Faster fare calculation", desc: "Engineered with .NET Core FareEngine using polyline & surge algorithms" },
  { metric: "<75 ms", label: "Search latency", desc: "Down from 380 ms through SQL Server spatial indexes & polyline routing" },
  { metric: "35%", label: "Lower SQL CPU usage", desc: "Achieved via query refactoring, execution plans, and targeted indexes" },
  { metric: "99.8%", label: "Notification delivery", desc: "Guaranteed via WhatsApp Cloud API, SMS gateways, and Outbox workers" },
  { metric: "40%", label: "Fewer runtime errors", desc: "Built with modular React, TypeScript, and strict state boundaries" },
  { metric: "95+", label: "Lighthouse performance", desc: "Delivered on SIA through code splitting, lazy loading, and asset tuning" }
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Electronics & Communication Engineering",
  institution: "Lakireddy Balireddy College of Engineering",
  period: "2019 – 2023",
  location: "Andhra Pradesh, India"
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
