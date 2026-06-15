"use client";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      description:
        "A full-stack E-Commerce application built with Next.js, MongoDB, and a custom REST API. Features include product management, user authentication, shopping cart functionality, and responsive design.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "Custom API",
      ],
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://your-ecommerce-demo.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
      text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            My Projects
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-lg">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800
              rounded-2xl p-6
              cursor-pointer
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-lg
              hover:shadow-blue-500/10
              transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-6">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full
                    bg-gray-800 border border-gray-700
                    text-gray-300
                    hover:bg-blue-500
                    hover:border-blue-500
                    hover:text-white
                    transition
                    cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600
                  px-5 py-2 rounded-lg font-semibold
                  transition cursor-pointer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600
                  hover:border-blue-500 hover:text-blue-400
                  px-5 py-2 rounded-lg font-semibold
                  transition cursor-pointer"
                >
                  GitHub
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}