"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully 🚀");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("Server error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
      text-white px-6 py-20 relative overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-3xl w-full z-10">

        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Contact Me
        </h2>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 text-center mt-6">
          Send me a message — I’ll reply via email 📩
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 bg-gray-900/40 border border-gray-800
          p-6 rounded-2xl backdrop-blur-md"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-800
            focus:border-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-800
            focus:border-blue-500 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-800
            focus:border-blue-500 outline-none resize-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600
            px-6 py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message via Email "}
          </button>

          {status && (
            <p className="text-center text-green-400 mt-2">
              {status}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}