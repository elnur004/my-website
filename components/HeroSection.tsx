'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { SiGithub, SiReaddotcv, SiLinkedin } from "react-icons/si";

import image1 from '@/public/assets/image1.jpg';
import image2 from '@/public/assets/image2.jpg';
import image3 from '@/public/assets/image3.jpg';
import image4 from '@/public/assets/image4.jpg';

const backgroundImages = [
  { image: image1, imageName: 'image1' },
  { image: image2, imageName: 'image2' },
  { image: image3, imageName: 'image3' },
  { image: image4, imageName: 'image4' },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-96 flex items-center justify-center">
      {/* Background Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={image.imageName}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            src={image.image}
            alt={`Background ${index + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto py-10 md:py-0 px-4 sm:px-6 2xl:w-full 2xl:px-0 2xl:mx-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-color-animation mb-4">
              Front-End Developer
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Passionate about creating impactful web applications with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/elnur004"
                target="_blank"
                className="flex justify-center items-center bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition"
              >
                <SiGithub className='mr-1 text-2xl'/> GitHub
              </a>
              <a
                href="/cv"
                className="flex justify-center items-center border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition"
              >
               <SiReaddotcv className='mr-1 text-2xl'/> View CV
              </a>
              <a
                href="https://www.linkedin.com/in/elnur-mammadov-94530579/"
                target="_blank"
                className="flex justify-center items-center bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition"
              >
                <SiLinkedin className='mr-1 text-2xl'/> Linkedin
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/elnur.webp"
                alt="my photo"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}