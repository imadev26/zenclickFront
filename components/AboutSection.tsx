'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-8 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

                    {/* LEFT IMAGE SECTION */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-full max-w-[300px]">
                            <Image
                                src="/images/about.png"
                                alt="Hot Air Balloon Close up"
                                width={400}
                                height={400}
                                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                                quality={95}
                                priority
                            />
                        </div>
                        {/* Decorative Circle (Optional, as per some modern styles, not strictly in screenshot but adds flair) */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#EBCBAD] rounded-full -z-10 hidden lg:block" />
                    </div>

                    {/* RIGHT CONTENT SECTION */}
                    <div className="w-full lg:w-1/2 space-y-8 text-left">

                        <div>
                            <h3 className="text-[#C04000] font-bold text-lg uppercase tracking-wider mb-2">
                                ABOUT US
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2632] leading-tight mb-6">
                                Sky Experience, More Than Just a Flight
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                A hot-air balloon ride is much more than a simple journey. Sky Experience turns this aerial adventure into an unforgettable moment. Watch the sun rise over the Atlas Mountains, lush oases, and expansive palm groves surrounding the city. A truly unique view awaits, offering you a bird's-eye view of Marrakech's natural beauty.
                            </p>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-6 pt-4">
                            <Link
                                href="/about"
                                className="bg-gradient-to-r from-[#C04000] to-[#D84A1B] hover:from-[#A03000] hover:to-[#C04000] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-600/30 transition-all transform hover:-translate-y-1"
                            >
                                Check details
                            </Link>

                            <Link
                                href="tel:+212600000000"
                                className="w-14 h-14 bg-gradient-to-r from-[#C04000] to-[#D84A1B] hover:from-[#A03000] hover:to-[#C04000] rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-600/30 transition-all transform hover:-translate-y-1 hover:rotate-12"
                                aria-label="Call Us"
                            >
                                <Phone size={24} strokeWidth={2.5} />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
