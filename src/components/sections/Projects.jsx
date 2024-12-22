import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="flex items-center text-gray-600 hover:text-blue-600">
                  <Github className="mr-1" size={16} />
                  Code
                </a>
                <a href={project.live} className="flex items-center text-gray-600 hover:text-blue-600">
                  <ExternalLink className="mr-1" size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};