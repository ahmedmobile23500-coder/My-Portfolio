"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const fullName = "Muhammad Ahmed";
  const [name, setName] = useState("");

  useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setName(fullName.slice(0, i));
        i++;

        if (i > fullName.length) {
          isDeleting = true;
          i = fullName.length;
        }
      } else {
        setName(fullName.slice(0, i));
        i--;

        if (i < 0) {
          isDeleting = false;
          i = 0;
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center
      mb-10 md:mb-20
      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
      text-white px-6 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full top-16 left-16"></div>
      <div className="absolute w-[350px] h-[350px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-16 right-16"></div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <p className="text-blue-400 text-xl md:text-2xl mb-2 font-bold tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight
          bg-gradient-to-r from-blue-400 via-white to-purple-400
          bg-clip-text text-transparent">
            {name}
            <span className="animate-pulse">|</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 mt-4">
            Full Stack Web Developer
          </h2>

          <p className="text-gray-300 mt-6 max-w-xl text-lg leading-relaxed">
            I build modern, responsive, and high-performance web applications using
            Next.js, React, and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md transition"
>
  My Resume
            </a>

            <a
              href="#contact"
              className="border border-gray-500 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE (NO BOX) */}
        <div className="flex justify-center">

          <div className="relative">

            {/* THEME GLOW ONLY */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-3xl rounded-full"></div>

            {/* IMAGE ONLY (NO CONTAINER BOX) */}
            <div className="relative w-[360px] h-[460px] md:w-[420px] md:h-[540px]">
<Image
  src="/hello.png"
  alt="hello"
  fill
  priority                                         
  sizes="(max-width: 768px) 360px, 420px"          
  className="object-cover"
/>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}