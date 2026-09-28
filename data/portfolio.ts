import type { Project, Experience, SkillCategory, Education, SocialLink } from "@/types";

export const personalInfo = {
	name: "Gautam Kumar",
	firstName: "Gautam",
	lastName: "Kumar",
	role: "MERN Stack Developer",
	tagline: "React · Next.js Specialist",
	email: "gautamsiddharth2013@gmail.com",
	phone: "+91 7808233110",
	location: "Delhi, India",
	about: `I'm a MERN Stack Developer with 1 years of experience building fast, scalable, and accessible web applications. I specialize in  React, Node.js, Express, and MongoDB, with a sharp eye for UI/UX and a passion for clean, maintainable code. — I turn complex requirements into elegant experiences.`,
	// resumeUrl: "https://drive.google.com/file/d/1aGe4UMpCjyRPTnZ6RAwNfyroayVQlO1p/view?usp=drive_link",
	resumeUrl: "/GAUTAM_RESUME.pdf",
};

export const socialLinks: SocialLink[] = [
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/gautam-kumar-b4052b9b", icon: "linkedin" },
	{ name: "GitHub", url: "https://github.com/gautamsiddharth09", icon: "github" },
	{ name: "Email", url: "mailto:gautamsiddharth2013@gmail.com", icon: "email" },
	{ name: "Phone", url: "tel:+917808233110", icon: "phone" },
];

export const achievements = [
  // { value: "1+", label: "Years Experience" },
  // { value: "10+", label: "Product Pages Built" },
  // { value: "15+", label: "REST APIs Developed" },
  // { value: "4+", label: "Payment & Checkout Flows" },
];

export const experiences: Experience[] = [
	{
		id: "Riquenza",
		company: "Riquenza",
		role: "Software Development Engineer",
		period: "Oct 2025 – Present",
		location: "Delhi, India",
		description: [
			" Developed 10+ dynamic skincare product pages using React.js for seamless user navigation.",
			" Built 15+ REST APIs for product, cart, and order workflows using Express.js.",
			"Integrated 4+ secure payment gateways and checkout flows using Node.js and MongoDB database",
			"Optimized database queries, reducing user-facing product loading latency by 35% across platforms.",
	
		],
		technologies: [
			"React",
			"Node.js",
			"Express.js",
			"Redux",
			"Context API",
			"Material UI",
			"JWT",
			"MongoDB",
		],
	},
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
			 "Bootstrap",
    ],
  },

  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
    ],
  },

  {
    category: "State & Data",
    icon: "🗄️",
    skills: [
      "Redux Toolkit",
      "Context API",
      "MongoDB",
      "Redis",
      "SQL",
      "NoSQL",
    ],
  },

  {
    category: "AI & Integrations",
    icon: "🤖",
    skills: [
      "Google Gemini API",
      "OpenAI API",
      "LangChain",
      "RAG",
      "AI Integration",
      "Razorpay",
    ],
  },

  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
    ],
  },

  {
    category: "Development Practices",
    icon: "✅",
    skills: [
      "Responsive Design",
      "API Integration",
      "Authentication & Authorization",
      "Database Optimization",
      "Reusable Components",
      "Modular Architecture",
    ],
  },
];

export const projects: Project[] = [
	{
		id: "Invoice-Pulse ",
		title: "InvoicePulse",
		description: " AI-Powered Invoicing and Business Management Platform",
		longDescription:
			"AI-powered invoicing platform using Google Gemini to extract 50+ invoice fields with 80% accuracy. Includes automated GST/VAT, discounts, shipping calculations, product catalogue management, PDF invoice generation, authentication, email delivery, and dashboard analytics",
		techStack: ["Java Script" , "React.js" , "Node.js" , "Express.js" , "MongoDB" , "Redux Toolkit" , "Google Gemini AI"],
		liveUrl: "https://invoice-pulse-frontend.vercel.app",
		codeUrl: "https://github.com/gautamsiddharth09/InvoicePulse-Frontend.git",
		image: "/assets/projects/invoice-pulse.png",
		gradient: "from-violet-500 to-purple-700",
		featured: true,
	},
	{
		id: "Money-mint",
		title: "MoneyMint",
		description: "Fintech Platform",
		longDescription:
			"A MERN-based fintech platform for financial management and digital lending, featuring income, expense, transaction, loan application, disbursement, EMI tracking, and Google Gemini-powered credit risk assessment.",
		techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT",  "Joi validation", "Razorpay",],
		liveUrl: "https://money-mint-frontend.vercel.app",
		codeUrl: "https://github.com/gautamsiddharth09/MoneyMint_Backend.git",
		image: "/assets/projects/money-mint.png",
		gradient: "from-green-500 to-emerald-700",
		featured: true,
	},
	{
		id: "Support-iq",
		title: "Support IQ",
		description: " AI-Powered SaaS Customer Support Tool",
		longDescription:
			"Built an AI-powered SaaS chatbot using Google Gemini, with secure authentication, chatbot configuration, conversation management, dynamic website embedding, and a responsive, performance-optimized UI.",
		techStack: [ "Next.js", "TypeScript" , "Node.js" , "Express.js" , "MongoDB" , "Gemini API"],
		liveUrl: "https://support-iq-five.vercel.app",
		codeUrl: "https://github.com/gautamsiddharth09/Support_IQ.git",
		image: "/assets/projects/support-iq.png",
		gradient: "from-red-500 to-rose-700",
		featured: false,
	},
];

export const education: Education[] = [
	{
		institution: "AccioJob Institute",
		degree: "Full Stack Web Development (MERN Stack)",
		period: "Aug 2025",
	},
	{
		institution: "Patna University, Bihar",
		degree: "Bachelor of Arts",
		period: "2012 – 2015",
	},
];
