"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-[10%] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0b0f1a 0%, #1a1f38 50%, #0b0f1a 100%)",
      }}
    >
      {/* Radial glow — top left */}
      <div
        className="absolute w-150 h-150 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108, 99, 255, 0.2), transparent 70%)",
          top: "-250px",
          left: "-250px",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Particles */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-1 h-1 bg-[#00F5A0] rounded-full opacity-0 animate-particle particle-${i + 1}`}
          />
        ))}
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shape 1 – square */}
        <div
          className="absolute w-20 h-20 border-2 border-[#6C63FF] opacity-[0.15] animate-rotate animate-float"
          style={{ top: "15%", right: "15%", animationDuration: "20s, 6s" }}
        />
        {/* Shape 2 – circle */}
        <div
          className="absolute w-15 h-15 border-2 border-[#00F5A0] rounded-full opacity-[0.15] animate-float-reverse"
          style={{ bottom: "20%", left: "10%" }}
        />
        {/* Shape 3 – rounded square */}
        <div
          className="absolute w-10 h-10 border-2 border-[#6C63FF] rounded-2.5 opacity-[0.15] animate-rotate-reverse animate-float-slow"
          style={{ top: "30%", left: "8%", animationDuration: "15s, 7s" }}
        />
        {/* Shape 4 – large rounded */}
        <div
          className="absolute w-25 h-25 border-2 border-[#00F5A0] opacity-[0.15] animate-rotate-slow animate-float-slow"
          style={{ bottom: "15%", right: "20%", borderRadius: "30%", animationDuration: "25s, 8s" }}
        />
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          className="absolute w-50 h-50 opacity-20"
          style={{ top: "10%", left: "5%" }}
        >
          <path className="circuit-path" d="M10,100 L50,100 L70,50 L120,50 L140,100 L190,100" />
          <circle className="circuit-node" cx="50" cy="100" r="4" />
          <circle className="circuit-node" cx="120" cy="50" r="4" />
          <circle className="circuit-node" cx="140" cy="100" r="4" />
        </svg>
        <svg
          viewBox="0 0 200 200"
          className="absolute w-50 h-50 opacity-20"
          style={{ bottom: "15%", right: "8%" }}
        >
          <path className="circuit-path" d="M10,50 L60,50 L80,100 L130,100 L150,150 L190,150" />
          <circle className="circuit-node" cx="80" cy="100" r="4" />
          <circle className="circuit-node" cx="150" cy="150" r="4" />
        </svg>
      </div>

      {/* Code Block */}
      <div
        className="absolute hidden lg:block animate-float-code"
        style={{
          top: "15%",
          right: "5%",
          background: "rgba(11, 15, 26, 0.8)",
          border: "1px solid rgba(108, 99, 255, 0.3)",
          borderRadius: "10px",
          padding: "15px 20px",
          fontFamily: "'Courier New', monospace",
          fontSize: "0.85rem",
          textAlign: "left",
          opacity: 0.6,
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="leading-relaxed text-white/70">
          <span className="text-[#ff79c6]">const</span> innovation ={" "}
          <span className="text-[#f1fa8c]">&quot;Aethonex&quot;</span>;
        </div>
        <div className="leading-relaxed text-white/70">
          <span className="text-[#ff79c6]">function</span>{" "}
          <span className="text-[#8be9fd]">transform</span>(idea) &#123;
        </div>
        <div className="leading-relaxed text-white/70">
          &nbsp;&nbsp;<span className="text-[#ff79c6]">return</span> idea.
          <span className="text-[#8be9fd]">build</span>();
        </div>
        <div className="leading-relaxed text-white/70">&#125;</div>
      </div>

      {/* Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {["<//>", "{}", "01", "API", "DB", "UX"].map((icon, i) => (
          <span
            key={i}
            className={`absolute font-mono font-bold text-[0.9rem] text-[#6C63FF] opacity-[0.15] animate-particle tech-${i + 1}`}
            style={{ animationName: "floatIcon", animationDuration: "8s", animationDelay: `${i}s` }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Binary */}
      <div className="absolute bottom-[8%] left-[3%] flex flex-col gap-1.25 font-mono text-[0.7rem] text-[#00F5A0] pointer-events-none">
        {["01001010", "10110101", "01100110", "10011001"].map((bin, i) => (
          <span key={i} className={`binary-${i + 1}`}>{bin}</span>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center">
        <span
          className="inline-block px-5 py-2 rounded-full text-[0.85rem] font-medium text-[#00F5A0] mb-6 animate-fade-in-up backdrop-blur-[10px]"
          style={{
            background: "rgba(108, 99, 255, 0.15)",
            border: "1px solid rgba(108, 99, 255, 0.3)",
          }}
        >
          Welcome to the Future
        </span>

        <h1
          className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-bold mb-6 leading-[1.2]"
          style={{
            background: "linear-gradient(135deg, #fff 0%, #e0e0e0 50%, #fff 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 80px rgba(108, 99, 255, 0.3)",
            animation: "fadeInUp 0.8s ease",
          }}
        >
          Empowering{" "}
          <span className="gradient-text animate-text-glow">Digital</span>{" "}
          Innovation
        </h1>

        <p
          className="text-[1rem] sm:text-[1.25rem] text-white/80 max-w-162.5 mb-10 leading-[1.8]"
          style={{ animation: "fadeInUp 1s ease" }}
        >
          Transform your startup vision into reality with comprehensive digital solutions.
          From design to deployment, we deliver excellence at every stage.
        </p>

        <div className="flex gap-5 flex-wrap justify-center" style={{ animation: "fadeInUp 1.2s ease" }}>
          <button
            onClick={() => scrollTo("#services")}
            className="relative overflow-hidden w-40 h-10 rounded-full font-semibold text-base text-white transition-all duration-300 btn-shine cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
              boxShadow: "0 4px 25px rgba(108, 99, 255, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px) scale(1.02)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 35px rgba(0, 245, 160, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 25px rgba(108, 99, 255, 0.4)";
            }}
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="w-40 h-10 rounded-full font-semibold text-base text-white bg-transparent transition-all duration-300 cursor-pointer hover:text-[#00F5A0]"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#00F5A0";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(0, 245, 160, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLButtonElement).style.transform = "";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Center Glow */}
      <div
        className="absolute w-125 h-125 pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(0, 245, 160, 0.08), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Bottom-right glow */}
      <div
        className="absolute w-125 h-125 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 245, 160, 0.15), transparent 70%)",
          bottom: "-200px",
          right: "-200px",
          animation: "pulse-glow 6s ease-in-out infinite reverse",
        }}
      />
    </section>
  );
}
