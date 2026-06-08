// ─── All portfolio content ───
export const siteConfig = {
  name: "Shah Faisal",
  title: "AI Engineer & Full Stack Developer",
  description:
    "Building AI-powered systems, SaaS products, and automation solutions that scale. Available for freelance projects worldwide.",
  url: "https://yourportfolio.vercel.app",
  ogImage: "/og-image.png",
  email: "faisalagentai@gmail.com",
  phone: "+92 310 0122738",
  location: "Karachi, Pakistan",
  whatsapp: "https://wa.me/923100122738",
  calendly: "https://calendly.com/shahfaisal",
  github: "https://github.com/faisalaiagent",
  linkedin: "https://linkedin.com/in/shah-faisal-aiagent",
  twitter: "https://twitter.com/shahfaisal",
  roles: [
    "AI Engineer",
    "Full Stack Developer",
    "Automation Expert",
    "Shopify SaaS Builder",
    "AI Agent Developer",
    "Prompt Engineer",
  ],
};

export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const skills = [
  {
    category: "Frontend",
    color: "#4F8EF7",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    category: "Backend",
    color: "#A855F7",
    items: ["Node.js", "Python", "FastAPI", "Express.js", "Django", "PostgreSQL"],
  },
  {
    category: "AI / ML",
    color: "#06B6D4",
    items: ["OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Hugging Face"],
  },
  {
    category: "Automation",
    color: "#10B981",
    items: ["n8n", "Make.com", "Zapier", "Puppeteer", "Playwright", "Selenium"],
  },
  {
    category: "Shopify",
    color: "#F59E0B",
    items: ["Liquid", "Shopify CLI", "Polaris", "Storefront API", "Admin API", "App Bridge"],
  },
  {
    category: "Cloud & DevOps",
    color: "#EF4444",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Railway", "Supabase"],
  },
];

export const services = [
  {
    id: "ai-agents",
    icon: "Bot",
    title: "AI Agent Development",
    description:
      "Custom autonomous AI agents that handle complex workflows, decision-making, and multi-step tasks with tool use and memory.",
    features: ["LangChain / LlamaIndex", "Tool use & function calling", "Memory systems", "Multi-agent orchestration"],
    color: "#A855F7",
    gradient: "from-purple-600/20 to-violet-800/10",
  },
  {
    id: "shopify",
    icon: "ShoppingBag",
    title: "Shopify Store & SaaS",
    description:
      "High-converting Shopify stores and custom Shopify apps that scale your e-commerce business to new heights.",
    features: ["Custom theme development", "Private app creation", "Storefront API", "Subscription SaaS"],
    color: "#10B981",
    gradient: "from-emerald-600/20 to-teal-800/10",
  },
  {
    id: "automation",
    icon: "Workflow",
    title: "AI Automation Systems",
    description:
      "End-to-end business process automation using AI, integrating your entire stack into seamless workflows.",
    features: ["n8n / Make.com flows", "CRM integrations", "Data pipelines", "Webhook orchestration"],
    color: "#4F8EF7",
    gradient: "from-blue-600/20 to-indigo-800/10",
  },
  {
    id: "resume-ai",
    icon: "FileText",
    title: "Resume Analyzer AI",
    description:
      "AI-powered resume analysis tools with ATS scoring, skill gap analysis, and personalized improvement recommendations.",
    features: ["ATS scoring engine", "Skill gap analysis", "AI suggestions", "PDF parsing"],
    color: "#F59E0B",
    gradient: "from-amber-600/20 to-orange-800/10",
  },
  {
    id: "whatsapp",
    icon: "MessageCircle",
    title: "WhatsApp Automation",
    description:
      "Intelligent WhatsApp bots for customer service, lead generation, order updates, and AI-powered conversations.",
    features: ["WhatsApp Business API", "AI conversation flows", "CRM sync", "Broadcast automation"],
    color: "#06B6D4",
    gradient: "from-cyan-600/20 to-sky-800/10",
  },
  {
    id: "email-bot",
    icon: "Mail",
    title: "Email Automation Bots",
    description:
      "Intelligent email automation that reads, categorizes, and responds to emails with AI-generated personalized replies.",
    features: ["Gmail / Outlook API", "AI email drafting", "Smart categorization", "Follow-up sequences"],
    color: "#EC4899",
    gradient: "from-pink-600/20 to-rose-800/10",
  },
  {
    id: "saas",
    icon: "Layers",
    title: "SaaS Development",
    description:
      "Full-stack SaaS products from idea to launch — auth, billing, dashboards, and everything in between.",
    features: ["Next.js + Supabase", "Stripe billing", "Auth & RBAC", "Analytics dashboard"],
    color: "#8B5CF6",
    gradient: "from-violet-600/20 to-purple-800/10",
  },
  {
    id: "prompt",
    icon: "Sparkles",
    title: "Prompt Engineering",
    description:
      "Expert prompt design for production LLM systems — system prompts, chain-of-thought, RAG prompting, and evaluations.",
    features: ["System prompt design", "Chain-of-thought", "RAG optimization", "Prompt evaluation"],
    color: "#14B8A6",
    gradient: "from-teal-600/20 to-emerald-800/10",
  },
];

export const projects = [
  {
    id: "resume-analyzer",
    title: "Resume Analyzer AI",
    description:
      "Full-stack AI tool that analyzes resumes against job descriptions, provides ATS scoring, identifies skill gaps, and generates improvement suggestions using GPT-4.",
    longDescription:
      "A production-grade AI SaaS platform helping job seekers optimize their resumes. Features real-time ATS compatibility scoring, AI-powered suggestions, and a beautiful dashboard.",
    tags: ["Next.js", "OpenAI", "Python", "PostgreSQL", "Stripe"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
    color: "#A855F7",
  },
  {
    id: "ai-regex-studio",
    title: "AI Regex Studio",
    description:
      "Describe what you want to match in plain English. Generate regex instantly, test patterns live, understand every symbol, and save or share your expressions.",
    longDescription:
      "AI Regex Studio is a modern AI-powered developer utility SaaS designed to simplify regular expressions. It enables developers, QA engineers, and learners to generate regex from natural language, test patterns in real time, receive detailed explanations, and manage reusable regex snippets. Built with a developer-first experience, the platform combines AI assistance, live testing, syntax highlighting, and a responsive interface to make regex creation and debugging faster and more accessible.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Monaco Editor",
      "Prisma",
      "PostgreSQL",
      "Regex",
      "Developer Tools",
      "SaaS",
    ],
    category: "Developer Tools",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    github: "https://github.com/faisalaiagent/ai-regex-studio",
    demo: "https://ai-regex-studio.vercel.app/",
    featured: true,
    color: "#3B82F6",
  },
  {
    id: "email-automation",
    title: "Email Automation Bot",
    description:
      "Intelligent email bot that reads incoming emails, categorizes them, and responds with AI-generated personalized replies — reducing response time by 90%.",
    longDescription:
      "Enterprise-grade email automation using Claude AI for intelligent response generation, smart routing, and follow-up sequence management.",
    tags: ["Python", "Claude AI", "Gmail API", "FastAPI", "n8n"],
    category: "Automation",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
    color: "#EC4899",
  },
  {
    id: "whatsapp-assistant",
    title: "AI WhatsApp Assistant",
    description:
      "Production WhatsApp AI assistant for e-commerce businesses — handles orders, FAQs, product recommendations, and customer support 24/7.",
    longDescription:
      "Multi-business WhatsApp AI solution with custom personality, product catalog integration, order tracking, and smart escalation to human agents.",
    tags: ["WhatsApp API", "OpenAI", "Node.js", "Redis", "Webhooks"],
    category: "Automation",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
    color: "#06B6D4",
  },
  {
    id: "ecommerce-store",
    title: "Premium E-Commerce Store",
    description:
      "High-converting Shopify store with custom Liquid theme, optimized UX, upsell flows, and headless storefront achieving 4.2% conversion rate.",
    longDescription:
      "Custom-built Shopify experience with liquid theme development, 3D product views, AI-powered recommendations, and comprehensive analytics.",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS", "Analytics"],
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
    color: "#F59E0B",
  },
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "Real-time AI analytics dashboard with natural language querying, automated insights generation, and predictive forecasting for SaaS businesses.",
    longDescription:
      "Enterprise analytics platform with NLP-powered data querying, automated report generation, anomaly detection, and executive-level insight summaries.",
    tags: ["Next.js", "Python", "LangChain", "Recharts", "Supabase"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
    color: "#4F8EF7",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "AI Agent Specialist",
    description: "Deep-dived into agentic AI systems — building autonomous agents with tool use, RAG, and multi-agent orchestration.",
    tech: ["LangChain", "Claude", "MCP", "Vector DBs"],
  },
  {
    year: "2023",
    title: "SaaS & Automation Expert",
    description: "Launched multiple SaaS products and automation systems, serving clients across USA, UK, and Middle East.",
    tech: ["Next.js", "Shopify", "n8n", "OpenAI"],
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    description: "Mastered full-stack development — from pixel-perfect UIs to robust backend APIs and database architecture.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    year: "2021",
    title: "Started the Journey",
    description: "Began with web fundamentals, rapidly growing into modern JavaScript, TypeScript, and the AI engineering space.",
    tech: ["HTML/CSS", "JavaScript", "Python", "Git"],
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow SaaS",
    avatar: "SM",
    content:
      "Delivered an AI automation system that saved us 40+ hours per week. Exceptional technical depth and communication throughout the project.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashidi",
    role: "Founder, ShopPro MENA",
    avatar: "AA",
    content:
      "Our Shopify store conversion rate jumped from 1.8% to 4.2% after the redesign and AI recommendation engine. Absolutely world-class work.",
    rating: 5,
  },
  {
    name: "Jessica Park",
    role: "Head of Ops, AutomateHQ",
    avatar: "JP",
    content:
      "The WhatsApp AI assistant handles 80% of our customer queries automatically now. Best investment we've made in 2024. Highly recommend.",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    role: "CTO, Velocity Apps",
    avatar: "MW",
    content:
      "Technical excellence combined with a real understanding of business requirements. The Resume AI product launched ahead of schedule and beyond spec.",
    rating: 5,
  },
];

export const techMarquee = [
  "Next.js", "React", "TypeScript", "Python", "FastAPI",
  "OpenAI", "Claude AI", "LangChain", "Shopify", "Node.js",
  "PostgreSQL", "Supabase", "Docker", "AWS", "Vercel",
  "n8n", "Framer Motion", "Tailwind CSS", "GraphQL", "Redis",
];