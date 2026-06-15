"use client";

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "Next.js",
      level: 80,
      icon: <SiNextdotjs size={24} />,
    },
    {
      name: "React",
      level: 98,
      icon: <SiReact size={24} />,
    },
    {
      name: "JavaScript",
      level: 92,
      icon: <SiJavascript size={24} />,
    },
    {
      name: "TypeScript",
      level: 80,
      icon: <SiTypescript size={24} />,
    },
    {
      name: "Tailwind CSS",
      level: 95,
      icon: <SiTailwindcss size={24} />,
    },
    {
      name: "MongoDB",
      level: 80,
      icon: <SiMongodb size={24} />,
    },
    {
      name: "GitHub",
      level: 92,
      icon: <SiGithub size={24} />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
      text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            My Skills
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-900 border border-gray-800
              rounded-xl p-5 cursor-pointer
              hover:border-blue-500
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-blue-500/10
              transition-all duration-300"
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-3">

                <div className="flex items-center gap-3">
                  <span className="text-blue-400">
                    {skill.icon}
                  </span>

                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-blue-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r
                  from-blue-500 to-purple-500
                  rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}