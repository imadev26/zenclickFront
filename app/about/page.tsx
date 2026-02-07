'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Users, Target, Heart, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/bg.jpeg"
                    alt="About Sky Experience"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Notre Histoire
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto"
                    >
                        Plus qu'un vol, une passion partagée depuis plus de 10 ans au cœur de Marrakech.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/aboutus.png"
                                    alt="Notre Équipe"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-orange-600 font-bold uppercase tracking-widest mb-4">Qui sommes-nous ?</h3>
                            <h2 className="text-4xl font-bold text-sky-900 mb-8 leading-tight">
                                L'excellence du vol en montgolfière au Maroc
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Sky Experience est né d'un rêve : faire découvrir la magie des paysages marocains vue du ciel.
                                    Fondée par des pilotes passionnés, notre compagnie est aujourd'hui la référence en matière de vols en montgolfière à Marrakech.
                                </p>
                                <p>
                                    Nous ne proposons pas simplement un vol, mais une véritable épopée.
                                    Du ramassage en 4x4 de luxe au petit-déjeuner berbère traditionnel sous une tente caïdale,
                                    chaque détail est pensé pour votre confort et votre émerveillement.
                                </p>
                                <p>
                                    La sécurité est notre priorité absolue. Nos équipements sont régulièrement contrôlés et nos pilotes possèdent des milliers d'heures de vol à leur actif.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Users size={32} />}
                            title="Passion"
                            desc="Une équipe dévouée pour transformer votre rêve en réalité."
                        />
                        <ValueCard
                            icon={<Target size={32} />}
                            title="Sécurité"
                            desc="Des standards internationaux et une vigilance de chaque instant."
                        />
                        <ValueCard
                            icon={<Heart size={32} />}
                            title="Hospitalité"
                            desc="L'accueil chaleureux marocain à chaque étape de votre voyage."
                        />
                        <ValueCard
                            icon={<Award size={32} />}
                            title="Excellence"
                            desc="Un service premium récompensé par la fidélité de nos clients."
                        />
                    </div>
                </div>
            </section>

            {/* Team/Stats Section (Simplified "Desktop - 14") */}
            <section className="py-24 bg-sky-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16">Sky Experience en chiffres</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <Stat number="10+" label="Années d'expérience" />
                        <Stat number="5000+" label="Vols effectués" />
                        <Stat number="15k+" label="Passagers heureux" />
                        <Stat number="100%" label="Satisfaction" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-orange-500 mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-sky-900 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div>
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">{number}</div>
            <div className="text-sky-200 uppercase tracking-widest text-sm">{label}</div>
        </div>
    );
}
