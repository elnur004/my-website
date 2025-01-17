'use client';
import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-text bg-fixed bg-no-repeat bg-cover">
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold text-slate-200 my-8 text-center sm:text-left"
          >
            Technical Expertise
          </motion.h2>
          <TechStack />
        </section>

        <section className="pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8 text-center sm:text-left"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="upscore.ai"
              description="AI-Powered IELTS Writing Assistant Platform"
              techStack={["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "OpenAI", "AI/ML", "PWA", "Vercel"]}
              githubUrl="https://github.com/elnur004/ielts"
              liveUrl="https://upscore.ai"
            />
            <ProjectCard
              title="SHRM Platform"
              description="Comprehensive SHRM Exam Preparation Platform"
              techStack={["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "PDFKit", "PWA", "Vercel"]}
              githubUrl="https://github.com/elnur004/shrm"
              liveUrl="https://shrm.upscore.ai"
            />
            <ProjectCard
              title="BoekieBot"
              description="AI-Powered Financial Management Platform"
              techStack={["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "Claude AI", "NextAuth.js", "Stripe", "Vercel"]}
              githubUrl="https://github.com/elnur004/boekiebot"
              liveUrl="https://boekiebot.nl"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
