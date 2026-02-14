'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#1a2632] text-white pt-20 pb-10 font-sans relative z-10 before:hidden after:hidden border-t-[6px] border-[#F27A23] outline-none -mt-1" style={{ backgroundImage: 'none' }}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand & Description */}
                    <div className="space-y-6">
                        <div className="relative w-40 h-12">
                            <Image
                                src="/images/skyexp.png"
                                alt="Sky Experience"
                                fill
                                className="object-contain brightness-0 invert"
                                sizes="160px"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Elevate your senses with Sky Experience. The premier hot air balloon adventure in Marrakech. Discover the Red City like never before.
                        </p>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-6 text-[#F27A23] uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2">Home</Link></li>
                            <li><Link href="#vols" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2">Our Flights</Link></li>
                            <li><Link href="#about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2">About Us</Link></li>
                            <li><Link href="/booking" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2">Book Now</Link></li>
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-6 text-[#F27A23] uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="bg-[#FFFFFF]/10 p-2 rounded-lg shrink-0">
                                    <MapPin size={20} className="text-[#F27A23]" />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase font-bold mb-1">Address</span>
                                    <p className="text-sm text-white leading-relaxed">
                                        3ème Étage Bureau N° 16, Angle Bd<br />Moulay Rachid, Marrakech 40000
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-[#FFFFFF]/10 p-2 rounded-lg shrink-0">
                                    <Mail size={20} className="text-[#F27A23]" />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase font-bold mb-1">Email</span>
                                    <a href="mailto:contact@skyexperience-marrakech.com" className="text-sm text-white hover:text-[#F27A23] transition-colors">
                                        contact@skyexperience-marrakech.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-[#FFFFFF]/10 p-2 rounded-lg shrink-0">
                                    <Phone size={20} className="text-[#F27A23]" />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase font-bold mb-1">Phone</span>
                                    <a href="tel:+212661445327" className="text-sm text-white font-bold hover:text-[#F27A23] transition-colors">
                                        +212 661 445 327
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Social & Newsletter */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-6 text-[#F27A23] uppercase tracking-wider">Follow Us</h3>
                        <p className="text-gray-300 text-sm mb-6">
                            Stay updated with our latest offers and sky adventures.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-[#FFFFFF]/10 hover:bg-[#F27A23] text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-[#FFFFFF]/10 hover:bg-[#F27A23] text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Sky Experience. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
            {/* Extended background to cover overscroll/bottom bounce issues */}
            <div className="absolute left-0 bottom-0 w-full h-1 bg-[#1a2632] translate-y-full" />
        </footer>
    );
}
