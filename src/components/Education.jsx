import { useState } from "react";
import education from "../data/education";

const Education = () => {
  const [hoveredEducation, setHoveredEducation] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          My academic journey and professional development
        </p>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative"
              onMouseEnter={() => setHoveredEducation(edu.id)}
              onMouseLeave={() => setHoveredEducation(null)}
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-0 md:left-12 top-32 w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-6 top-6 w-6 h-6 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 md:w-6 md:h-6 bg-gray-950 rounded-full"></div>
              </div>

              {/* Education Card */}
              <div
                className={`ml-12 md:ml-32 p-6 md:p-8 rounded-xl border-2 border-gray-800 bg-gray-900 hover:border-purple-500 hover:bg-opacity-80 transition-all duration-300 ${
                  hoveredEducation === edu.id ? "shadow-lg shadow-purple-500/20" : ""
                }`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{edu.field}</p>
                  </div>
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-lg">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights/Courses */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Key Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-blue-300 text-sm rounded-full hover:shadow-lg transition-shadow duration-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="text-purple-400 font-bold">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
