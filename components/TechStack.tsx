'use client';
import { motion } from 'framer-motion';

import { FaCcStripe } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiHtml5, SiCss3, SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPrisma, SiGithub, SiReactrouter, SiYarn, SiPwa, SiVercel } from "react-icons/si";

const technologies = [
  { name: "HTML5", level: 7, icon: <SiHtml5 className='text-red-600' /> },
  { name: "CSS3", level: 7, icon: <SiCss3 className='text-blue-500' /> },
  { name: "JavaScript", level: 7, icon: <SiJavascript className='text-yellow-300 bg-black' /> },
  { name: "React", level: 7, icon: <SiReact className='text-sky-400' /> },
  { name: "TypeScript", level: 5, icon: <SiTypescript className='text-sky-500' /> },
  { name: "Next.js", level: 7, icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", level: 6, icon: <SiTailwindcss className='text-sky-500' /> },
  { name: "MongoDB", level: 4, icon: <SiMongodb className='text-green-600' /> },
  { name: "Prisma ORM", level: 4, icon: <SiPrisma /> },
  { name: "GitHub", level: 5, icon: <SiGithub /> },
  { name: 'React Router', level: 6, icon: <SiReactrouter /> },
  { name: 'React Hooks', level: 6, icon: <SiReact className='text-sky-400' /> },
  { name: "Stripe", level: 5, icon: <FaCcStripe className='text-4xl' /> },
  { name: 'NPM', level: 5, icon: <FaNpm className='text-red-500 text-4xl' /> },
  { name: 'Yarn', level: 5, icon: <SiYarn className='text-violet-950' /> },
  { name: 'Progressive Web App', level: 4, icon: <SiPwa className='text-white bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400' /> },
  { name: 'Vercel', level: 10, icon: <SiVercel /> }
];

export default function TechStack() {
  return (
    <div className="h-[570px] overflow-y-auto pr-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl mr-2">{tech.icon}</span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{tech.name}</h3>
            </div>
            <div className='flex items-center gap-1.5 sm:gap-2'>
              <div className="flex-grow bg-gray-200 rounded-full h-2.5 sm:h-3">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(tech.level / 10) * 100}%` }}
                />
              </div>
              <div className="min-w-[40px] sm:min-w-[45px] font-bold text-blue-600 text-center">
                {tech.level * 10}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 