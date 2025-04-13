'use client';

import React from 'react';

interface Technology {
  name: string;
  icon?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  status: 'completed' | 'in-progress' | 'planned';
  image?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  status,
  image,
  className = '',
}) => {
  const statusColors = {
    'completed': 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    'planned': 'bg-blue-500'
  };

  const statusText = {
    'completed': 'Completed',
    'in-progress': 'In Progress',
    'planned': 'Planned'
  };

  return (
    <div className={`pipeline-node group hover:scale-105 transition-all duration-300 overflow-hidden ${className}`}>
      {/* Status indicator */}
      <div className="flex justify-between items-center mb-4">
        <span className={`text-sm font-semibold px-2 py-1 rounded-md ${statusColors[status]}`}>
          {statusText[status]}
        </span>
        <span className="text-xs font-mono text-gray-400">job_id: {`${title.length}${status.length}${title.charCodeAt(0)}${title.charCodeAt(title.length-1)}`}</span>
      </div>
      
      {/* Project image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-md h-48">
          <img src={`/assets/${image}`} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      )}
      
      {/* Project title and description */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      
      {/* Technologies */}
      <div className="mt-auto">
        <div className="text-xs uppercase text-gray-400 mb-2">Technologies</div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-slate-800 text-xs px-2 py-1 rounded flex items-center gap-1"
            >
              {tech.icon && (
                <img src={`/assets/${tech.icon}`} alt={tech.name} className="w-3 h-3" />
              )}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
