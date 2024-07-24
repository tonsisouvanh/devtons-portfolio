import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/const";

const Projects = () => {
  return (
    <section id="projects">
      <div className="tcontainer">
        <div className="bg-transparent font-poppins">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-cyan-500 after:rounded-full">
                My Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
