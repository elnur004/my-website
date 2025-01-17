'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Links from './Links';
import ToggleButton from './ToggleButton';
import logo from '@/public/logo.svg';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="md:fixed top-0 w-full bg-gradient-to-r from-[#020024] to-[#090979] backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex w-full flex-col sm:flex-row justify-between py-4 sm:h-16 items-center">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-center space-x-3">
                            <Image
                                src={logo}
                                alt="Elnur Mammadov"
                                width={70}
                                height={70}
                                style={{ width: '70px', height: '70px' }}
                            />
                            <Link href="/" className="text-xl font-bold text-slate-200 hover:text-slate-400 transition">
                                Elnur Mammadov
                            </Link>
                        </div>
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