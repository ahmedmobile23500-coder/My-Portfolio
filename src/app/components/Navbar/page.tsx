"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 h-20
      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
      text-white border-b border-gray-800/60 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-full">
        
        {/* LOGO */}
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-wide cursor-pointer
          hover:scale-105 transition-all duration-300"
        >
          <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]">
            Ahmed
          </span>
          <span className="text-gray-200">Portfolio</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto">
          <a
            href="#hero"
            className="text-gray-300 hover:text-blue-400 transition duration-300 relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition duration-300 relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition duration-300 relative group"
          >
            Skills
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 transition duration-300 relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON (BIGGER) */}
        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          flex items-center justify-center
          w-14 h-14
          rounded-xl
          bg-gray-800/60
          border border-gray-700
          text-gray-200
          text-2xl
          hover:bg-blue-500/20
          hover:border-blue-500
          hover:text-blue-400
          transition-all duration-300
          shadow-lg shadow-black/20
          cursor-pointer
          "
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-md border-t border-gray-800 px-6 py-5 space-y-4">
          <a
            onClick={() => setOpen(false)}
            href="#hero"
            className="block text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Home
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="block text-gray-300 hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#skills"
            className="block text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Skills
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#projects"
            className="block text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="block text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}