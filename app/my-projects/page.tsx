'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { SiGithub } from 'react-icons/si';

import upscore from '@/public/assets/upscore.png';
import shrm from '@/public/assets/shrm.png';
import boekiebot from '@/public/assets/boekiebot.png';

interface Project {
    title: string;
    description: string[];
    githubUrl: string;
    liveUrl: string;
    techStack: string[];
    imageUrl?: StaticImageData;
}

const projects: Project[] = [
    {
        title: "upscore.ai - AI-Powered IELTS Writing Assistant Platform",
        description: [
            "UpScore.ai is a comprehensive IELTS preparation platform that leverages artificial intelligence to help students improve their IELTS Writing Task 2 scores.",
            "Developed an AI-powered essay evaluation system that provides instant, detailed feedback on IELTS essays, analyzing task achievement, coherence, vocabulary, and grammar according to official IELTS band descriptors",
            "Implemented a robust learning platform with 30+ practice topics, interactive essay templates, and specialized tools like word counter",
            "Integrated user authentication, progress tracking, and essay history features",
        ],
        githubUrl: "https://github.com/elnur004/ielts",
        liveUrl: "https://upscore.ai",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma ORM", "OpenAI", "PWA", "AI/ML", "Vercel"],
        imageUrl: upscore
    },
    {
        title: "SHRM Exam Preparation Platform",
        description: [
            "Developed a comprehensive web application using Next.js 14 and TypeScript to help HR professionals prepare for SHRM-CP and SHRM-SCP certification exams",
            "Implemented a modern, responsive UI with Tailwind CSS, featuring an interactive practice platform with 1000+ exam questions and detailed explanations",
            "Integrated PWA (Progressive Web App) functionality for offline access and for desktop and mobile versions",
            "Created a content-rich platform including study guides, practice questions, and educational resources for SHRM certification preparation",
        ],
        githubUrl: "https://github.com/elnur004/shrm",
        liveUrl: "https://shrm.upscore.ai",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma ORM", "PDFKit", "PWA", "Vercel"],
        imageUrl: shrm
    },
    {
        title: "BoekieBot - AI-Powered Financial Management Platform",
        description: [
            "Developed a full-stack application for automated expense tracking and VAT management",
            "Integrated Claude AI for intelligent document analysis and data extraction",
            "Implemented automated VAT calculations and compliance checks",
            "Developed secure file handling with duplicate detection",
            "Clean separation of concerns with modular components and built responsive UI supporting all device sizes",
            "This project demonstrates expertise in full-stack development, AI integration, and building secure, scalable financial applications",
        ],
        githubUrl: "https://github.com/elnur004/boekiebot",
        liveUrl: "https://boekiebot.nl",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "MongoDB", "Claude AI", "NextAuth.js", "Stripe", "Vercel"],
        imageUrl: boekiebot
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-950">
            <main className="max-w-7xl mx-auto mb-5 px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl font-bold text-slate-200 py-5 md:py-12 text-center"
                >
                    My Projects
                </motion.h1>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-200 rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center p-8 gap-8">
                                <div className="w-full lg:w-1/2">
                                    {project.imageUrl && (
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={800}
                                            height={400}
                                            priority
                                            className="rounded-xl border-2 border-gray-200 w-full h-auto object-cover"
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col lg:w-1/2">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                        {project.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {project.description.map((desc, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed">
                                                {desc}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200 transition"
                                        >
                                            <SiGithub className="mr-2 text-xl" /> GitHub Repository
                                        </Link>
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
                                        >
                                            Website
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
} 