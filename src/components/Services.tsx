"use client";

import { useEffect, useRef } from "react";

type ServiceItem = { title: string; desc: string };
type ServiceGroup = { groupTitle: string; items: ServiceItem[] };
type Category = { title: string; desc: string; groups: ServiceGroup[] };

const categories: Category[] = [
  {
    title: "1. UI/UX Design Services (Main Category)",
    desc: "These should be your core services.",
    groups: [
      {
        groupTitle: "📱 Mobile App UI/UX Design",
        items: [
          { title: "Android & iOS App Design", desc: "Native and cross-platform mobile applications with intuitive interfaces" },
          { title: "Fintech Apps", desc: "Payment apps, banking solutions, and financial management tools" },
          { title: "E-commerce Apps", desc: "Shopping apps with seamless checkout and user experience" },
          { title: "EdTech / Service Apps", desc: "Educational platforms and on-demand service applications" },
          { title: "Wireframing + Prototyping (Figma)", desc: "Interactive prototypes and user flow designs in Figma" },
        ],
      },
      {
        groupTitle: "🌐 Website Design",
        items: [
          { title: "Landing Pages", desc: "High-converting landing pages for campaigns and products" },
          { title: "Business Websites", desc: "Professional corporate websites with modern aesthetics" },
          { title: "Portfolio Websites", desc: "Stunning portfolio sites for creatives and professionals" },
          { title: "SaaS Website UI", desc: "Clean, conversion-focused designs for SaaS products" },
          { title: "Responsive Web Design", desc: "Mobile-first, fully responsive web experiences" },
        ],
      },
      {
        groupTitle: "📊 Dashboard / Admin Panel Design",
        items: [
          { title: "CRM Dashboard", desc: "Customer relationship management interfaces" },
          { title: "Analytics Dashboard", desc: "Data visualization and business intelligence dashboards" },
          { title: "Fintech Admin Panels", desc: "Financial management and transaction monitoring systems" },
          { title: "Data Visualization UI", desc: "Interactive charts, graphs, and real-time data displays" },
        ],
      },
    ],
  },
  {
    title: "2. Visual Design Services",
    desc: "These support your UI/UX skill and increase your value.",
    groups: [
      {
        groupTitle: "🎨 Logo Design",
        items: [
          { title: "Minimal Logo", desc: "Clean, modern minimalist logo designs" },
          { title: "Startup Branding Logo", desc: "Complete brand identity for new ventures" },
          { title: "App Logo", desc: "Icon-based logos optimized for mobile applications" },
        ],
      },
      {
        groupTitle: "✏️ Icon Design",
        items: [
          { title: "App Icon Sets", desc: "Consistent icon families for applications" },
          { title: "Custom UI Icons", desc: "Unique icons tailored to your brand" },
          { title: "Line / Filled Icons", desc: "Versatile icon styles for any interface" },
        ],
      },
      {
        groupTitle: "🖼️ Vector Illustration",
        items: [
          { title: "Website Illustrations", desc: "Custom illustrations for web pages and hero sections" },
          { title: "Onboarding Screens", desc: "Welcome illustrations for app first-time users" },
          { title: "Custom Character Illustration", desc: "Branded characters and mascot designs" },
          { title: "Flat / Modern Style Illustration", desc: "Contemporary illustration styles for digital products" },
        ],
      },
    ],
  },
  {
    title: "3. Web Development Services",
    desc: "Complete end-to-end web development solutions.",
    groups: [
      {
        groupTitle: "💻 Frontend Development",
        items: [
          { title: "HTML5, CSS3, JavaScript", desc: "Modern, semantic markup and styling" },
          { title: "React.js Development", desc: "Component-based SPAs with React ecosystem" },
          { title: "Vue.js & Angular", desc: "Progressive web apps with modern frameworks" },
          { title: "Responsive Design Implementation", desc: "Mobile-first CSS and adaptive layouts" },
          { title: "Tailwind CSS & Bootstrap", desc: "Rapid UI development with utility frameworks" },
          { title: "Web Performance Optimization", desc: "Fast loading times and optimal user experience" },
        ],
      },
      {
        groupTitle: "⚙️ Backend Development",
        items: [
          { title: "Node.js & Express", desc: "Scalable server-side JavaScript applications" },
          { title: "Python / Django / Flask", desc: "Robust backend systems with Python frameworks" },
          { title: "PHP & Laravel", desc: "Enterprise-level PHP web applications" },
          { title: "RESTful API Development", desc: "Clean, documented REST APIs" },
          { title: "GraphQL APIs", desc: "Modern GraphQL endpoints for flexible data fetching" },
          { title: "Microservices Architecture", desc: "Scalable, distributed backend systems" },
        ],
      },
      {
        groupTitle: "🔗 Full-Stack Development",
        items: [
          { title: "MERN Stack", desc: "MongoDB, Express, React, Node.js applications" },
          { title: "MEAN Stack", desc: "MongoDB, Express, Angular, Node.js solutions" },
          { title: "Next.js / Nuxt.js", desc: "Server-side rendering and static site generation" },
          { title: "JAMstack Development", desc: "JavaScript, APIs, and Markup modern architecture" },
        ],
      },
    ],
  },
  {
    title: "4. API & Integration Services",
    desc: "Connect your systems with powerful integrations.",
    groups: [
      {
        groupTitle: "🔌 API Development & Integration",
        items: [
          { title: "Custom API Development", desc: "Build scalable REST and GraphQL APIs from scratch" },
          { title: "Third-Party API Integration", desc: "Connect to external services and platforms" },
          { title: "API Documentation", desc: "Comprehensive API docs with Swagger/OpenAPI" },
          { title: "API Security & Authentication", desc: "OAuth, JWT, API keys, and rate limiting" },
          { title: "Webhook Implementation", desc: "Real-time event-driven integrations" },
          { title: "API Testing & Monitoring", desc: "Automated testing and performance monitoring" },
        ],
      },
    ],
  },
  {
    title: "5. Payment Gateway Integration",
    desc: "Secure payment processing for your business.",
    groups: [
      {
        groupTitle: "💳 Payment Solutions",
        items: [
          { title: "Stripe Integration", desc: "Complete Stripe payment processing and subscriptions" },
          { title: "PayPal Integration", desc: "PayPal checkout and payment buttons" },
          { title: "Razorpay Integration", desc: "Indian payment gateway for local transactions" },
          { title: "Payment Gateway Customization", desc: "Branded checkout experiences" },
          { title: "Subscription & Recurring Billing", desc: "Automated subscription management systems" },
          { title: "Payment Security (PCI Compliance)", desc: "Secure payment handling and data protection" },
          { title: "Multi-Currency Support", desc: "Global payment processing in multiple currencies" },
          { title: "Transaction Management", desc: "Payment tracking, refunds, and reporting" },
        ],
      },
    ],
  },
  {
    title: "6. Database & SQL Services",
    desc: "Robust data management and optimization.",
    groups: [
      {
        groupTitle: "🗄️ Database Solutions",
        items: [
          { title: "SQL Database Design", desc: "MySQL, PostgreSQL, SQL Server database architecture" },
          { title: "NoSQL Databases", desc: "MongoDB, Firebase, DynamoDB implementation" },
          { title: "Database Optimization", desc: "Query optimization and indexing strategies" },
          { title: "Data Migration", desc: "Seamless data transfer between systems" },
          { title: "Backup & Recovery Solutions", desc: "Automated backups and disaster recovery" },
          { title: "Database Security", desc: "Encryption, access control, and security audits" },
          { title: "ORM Implementation", desc: "Sequelize, Prisma, TypeORM integration" },
          { title: "Real-time Databases", desc: "Firebase Realtime Database and WebSocket solutions" },
        ],
      },
    ],
  },
  {
    title: "7. AI & Automation Services",
    desc: "Cutting-edge AI solutions and intelligent automation for modern businesses.",
    groups: [
      {
        groupTitle: "🤖 Generative AI Solutions",
        items: [
          { title: "AI Chatbots", desc: "Custom chatbots powered by OpenAI, Claude & Gemini APIs" },
          { title: "AI Content Generation", desc: "Automated content creation and text generation tools" },
          { title: "AI Image Integration", desc: "DALL-E, Midjourney & Stable Diffusion API integration" },
          { title: "RAG Systems", desc: "Retrieval-Augmented Generation for custom knowledge bases" },
          { title: "AI Voice Assistants", desc: "Text-to-speech and speech-to-text integrations" },
          { title: "LLM Fine-tuning", desc: "Custom model training for specific use cases" },
        ],
      },
      {
        groupTitle: "🔗 AI Workflows & Integrations",
        items: [
          { title: "LangChain Integration", desc: "Building complex AI chains and agents with LangChain.js" },
          { title: "Vector Databases", desc: "Pinecone, Weaviate & ChromaDB implementation" },
          { title: "AI API Integration", desc: "OpenAI, Anthropic, Google AI & Hugging Face APIs" },
          { title: "Semantic Search", desc: "Intelligent search using embeddings and vector similarity" },
          { title: "AI Analytics", desc: "Sentiment analysis, classification & data extraction" },
          { title: "Prompt Engineering", desc: "Optimized prompts and prompt management systems" },
        ],
      },
      {
        groupTitle: "⚡ JavaScript Automations",
        items: [
          { title: "n8n Workflows", desc: "Visual workflow automation with n8n self-hosted" },
          { title: "Node.js Automation", desc: "Custom automation scripts and scheduled tasks" },
          { title: "Puppeteer & Playwright", desc: "Browser automation, scraping & testing" },
          { title: "Zapier Integration", desc: "Custom Zapier apps and workflow connections" },
          { title: "Make (Integromat)", desc: "Complex automation scenarios and integrations" },
          { title: "Webhook Automation", desc: "Event-driven automation and real-time triggers" },
          { title: "Email Automation", desc: "Automated email sequences with Nodemailer & SendGrid" },
          { title: "Discord & Slack Bots", desc: "Custom bots for team collaboration platforms" },
        ],
      },
    ],
  },
  {
    title: "8. Additional Services",
    desc: "Extra value-added services for complete solutions.",
    groups: [
      {
        groupTitle: "🌟 Other Services",
        items: [
          { title: "Cloud Deployment", desc: "AWS, Azure, Google Cloud, Vercel, Netlify" },
          { title: "DevOps & CI/CD", desc: "Automated deployment pipelines and containers" },
          { title: "Technical Consulting", desc: "Architecture planning and tech stack recommendations" },
          { title: "Code Review & Optimization", desc: "Performance audits and best practices implementation" },
          { title: "Maintenance & Support", desc: "Ongoing technical support and updates" },
          { title: "SEO & Web Analytics", desc: "Search optimization and Google Analytics setup" },
        ],
      },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    sectionRef.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-25 px-[5%] md:px-[10%]"
      style={{ background: "#0b0f1a" }}
    >
      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        Our Services
      </h2>
      <p className="text-center text-white/90 max-w-225 mx-auto mb-15 text-[1.1rem]">
        These are our core offerings designed to help your startup succeed in the digital world.
      </p>

      <div className="flex flex-col gap-10">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="fade-in-up rounded-6.25 p-10 transition-all duration-400 cursor-default"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              animation: "fadeIn 0.6s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(0, 245, 160, 0.2)";
              el.style.boxShadow = "0 10px 40px rgba(0, 245, 160, 0.1)";
              el.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255, 255, 255, 0.05)";
              el.style.boxShadow = "";
              el.style.transform = "";
            }}
          >
            <h3 className="text-[1.8rem] font-bold text-white mb-4">{cat.title}</h3>
            <p className="text-white/80 mb-8 text-[1rem] text-left">{cat.desc}</p>

            {cat.groups.map((group) => (
              <div key={group.groupTitle} className="mb-9 last:mb-0">
                <h4 className="text-[1.3rem] font-semibold text-[#00F5A0] mb-5 pl-1.25">
                  {group.groupTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 items-start p-4 rounded-xl transition-all duration-300 cursor-default"
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(108, 99, 255, 0.08)";
                        el.style.borderColor = "rgba(108, 99, 255, 0.3)";
                        el.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255, 255, 255, 0.02)";
                        el.style.borderColor = "transparent";
                        el.style.transform = "";
                      }}
                    >
                      <span className="text-[#00F5A0] text-[1.2rem] mt-0.5">•</span>
                      <div>
                        <strong className="block text-white font-semibold mb-1 text-[1rem]">
                          {item.title}
                        </strong>
                        <p className="text-white/80 text-[0.9rem] leading-normal text-left m-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
