"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20
    bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
    text-white border-b border-gray-800/60 backdrop-blur-md">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-full">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-blue-400">Ahmed</span>
          <span className="text-gray-200">Portfolio</span>
        </h1>

        {/* DESKTOP LINKS (RIGHT SIDE) */}
        <div className="hidden md:flex gap-8 text-sm font-medium ml-auto">

          <a href="#hero" className="text-gray-300 hover:text-blue-400 transition">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-300"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4">

          <a onClick={() => setOpen(false)} href="#hero" className="block text-gray-300 hover:text-blue-400">
            Home
          </a>

          <a onClick={() => setOpen(false)} href="#about" className="block text-gray-300 hover:text-blue-400">
            About
          </a>

          <a onClick={() => setOpen(false)} href="#skills" className="block text-gray-300 hover:text-blue-400">
            Skills
          </a>

          <a onClick={() => setOpen(false)} href="#projects" className="block text-gray-300 hover:text-blue-400">
            Projects
          </a>

          <a onClick={() => setOpen(false)} href="#contact" className="block text-gray-300 hover:text-blue-400">
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}