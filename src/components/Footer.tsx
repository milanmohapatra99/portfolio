"use client";

export default function Footer() {
  return (
    <footer
      className="py-10 px-[10%] border-t"
      style={{
        background: "#070b14",
        borderColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div
          className="text-[1.5rem] font-bold"
          style={{
            background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Aethonex
        </div>

        <p className="text-white/80 text-[0.9rem] text-center">
          © 2026 Aethonex. All Rights Reserved.
        </p>

        {/* Email */}
        <div className="my-2">
          <a
            href="mailto:hello.aethonex@gmail.com"
            className="text-[#00F5A0] font-medium text-[1rem] no-underline transition-colors duration-300 hover:text-[#6C63FF] hover:underline"
          >
            hello.aethonex@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-2">
          {[
            { label: "in", href: "https://www.linkedin.com/in/aethonex-undefined-0422163b1/", ariaLabel: "LinkedIn" },
            { label: "𝕏", href: "#", ariaLabel: "Twitter" },
            { label: "GH", href: "#", ariaLabel: "GitHub" },
          ].map((social) => (
            <a
              key={social.ariaLabel}
              href={social.href}
              target={social.href !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={social.ariaLabel}
              className="w-10 h-10 flex items-center justify-center rounded-full font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-[3px]"
              style={{ background: "rgba(255, 255, 255, 0.05)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(135deg, #6C63FF, #00F5A0)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255, 255, 255, 0.05)";
              }}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
