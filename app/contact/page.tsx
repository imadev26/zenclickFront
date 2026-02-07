'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Header */}
            <div className="bg-sky-900 pt-32 pb-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Contactez-nous</h1>
                <p className="text-sky-200 text-lg max-w-xl mx-auto relative z-10 px-4">
                    Une question sur nos vols ? Besoin d'un devis personnalisé ?
                    Notre équipe est à votre écoute 7j/7.
                </p>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-sky-900 mb-6 flex items-center gap-2">
                                <MessageSquare className="text-orange-500" /> Informations
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Nous sommes basés à Marrakech et opérons tous les jours, conditions météorologiques permettant.
                                N'hésitez pas à nous rendre visite ou à nous appeler.
                            </p>
                        </div>

                        <ContactCard
                            icon={<Phone size={24} />}
                            title="Téléphone"
                            lines={['+212 600 000 000', '+212 524 000 000']}
                            action={{ label: "Appeler", href: "tel:+212600000000" }}
                        />
                        <ContactCard
                            icon={<Mail size={24} />}
                            title="Email"
                            lines={['contact@skyexperience.com', 'support@skyexperience.com']}
                            action={{ label: "Écrire", href: "mailto:contact@skyexperience.com" }}
                        />
                        <ContactCard
                            icon={<MapPin size={24} />}
                            title="Adresse"
                            lines={['Angle Av. Echouhada et Rue temple', 'Marrakech 40000, Maroc']}
                            action={{ label: "Voir sur Maps", href: "https://maps.google.com" }}
                        />
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-sky-900 mb-8">Envoyez-nous un message</h2>

                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-100 text-green-800 p-8 rounded-xl text-center"
                            >
                                <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                                <p>Nous vous répondrons dans les plus brefs délais.</p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="mt-6 text-green-700 font-bold underline hover:text-green-900"
                                >
                                    Envoyer un autre message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Nom complet</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Votre nom" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
                                        <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="votre@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Sujet</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Demande d'information..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                                    <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'sending'}
                                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl w-full transition-all transform hover:scale-[1.01] flex justify-center items-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'sending' ? 'Envoi en cours...' : (
                                        <>Envoyer le message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function ContactCard({ icon, title, lines, action }: { icon: React.ReactNode, title: string, lines: string[], action: { label: string, href: string } }) {
    return (
        <div className="flex gap-4 p-6 rounded-xl hover:bg-sky-50 transition-colors group border border-transparent hover:border-sky-100">
            <div className="w-12 h-12 bg-sky-100 text-sky-900 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-lg text-sky-900 mb-2">{title}</h3>
                {lines.map((line, i) => (
                    <div key={i} className="text-gray-600 mb-1">{line}</div>
                ))}
                <a href={action.href} className="inline-block mt-2 text-orange-600 font-bold text-sm hover:underline">
                    {action.label}
                </a>
            </div>
        </div>
    );
}
