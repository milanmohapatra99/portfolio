"use client";

import { useState, useRef } from "react";

const inputBase =
  "w-full px-5 py-4 rounded-3 text-white text-base outline-none transition-all duration-300 font-[inherit] contact-input";
const inputStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "2px solid rgba(255, 255, 255, 0.1)",
  color: "#fff",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<{ text: string; type: "success" | "error" | "" }>({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const errs = { name: "", email: "", service: "", message: "" };
    let valid = true;
    if (form.name.trim().length < 2) {
      errs.name = "Please enter a valid name (at least 2 characters)";
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address";
      valid = false;
    }
    if (!form.service) {
      errs.service = "Please select a service";
      valid = false;
    }
    if (form.message.trim().length < 10) {
      errs.message = "Please enter a message (at least 10 characters)";
      valid = false;
    }
    setErrors(errs);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ text: "Please fix the errors above", type: "error" });
      return;
    }
    setLoading(true);
    setStatus({ text: "", type: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ text: "Message sent successfully! We'll get back to you soon.", type: "success" });
        setForm({ name: "", email: "", service: "", message: "" });
        setErrors({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus({ text: "Failed to send message. Please try again.", type: "error" });
      }
    } catch {
      setStatus({ text: "An error occurred. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fieldStyle = (err: string) => ({
    ...inputStyle,
    borderColor: err ? "#ff6b6b" : "rgba(255, 255, 255, 0.1)",
  });

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#00F5A0";
    e.target.style.background = "rgba(255, 255, 255, 0.08)";
    e.target.style.boxShadow = "0 0 20px rgba(0, 245, 160, 0.2)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, err: string) => {
    e.target.style.borderColor = err ? "#ff6b6b" : "rgba(255, 255, 255, 0.1)";
    e.target.style.background = "rgba(255, 255, 255, 0.05)";
    e.target.style.boxShadow = "";
  };

  return (
    <section
      id="contact"
      className="py-25 px-[5%] md:px-[10%] relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 56, 0.9), rgba(11, 15, 26, 0.95))",
      }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-100 h-100 rounded-full opacity-40 animate-float-shape"
          style={{
            background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
            top: "-150px",
            right: "-100px",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-75 h-75 rounded-full opacity-40 animate-float-shape-reverse"
          style={{
            background: "linear-gradient(135deg, #00F5A0, #6C63FF)",
            bottom: "-100px",
            left: "-50px",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-150 h-150 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0, 245, 160, 0.08) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
          Let&apos;s Work Together
        </h2>
        <p className="text-center text-white/80 max-w-225 mx-auto mb-10 text-[1.1rem]">
          Ready to transform your startup idea into reality? Get in touch with us.
        </p>

        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="max-w-162.5 mx-auto flex flex-col gap-6"
          noValidate
        >
          {/* Name */}
          <div>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, errors.name)}
              className={inputBase}
              style={fieldStyle(errors.name)}
            />
            {errors.name && <span className="block text-[#ff6b6b] text-[0.85rem] mt-1.25">{errors.name}</span>}
          </div>

          {/* Email */}
          <div>
            <input
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, errors.email)}
              className={inputBase}
              style={fieldStyle(errors.email)}
            />
            {errors.email && <span className="block text-[#ff6b6b] text-[0.85rem] mt-1.25">{errors.email}</span>}
          </div>

          {/* Service */}
          <div>
            <select
              ref={serviceRef}
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e, errors.service)}
              className={`${inputBase} cursor-pointer`}
              style={{ ...fieldStyle(errors.service), colorScheme: "dark" }}
            >
              <option value="">Select a Service</option>
              <option value="uiux">UI/UX Design</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="api">API Integration</option>
              <option value="payment">Payment Gateway</option>
              <option value="database">Database Services</option>
              <option value="ai">AI & Automation</option>
              <option value="other">Other</option>
            </select>
            {errors.service && <span className="block text-[#ff6b6b] text-[0.85rem] mt-1.25">{errors.service}</span>}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={5}
              placeholder="Tell us about your project"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
              onBlur={(e) => handleBlur(e, errors.message)}
              className={`${inputBase} resize-none`}
              style={fieldStyle(errors.message)}
            />
            {errors.message && <span className="block text-[#ff6b6b] text-[0.85rem] mt-1.25">{errors.message}</span>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="relative overflow-hidden px-10 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 btn-shine cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
              boxShadow: "0 4px 25px rgba(108, 99, 255, 0.4)",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px) scale(1.02)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 35px rgba(0, 245, 160, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 25px rgba(108, 99, 255, 0.4)";
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status.text && (
            <p
              className={`text-center font-medium mt-2 ${
                status.type === "success" ? "text-[#00F5A0]" : "text-[#ff6b6b]"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
