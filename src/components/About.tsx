"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Our Mission",
    text: "To empower startups and businesses with innovative digital solutions that drive growth, enhance user experience, and deliver measurable results in the ever-evolving digital landscape.",
  },
  {
    title: "Our Vision",
    text: "To become a leading digital solutions provider recognized for excellence in design, development, and innovation, helping businesses transform their digital presence worldwide.",
  },
  {
    title: "Our Approach",
    text: "We combine creativity with technical expertise, delivering custom solutions tailored to your needs. From concept to deployment, we ensure quality, performance, and user satisfaction.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const targets = sectionRef.current?.querySelectorAll(".fade-in-up");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-25 px-[5%] md:px-[10%] relative"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 56, 0.5), rgba(11, 15, 26, 0.8))",
      }}
    >
      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        About Aethonex
      </h2>

      <div className="max-w-300 mx-auto">
        <p className="text-center text-white/80 max-w-225 mx-auto mb-15 text-[1.1rem]">
          We are a full-stack digital solutions startup specializing in UI/UX design, web development,
          backend systems, API integration, and payment solutions. Our mission is to empower businesses
          with cutting-edge technology and beautiful, functional digital products.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 mb-15">
          {cards.map((card) => (
            <div
              key={card.title}
              className="fade-in-up text-center p-8.75 rounded-5 border transition-all duration-300 cursor-default group"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-10px)";
                el.style.background = "rgba(255, 255, 255, 0.08)";
                el.style.borderColor = "rgba(0, 245, 160, 0.3)";
                el.style.boxShadow = "0 10px 30px rgba(0, 245, 160, 0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.background = "rgba(255, 255, 255, 0.05)";
                el.style.borderColor = "rgba(255, 255, 255, 0.05)";
                el.style.boxShadow = "";
              }}
            >
              <div className="text-[3rem] mb-5">
                {card.title === "Our Mission" ? "🎯" : card.title === "Our Vision" ? "🚀" : "⚙️"}
              </div>
              <h3 className="text-[1.4rem] text-[#00F5A0] mb-3.75 font-semibold">{card.title}</h3>
              <p className="text-white/80 leading-[1.7] text-[0.95rem] text-center">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Stats — hidden until we have real numbers */}
        {false && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7.5 max-w-225 mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="fade-in-up text-center py-6.25 px-3.75 rounded-3.75 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(108, 99, 255, 0.1)",
                border: "2px solid rgba(108, 99, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "scale(1.05)";
                el.style.borderColor = "#6C63FF";
                el.style.boxShadow = "0 5px 20px rgba(108, 99, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.borderColor = "rgba(108, 99, 255, 0.2)";
                el.style.boxShadow = "";
              }}
            >
              <h4
                className="text-[2.5rem] font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {stat.value}
              </h4>
              <p className="text-white/80 text-[0.9rem] text-center">{stat.label}</p>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
