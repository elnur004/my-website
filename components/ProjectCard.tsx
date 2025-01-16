'use client';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({ title, description, techStack, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
        >
          <SiGithub size={20} /> GitHub &rarr;
        </a>
        <a
          href={liveUrl}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          Live Site &rarr;
        </a>
      </div>
    </motion.div>
  );
} 