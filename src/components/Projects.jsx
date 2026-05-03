import { useState } from "react";
import projects from "../data/projects";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Work
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Explore the projects I've built
        </p>

        {/* Projects Container */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Video/Image Container - Left/Right */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-64 md:h-72 lg:h-80 bg-gray-800">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎥</div>
                        <p className="text-gray-300">Video Coming Soon</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Screen recording will be displayed here
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300"></div>
                  )}
                </div>
              </div>

              {/* Project Details - Right/Left */}
              <div className="w-full lg:w-1/2">
                {/* Project Name */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full hover:shadow-lg transition-shadow duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span>🌐</span> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-500 text-white font-semibold rounded-lg hover:border-purple-500 hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300"
                  >
                    <span>💻</span> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
