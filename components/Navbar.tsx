'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    variant?: 'fixed' | 'static';
}

export default function Navbar({ variant = 'fixed' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${variant === 'fixed' ? 'fixed' : 'relative'} w-full z-50 ${variant === 'fixed' ? 'pt-3 xs:pt-4 sm:pt-5 md:pt-6 px-3 xs:px-4' : 'py-3 xs:py-4 px-3 xs:px-4'}`}>
            <nav
                className={`mx-auto max-w-7xl rounded-full px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 transition-all duration-300 flex justify-between items-center ${
                    variant === 'static' 
                        ? 'bg-white shadow-md' 
                        : scrolled
                            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
                            : 'bg-white/90 backdrop-blur-sm shadow-md'
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-8 xs:h-10 sm:h-12 w-32 xs:w-40 sm:w-48">
                        <Image
                            src="/images/logo.png"
                            alt="Sky Experience Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="192px"
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-bold text-gray-800 text-sm tracking-wide">
                    <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                        HOME <ChevronDown size={14} className="opacity-0 w-0" /> {/* Spacer/Aligner if needed, or just text */}
                    </Link>
                    <Link href="#about" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                        About us <ChevronDown size={14} />
                    </Link>
                    <Link href="#vols" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                        Flight <ChevronDown size={14} />
                    </Link>
                    <Link href="#contact" className="hover:text-orange-600 transition-colors flex items-center gap-1">
                        Contact <ChevronDown size={14} />
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/booking"
                        className="bg-[#C04000] hover:bg-[#A03000] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wider transition-transform hover:scale-105 shadow-md"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-800 p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} className="xs:w-7 xs:h-7" /> : <Menu size={24} className="xs:w-7 xs:h-7" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed top-20 xs:top-24 left-3 xs:left-4 right-3 xs:right-4 bg-white rounded-xl xs:rounded-2xl shadow-xl overflow-hidden p-5 xs:p-6 flex flex-col gap-3 xs:gap-4 items-center text-gray-800 font-bold z-50"
                    >
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-orange-600 text-base xs:text-base py-1">HOME</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-orange-600 text-base xs:text-base py-1">About us</Link>
                        <Link href="#vols" onClick={() => setIsOpen(false)} className="hover:text-orange-600 text-base xs:text-base py-1">Flight</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-orange-600 text-base xs:text-base py-1">Contact</Link>
                        <Link
                            href="/booking"
                            onClick={() => setIsOpen(false)}
                            className="bg-[#C04000] hover:bg-[#A03000] text-white px-6 xs:px-8 py-2.5 xs:py-3 rounded-full uppercase text-sm w-full text-center mt-2 xs:mt-4 transition-colors"
                        >
                            Book Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
