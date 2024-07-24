import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
      <Image
        src={project.images[0] || "/placeholder.jpg"}
        alt={project.title}
        width={100}
        height={100}
        sizes="100vw"
        className="w-full h-96 object-cover"
      />
      <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
        <span className="text-sm block text-gray-600 mb-2">
          10 FEB 2023 | BY JOHN DOE
        </span>
        <h3 className="text-xl font-bold text-[#333]">
          {project.title}
        </h3>
        <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
