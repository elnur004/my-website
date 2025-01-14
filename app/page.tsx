'use client';
import { useRef } from 'react';
import DownloadButton from './components/DownloadButton';

const LanguageLevel = ({ filled }: { filled: boolean }) => (
  <div className={`w-3 h-3 transform rotate-45 border border-gray-400 ${filled ? 'bg-gray-600' : 'bg-white'}`} />
);

const LanguageBar = ({ level }: { level: number }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <LanguageLevel key={num} filled={num <= level} />
      ))}
    </div>
  );
};

const SkillLevel = ({ level }: { level: number }) => {
  const percentage = (level / 10) * 100;
  return (
    <div className="flex items-center space-x-2">
      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-600 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-500 w-8">{percentage}%</span>
    </div>
  );
};

const skills = {
  primary: [
    { name: "React", level: 7 },
    { name: "TypeScript", level: 5 },
    { name: "Next.js", level: 6 },
    { name: "JavaScript", level: 7 },
    { name: "Tailwind CSS", level: 6 },
    { name: "HTML 5", level: 7 },
    { name: "CSS 3", level: 7 },
  ],
  secondary: [
    { name: "MongoDB", level: 4 },
    { name: "Prisma ORM", level: 4 },
    { name: "Git/Github", level: 5 },
    { name: "React Router", level: 6 },
    { name: "React Hooks", level: 6 },
    { name: "Stripe", level: 5 },
    { name: "NPM/Yarn", level: 5 },
  ]
};

const CV = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const languages = [
    { name: "English", level: 3 },
    { name: "Turkish", level: 4 },
    { name: "Russian", level: 3 },
    { name: "Azerbaijani", level: 5 }
  ];

  return (
    <>
      <DownloadButton contentRef={componentRef} />
      <main className="p-4 md:p-8">
        <div ref={componentRef} className="max-w-4xl mx-auto bg-white p-4 md:p-8 shadow-lg">
          {/* Header Section */}
          <header className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">ELNUR MAMMADOV</h1>
            <h2 className="text-lg md:text-xl text-gray-600 mb-4">FRONT-END DEVELOPER</h2>
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-center md:space-x-4 text-sm text-gray-600">
              <p>+994-55-604-00-04</p>
              <p>lnur004@gmail.com</p>
              <a href="https://github.com/elnur004" target="_blank" className="text-blue-600 hover:text-blue-800">github.com/elnur004</a>
            </div>
          </header>

          {/* Profile Section */}
          <section className="mb-5">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 mb-3">PROFILE</h3>
            <p className="text-gray-700 leading-relaxed">
              Three years ago, I began my coding journey—a decision I deeply cherish. As a self-taught developer with 1.5 years of experience at Yurik B.V - AI Solutions and Projects, I’ve developed a passion for programming and its potential to create meaningful change. At Yurik B.V., I worked closely with the project owner, Yura, who mentored me. While he focused on AI development, I designed and implemented intuitive front-end interfaces and contributed to the back-end, gaining hands-on experience with AI technologies and expanding my skills.

              Driven by continuous learning, self-motivation, and a strong work ethic, I&apos;m eager to join a collaborative team to work on impactful projects. Explore my work on  <span className="font-bold">GitHub profile:</span> <a href="https://github.com/elnur004" target="_blank" className="text-blue-600 hover:text-blue-800">github.com/elnur004</a>
            </p>
          </section>

          {/* Skills Section */}
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 mb-3">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            {/* Primary Skills Section */}
            <section>
              <div className="space-y-4">
                <div>
                  <div className="grid grid-cols-1 gap-2">
                    {skills.primary.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
                        <span className="text-sm text-gray-600">{skill.name}</span>
                        <SkillLevel level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Secondary Skills and Languages Section */}
            <div className="space-y-6">
              <section>
                <div>
                  <div className="grid grid-cols-1 gap-2">
                    {skills.secondary.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
                        <span className="text-sm text-gray-600">{skill.name}</span>
                        <SkillLevel level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section className='mb-6'>
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 mb-3">LANGUAGES</h3>
            <div className="space-y-3">
              {languages.map((language) => (
                <div key={language.name} className="flex justify-between items-center">
                  <span className="text-gray-700">{language.name}</span>
                  <LanguageBar level={language.level} />
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6 md:mb-8">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 mb-3">FEATURED PROJECTS</h3>

            {/* upscore.ai */}
            <div className="mb-6 border-b-2 border-gray-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="text-md font-semibold text-gray-800">upscore.ai - AI-Powered IELTS Writing Assistant Platform</h4>
                <div className="flex flex-col my-2">
                  <div className="flex space-x-2">
                    <p className="font-bold text-gray-600 text-sm">https://github.com/elnur004/ielts &mdash; </p>
                    <a href="https://github.com/elnur004/ielts" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm">GitHub</a>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-bold text-gray-600 text-sm">https://upscore.ai &mdash; </p>
                    <a href="https://upscore.ai" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm">Live Site</a>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4 mb-2">
                <li>UpScore.ai is a comprehensive IELTS preparation platform that leverages artificial intelligence to help students improve their IELTS Writing Task 2 scores. Key features and achievements include:
                </li>
                <li>Developed an AI-powered essay evaluation system that provides instant, detailed feedback on IELTS essays, analyzing task achievement, coherence, vocabulary, and grammar according to official IELTS band descriptors
                </li>
                <li>Implemented a robust learning platform with 30+ practice topics, interactive essay templates, and specialized tools like word counter
                </li>
                <li>Integrated user authentication, progress tracking, and essay history features
                </li>
                <li>Developed with modern tech stack: Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma ORM, PWA for desktop and mobile versions, and AI/ML technologies for natural language processing</li>
              </ul>
            </div>

            {/* SHRM Platform */}
            <div className="mb-6 border-b-2 border-gray-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="text-md font-semibold text-gray-800">SHRM Exam Preparation Platform</h4>
                <div className="flex flex-col my-2">
                  <div className="flex space-x-2">
                    <p className="font-bold text-gray-600 text-sm">https://github.com/elnur004/shrm &mdash; </p>
                    <a href="https://github.com/elnur004/shrm" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm">GitHub</a>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-bold text-gray-600 text-sm">https://shrm.upscore.ai &mdash; </p>
                    <a href="https://shrm.upscore.ai" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm">Live Site</a>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4 mb-2">
                <li>Developed a comprehensive web application using Next.js 14 and TypeScript to help HR professionals prepare for SHRM-CP and SHRM-SCP certification exams</li>
                <li>Implemented a modern, responsive UI with Tailwind CSS, featuring an interactive practice platform with 1000+ exam questions and detailed explanations</li>
                <li>Integrated PWA (Progressive Web App) functionality for offline access and for desktop and mobile versions</li>
                <li>Created a content-rich platform including study guides, practice questions, and educational resources for SHRM certification preparation</li>
                <li>Tech Stack: Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma ORM, PDFKit, PWA</li>
              </ul>
            </div>

            {/* BoekieBot */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="text-md font-semibold text-gray-800">BoekieBot - AI-Powered Financial Management Platform</h4>
                <div className="flex flex-col my-2">
                  <div className="flex space-x-2">
                    <p className="font-bold text-gray-600 text-sm">https://github.com/elnur004/boekiebot &mdash; </p>
                    <a href="https://github.com/elnur004/boekiebot" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm">GitHub</a>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-bold text-gray-600 text-sm">https://boekiebot.nl &mdash; </p>
                    <a href="https://boekiebot.nl" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm">Live Site</a>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4 mb-2">
                <li>Developed a full-stack application for automated expense tracking and VAT management</li>
                <li>Integrated Claude AI for intelligent document analysis and data extraction</li>
                <li>Implemented automated VAT calculations and compliance checks</li>
                <li>Developed secure file handling with duplicate detection</li>
                <li>Clean separation of concerns with modular components and built responsive UI supporting all device sizes</li>
                <li>This project demonstrates expertise in full-stack development, AI integration, and building secure, scalable financial applications</li>
                <li>Tech Stack: Next.js 15, TypeScript, Tailwind CSS, Prisma ORM, MongoDB, AI/ML: Claude AI for document analysis, NextAuth.js, Stripe integration</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 mb-3">EDUCATION</h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h4 className="font-semibold text-gray-800">Bachelor&apos;s Degree in Information Security in Telecommunication Systems</h4>
                <p className="text-gray-600">Russian State University for the Humanities</p>
              </div>
              <p className="text-gray-600 mt-1 md:mt-0">2004-2010</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CV;