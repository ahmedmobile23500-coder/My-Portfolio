"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center justify-center
      mb-10 md:mb-20
      pt-10 md:pt-0
      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
      text-white px-6"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12">

        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* THEME GLOW */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-3xl rounded-full"></div>

            {/* IMAGE ONLY (NO BOX FEEL) */}
            <div className="relative w-[320px] h-[380px] md:w-[380px] md:h-[450px]">
<Image
  src="/Heello.png"
  alt="Muhammad Ahmed"
  fill
  priority
  sizes="(max-width: 768px) 320px, 380px"       
  className="object-contain  "
/>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            I am a passionate Full Stack Web Developer who loves building modern,
            responsive, and user-friendly web applications. I specialize in
            Next.js, React, and Tailwind CSS to create fast and scalable solutions.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4 max-w-xl">
            My focus is on writing clean code, building smooth UI experiences,
            and continuously improving my development skills by working on real-world projects.
          </p>

          {/* SKILLS */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">

            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition cursor-pointer">
              Next.js
            </span>

            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition cursor-pointer">
              React
            </span>

            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition cursor-pointer">
              Tailwind CSS
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}