'use client';
import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-200 mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg max-w-none text-slate-200 space-y-6"
                >
                    <p className="leading-relaxed">
                        A few years ago, I began my coding journey — a decision I cherish and often wish I had made earlier. I started out as a self-taught developer, learning by building things, getting stuck, and working my way through problems one at a time. I&apos;m now a Software Engineer with a little over two years of professional experience, and I still find immense joy in programming. I believe in its power to create meaningful change for people and for society.
                    </p>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Yurik B.V. – AI Solutions and Projects</h3>
                        <p className="text-gray-600 mb-4">
                            My first professional role was at Yurik B.V. – AI Solutions and Projects, where I worked directly with the founder, Yura, who was also my mentor. Together we built three live AI-driven products. Frontend development was my main responsibility — designing and implementing the interfaces people actually used — and I also contributed to backend services and to the AI side of the work. Working so closely with Yura taught me how to take ownership of real products, not just isolated pieces of code.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="text-gray-700 italic">
                                &ldquo;I&apos;m incredibly grateful to Yura for being an exceptional mentor and friend throughout this journey. His guidance, patience, and willingness to share knowledge have been instrumental in my growth as a developer. Thank you for believing in me and providing the opportunities that helped shape my career in tech.&rdquo;
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">EPAM Systems</h3>
                        <p className="text-gray-600 mb-4">
                            I then continued at EPAM Systems, where I worked as a Software Engineer on a Travel Agency Application — a product built to help a travel agency network run more smoothly. I focused on the frontend, building the workflows that customers and travel agents rely on: registration and login, browsing tours, booking and cancellation, reviews, and collecting feedback.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Most days I was writing React and TypeScript, using React Router, TanStack Query, and Tailwind CSS. I connected the interface to REST APIs, worked with AWS services alongside backend developers, and wrote tests with Vitest. We worked in Agile/Scrum, and I collaborated closely with backend developers and the rest of the team. Coming from a small, independent setup, that was a different kind of experience — and a valuable one. I learned a lot about how a team actually builds software together.
                        </p>
                        <p className="text-gray-600">
                            While I was at EPAM, I also completed the Career Excellence Program. It included JavaScript, TypeScript, React, software development methodologies, Node.js, CI/CD, AWS fundamentals, Generative AI and Prompt Engineering, and AI-Assisted Engineering with Claude Code. It was a chance to go deeper into things I was already using, and to fill in gaps I still had.
                        </p>
                    </div>

                    <p className="leading-relaxed">
                        Looking back, my path has gone from teaching myself to code, to building live products with a founder, to working as a software engineer in a professional team. I still have plenty to learn, and I&apos;m glad about that. I want to keep growing — especially on the frontend — and to do work I&apos;m proud of with people I can learn from.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h3>
                        <ul className="list-none space-y-2">
                            <li className="flex items-center text-gray-800">
                                <span className="text-blue-600 mr-2">&rarr;</span>
                                Passion for continuous learning
                            </li>
                            <li className="flex items-center text-gray-800">
                                <span className="text-blue-600 mr-2">&rarr;</span>
                                Strong work ethic
                            </li>
                            <li className="flex items-center text-gray-800">
                                <span className="text-blue-600 mr-2">&rarr;</span>
                                Self-motivation
                            </li>
                            <li className="flex items-center text-gray-800">
                                <span className="text-blue-600 mr-2">&rarr;</span>
                                Conscientiousness
                            </li>
                            <li className="flex items-center text-gray-800">
                                <span className="text-blue-600 mr-2">&rarr;</span>
                                Deep sense of responsibility
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
