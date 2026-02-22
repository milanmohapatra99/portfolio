"use client";

import { useEffect, useRef } from "react";

const members = [
  {
    name: "Milan Mohapatra",
    photo: "/pics/milan.jpg",
    role: "Full Stack Developer",
    bio: "Full-stack developer specializing in modern web technologies and scalable architectures.",
    linkedin: "https://www.linkedin.com/in/milanmohapatra63/",
  },
  {
    name: "Shifa Farhad",
    photo: "/pics/shifa.jpg",
    role: "UI/UX Designer",
    bio: "Creative designer crafting beautiful and intuitive user experiences for digital products.",
    linkedin: "https://www.linkedin.com/in/shifa-farhad-088212207/",
  },
  {
    name: "Pritam Kumar Manohari",
    photo: "/pics/pritam.png",
    role: "Full Stack Developer",
    bio: "Expert in server-side development, databases, and API design for robust applications.",
    linkedin: "https://www.linkedin.com/in/pritam-kumar-manohari-148b16251/",
  },
  {
    name: "Sujal Kumar Ghosh",
    photo: "/pics/sujal.png",
    role: "Backend & Infra Engineer",
    bio: "Full stack focused backend and infrastructure engineer building scalable systems and reliable deployments.",
    linkedin: "https://www.linkedin.com/in/sujalkrghosh/",
  },
];

export default function Team() {
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
    const targets = sectionRef.current?.querySelectorAll(".fade-in-up");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-25 px-[5%] md:px-[10%]"
      style={{ background: "#0b0f1a" }}
    >
      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        Meet Our Team
      </h2>
      <p className="text-center text-[1.4rem] font-semibold text-[#6C63FF] mb-3.75">
        Built by Thinkers. Driven by Designers.
      </p>
      <p className="text-center text-white/80 max-w-175 mx-auto mb-15 text-[1.1rem]">
        Our talented team brings together diverse skills and expertise to deliver exceptional results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5 max-w-300 mx-auto">
        {members.map((member) => (
          <div
            key={member.name}
            className="fade-in-up text-center p-8.75 rounded-5 transition-all duration-400 cursor-default"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(-10px)";
              el.style.background = "rgba(255, 255, 255, 0.08)";
              el.style.borderColor = "rgba(0, 245, 160, 0.3)";
              el.style.boxShadow = "0 15px 40px rgba(0, 245, 160, 0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "";
              el.style.background = "rgba(255, 255, 255, 0.05)";
              el.style.borderColor = "rgba(255, 255, 255, 0.05)";
              el.style.boxShadow = "";
            }}
          >
            {/* Avatar */}
            <div
              className="relative w-45 h-45 mx-auto mb-6.25 rounded-full overflow-hidden p-0.75"
              style={{ background: "linear-gradient(135deg, #6C63FF, #00F5A0)" }}
            >
              {/* Circular photo */}
              <img
                src={member.photo}
                alt={member.name}
                className="absolute top-0.75 left-0.75 right-0.75 bottom-0.75 w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-full"
              />

              {/* LinkedIn overlay on hover */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="absolute top-0.75 left-0.75 right-0.75 bottom-0.75 flex items-center justify-center rounded-full opacity-0 transition-opacity duration-300 z-10 no-underline group/linkedin"
                style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0")}
              >
                <span
                  className="w-12.5 h-12.5 bg-[#0077B5] rounded-2.5 flex items-center justify-center text-[1.8rem] font-bold text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]"
                >
                  in
                </span>
              </a>
            </div>

            <h3 className="text-[1.5rem] text-white mb-2 font-semibold">{member.name}</h3>
            <p className="text-[1rem] text-[#00F5A0] font-medium mb-4">{member.role}</p>
            <p className="text-white/80 text-[0.9rem] leading-[1.6]">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
