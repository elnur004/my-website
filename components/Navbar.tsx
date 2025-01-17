'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Links from './Links';
import ToggleButton from './ToggleButton';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="md:fixed top-0 w-full bg-gradient-to-r from-[#020024] to-[#090979] backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex w-full flex-col sm:flex-row justify-between py-4 sm:h-16 items-center">
                    <div className="w-full flex items-center justify-between">
                        <Link href="/" className="flex items-center justify-center text-xl font-bold text-slate-200 hover:text-slate-400 transition">
                                <Image
                                    src="/page-logo.webp"
                                    alt="Elnur Mammadov"
                                    width={100}
                                    height={100}
                                    style={{ width: '70px', height: '40px' }}
                                    className="mr-2"
                                />
                                Elnur Mammadov
                        </Link>
                        <ToggleButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                    </div>
                    <div className="hidden w-full md:flex md:justify-end flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Links />
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col items-end px-2 pt-2 pb-3 space-y-1 border-t">
                        <Links />
                    </div>
                </div>
            </div>


        </nav>
    );
} 