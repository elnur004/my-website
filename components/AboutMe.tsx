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
                        Three years ago, I began my coding journey—a decision I cherish and often wish I had made earlier. As a self-taught developer with a year and a half of professional experience at Yurik B.V - AI Solutions and Projects, I find immense joy in programming and strongly believe in its power to create meaningful change for individuals and society.
                    </p>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Experience</h3>
                        <p className="text-gray-600 mb-4">
                            At Yurik B.V., I co-worked closely with the project owner Yura, who also served as my mentor. While he focused on developing the AI side of our projects, I was responsible for designing and implementing intuitive front-end interfaces and contributing partially to the back-end. This collaboration not only deepened my expertise in front-end development but also allowed me to gain hands-on experience working with AI technologies, expanding my technical skill set.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="text-gray-700 italic">
                                &ldquo;I&apos;m incredibly grateful to Yura for being an exceptional mentor and friend throughout this journey. His guidance, patience, and willingness to share knowledge have been instrumental in my growth as a developer. Thank you for believing in me and providing the opportunities that helped shape my career in tech.&rdquo;
                            </p>
                        </div>
                    </div>

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