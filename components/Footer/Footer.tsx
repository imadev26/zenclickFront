'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-sky-950 text-white pt-20 pb-10">
            <div className="container mx-auto px-4">

                {/* Top Section: Brand & Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-white/10 pb-16">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold mb-4">
                            Sky<span className="text-orange-500">Experience</span>
                        </h2>
                        <p className="text-sky-200 leading-relaxed">
                            Vivez l'extraordinaire au-dessus de Marrakech.
                            Des souvenirs impérissables, gravés dans le ciel de l'Atlas.
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="bg-sky-900 border border-sky-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:border-orange-500 w-full md:w-64"
                            />
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-r-lg font-bold transition-colors">
                                OK
                            </button>
                        </div>
                        <p className="text-xs text-sky-400 mt-2">Inscrivez-vous pour recevoir nos offres exclusives.</p>
                    </div>
                </div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1 */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-orange-500">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> Accueil</Link></li>
                            <li><Link href="#vols" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> Nos Vols</Link></li>
                            <li><Link href="#about" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> À Propos</Link></li>
                            <li><Link href="/booking" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> Réserver</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-orange-500">Informations</h4>
                        <ul className="space-y-4">
                            <li><Link href="/faq" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> FAQ</Link></li>
                            <li><Link href="/terms" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> CGV</Link></li>
                            <li><Link href="/privacy" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> Confidentialité</Link></li>
                            <li><Link href="/partners" className="hover:text-orange-400 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-500" /> Partenaires</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-orange-500">Contactez-nous</h4>
                        <ul className="space-y-4 text-sky-200">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-orange-500 mt-1" size={18} />
                                <span>Angle Avenue Echouhada et Rue le Temple, Marrakech</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-orange-500" size={18} />
                                <a href="tel:+212600000000" className="hover:text-white transition-colors">+212 600 000 000</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-orange-500" size={18} />
                                <a href="mailto:contact@skyexperience.com" className="hover:text-white transition-colors">contact@skyexperience.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-orange-500">Suivez-nous</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 bg-sky-900 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-sky-900 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-sky-900 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <Twitter size={18} />
                            </a>
                        </div>
                        <p className="text-sm text-sky-300">
                            Partagez vos moments avec #SkyExperienceMarrakech
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sky-400 border-t border-white/10 pt-8">
                    <p>© {new Date().getFullYear()} Sky Experience Marrakech. Tous droits réservés.</p>
                    <p className="mt-2 md:mt-0">
                        Développé avec <span className="text-red-500">♥</span> par Imad
                    </p>
                </div>
            </div>
        </footer>
    );
}
