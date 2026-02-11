'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
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
        <header className="absolute w-full z-50 pt-6 px-4">
            <nav
                className={`mx-auto max-w-7xl rounded-full px-6 py-3 transition-all duration-300 flex justify-between items-center ${scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
                    : 'bg-white/85 backdrop-blur-sm shadow-sm' // Slightly transparent white as in mock
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-48">
                        <Image
                            src="/images/logo.png"
                            alt="Sky Experience Logo"
                            fill
                            className="object-contain" // Contain to ensure full logo is visible
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
                    <Link href="/about" className="hover:text-orange-600 transition-colors flex items-center gap-1">
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
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col gap-4 items-center text-gray-800 font-bold"
                    >
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-orange-600">HOME</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-orange-600">About us</Link>
                        <Link href="#vols" onClick={() => setIsOpen(false)} className="hover:text-orange-600">Flight</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-orange-600">Contact</Link>
                        <Link
                            href="/booking"
                            onClick={() => setIsOpen(false)}
                            className="bg-[#C04000] text-white px-8 py-3 rounded-full uppercase text-sm w-full text-center mt-4"
                        >
                            Book Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
