"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Name / Brand */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Muhammad <span className="text-blue-500">Ahmed</span>
        </h2>

        <p className="text-gray-400 text-center max-w-md">
          Full Stack Web Developer building modern, responsive web applications using Next.js & React.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl mt-2">

          <a
            href="https://github.com/ahmedmobile23500-coder"
            target="_blank"
            className="text-gray-400 hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>
<a
  href="https://www.linkedin.com/in/muhammad-ahmed-aa659430a"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-blue-500 hover:scale-110 transition"
>
  <FaLinkedin />
</a>
          <a
            href="https://instagram.com/ahmedcoder31"
            target="_blank"
            className="text-gray-400 hover:text-pink-500 hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

         
    

        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
}

