'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
    });

    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis';
        if (!formData.privacy) newErrors.privacy = 'Vous devez accepter la politique de confidentialité';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setSubmitStatus('loading');

        try {
            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);
            setSubmitStatus('success');

            // Reset form after 3 seconds
            setTimeout(() => {
                handleReset();
                setSubmitStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            privacy: false
        });
        setErrors({});
        setSubmitStatus('idle');
    };

    return (
        <main className="min-h-screen bg-gray-50 font-sans">
            {/* Fixed Navbar for contact page */}
            <Navbar />

            {/* Hero Header Section */}
            <div className="relative bg-gradient-to-br from-[#C04000] via-[#D35400] to-[#E67E22] overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block mb-4"
                        >
                            <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
                                <p className="text-white font-semibold text-sm uppercase tracking-widest">Contactez-nous</p>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 drop-shadow-lg"
                        >
                            Entrer en Contact
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-white/95 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md"
                        >
                            Une question sur nos vols ? Besoin d'un devis personnalisé ?<br className="hidden sm:block" />
                            Notre équipe est à votre écoute 7j/7.
                        </motion.p>

                        {/* Quick Contact Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mt-8"
                        >
                            <a
                                href="tel:+212751622180"
                                className="group flex items-center gap-3 bg-white text-[#C04000] px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                                <span>Appelez-nous</span>
                            </a>
                            <a
                                href="https://wa.me/212751622180"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <FaWhatsapp size={20} className="group-hover:scale-110 transition-transform" />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="mailto:contact@skyexperience.com"
                                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 px-6 py-3 rounded-full font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300"
                            >
                                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                                <span>Email</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Wave Separator - Layered Design */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        className="w-full h-20 md:h-28 lg:h-32"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        {/* Background layer - subtle orange */}
                        <path
                            d="M0,0 C300,80 600,40 900,80 C1050,100 1150,60 1200,80 L1200,120 L0,120 Z"
                            className="fill-[#C04000] opacity-15"
                        />

                        {/* Middle layer - lighter orange */}
                        <path
                            d="M0,20 C300,90 600,50 900,90 C1050,110 1150,70 1200,90 L1200,120 L0,120 Z"
                            className="fill-[#D84A1B] opacity-25"
                        />

                        {/* Top layer - white/gray (main) */}
                        <path
                            d="M0,40 C300,100 600,60 900,100 C1050,115 1150,80 1200,100 L1200,120 L0,120 Z"
                            className="fill-gray-50"
                        />
                    </svg>
                </div>
            </div>

            {/* Info Cards */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C04000]/20 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C04000] transition-colors">
                            <Phone className="text-[#C04000] group-hover:text-white transition-colors" size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Informations de Contact</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <FaWhatsapp className="text-green-600 mt-1 flex-shrink-0" size={16} />
                                <div>
                                    <p className="text-gray-500 text-xs mb-1">WhatsApp:</p>
                                    <a href="tel:+212751622180" className="text-gray-900 hover:text-[#C04000] font-medium transition-colors">+212 751-622180</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <Mail className="text-[#C04000] mt-1 flex-shrink-0" size={16} />
                                <div>
                                    <p className="text-gray-500 text-xs mb-1">Email:</p>
                                    <a href="mailto:contact@skyexperience.com" className="text-gray-900 hover:text-[#C04000] font-medium break-all transition-colors">contact@skyexperience.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <MapPin className="text-[#C04000] mt-1 flex-shrink-0" size={16} />
                                <div>
                                    <p className="text-gray-500 text-xs mb-1">Adresse:</p>
                                    <p className="text-gray-900 font-medium">Région des Montagnes de l'Atlas</p>
                                    <p className="text-gray-900 font-medium">Marrakech, Morocco</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C04000]/20 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C04000] transition-colors">
                            <MessageSquare className="text-[#C04000] group-hover:text-white transition-colors" size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Restez Connecté</h3>

                        <div className="space-y-3">
                            <a href="https://wa.me/212751622180" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 hover:border-green-200 border border-transparent transition-all duration-200 group/social">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center group-hover/social:bg-green-500 transition-colors">
                                    <FaWhatsapp className="text-green-600 group-hover/social:text-white transition-colors" size={20} />
                                </div>
                                <span className="text-gray-900 font-medium group-hover/social:text-green-700">WhatsApp</span>
                            </a>

                            <a href="https://instagram.com/skyexperience" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 hover:border-pink-200 border border-transparent transition-all duration-200 group/social">
                                <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center group-hover/social:bg-pink-500 transition-colors">
                                    <FaInstagram className="text-pink-600 group-hover/social:text-white transition-colors" size={20} />
                                </div>
                                <span className="text-gray-900 font-medium group-hover/social:text-pink-700">Instagram</span>
                            </a>

                            <a href="https://tiktok.com/@skyexperience" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 hover:border-gray-300 border border-transparent transition-all duration-200 group/social">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover/social:bg-gray-800 transition-colors">
                                    <FaTiktok className="text-gray-900 group-hover/social:text-white transition-colors" size={20} />
                                </div>
                                <span className="text-gray-900 font-medium group-hover/social:text-gray-800">TikTok</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Opening Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C04000]/20 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C04000] transition-colors">
                            <Clock className="text-[#C04000] group-hover:text-white transition-colors" size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Heures d'Ouverture</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                <span className="text-gray-600">Lundi - Vendredi</span>
                                <span className="text-gray-900 font-medium">6:00 AM - 8:00 PM</span>
                            </div>

                            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                <span className="text-gray-600">Samedi:</span>
                                <span className="text-gray-900 font-medium">6:00 AM - 8:00 PM</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Dimanche:</span>
                                <span className="text-gray-900 font-medium">6:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Map and Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Notre Emplacement</h2>
                        <p className="text-gray-600 mb-6 text-sm">
                            Notre site de décollage est situé dans la belle campagne près de Marrakech, avec des vues imprenables sur les montagnes de l'Atlas.
                        </p>

                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.4!2d-7.98!3d31.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ4LjAiTiA3wrA1OCc0OC4wIlc!5e0!3m2!1sen!2sma!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#C04000] text-white p-4 sm:p-5 rounded-xl shadow-lg">
                            <div className="flex items-center gap-3">
                                <MapPin size={24} className="flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-sm sm:text-base">Région des Montagnes de l'Atlas</p>
                                    <p className="text-xs sm:text-sm opacity-90">Marrakech, Morocco</p>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=31.63,-7.98"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#C04000] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto text-center whitespace-nowrap"
                            >
                                Obtenir l'itinéraire
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Vous avez une question ?</h2>
                        <p className="text-gray-600 mb-6 text-sm">
                            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                        </p>

                        {/* Response Time Indicator */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <div className="flex items-center gap-2 text-blue-800">
                                <Clock size={18} />
                                <p className="font-medium text-sm">Temps de réponse moyen: 2-4 heures</p>
                            </div>
                        </div>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4" role="alert">
                                <p className="text-green-800 font-medium">✓ Message envoyé avec succès!</p>
                                <p className="text-green-600 text-sm mt-1">Nous vous répondrons dans les 24 heures.</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4" role="alert">
                                <p className="text-red-800 font-medium">✗ Erreur lors de l'envoi</p>
                                <p className="text-red-600 text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                                            className={`w-full px-4 py-3 pl-10 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#C04000] focus:border-transparent outline-none transition-all`}
                                            placeholder="Nom complet"
                                            autoComplete="name"
                                        />
                                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    </div>
                                    {errors.name && <p className="text-red-600 text-xs mt-1" role="alert">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Adresse email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04000] focus:border-transparent outline-none transition-all"
                                            placeholder="contact@balloonspin.com"
                                        />
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Numéro de téléphone <span className="text-gray-400 text-xs">(optionnel)</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04000] focus:border-transparent outline-none transition-all"
                                        placeholder="+212 6XX-XXXXXX"
                                        autoComplete="tel"
                                    />
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sujet <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => { setFormData({ ...formData, subject: e.target.value }); setErrors({ ...errors, subject: '' }); }}
                                        className={`w-full px-4 py-3 pl-10 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#C04000] focus:border-transparent outline-none transition-all`}
                                        placeholder="De quoi s'agit-il ?"
                                    />
                                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                                {errors.subject && <p className="text-red-600 text-xs mt-1" role="alert">{errors.subject}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                    <span className="text-gray-400 text-xs ml-2">({formData.message.length}/500)</span>
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => { if (e.target.value.length <= 500) { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: '' }); } }}
                                    rows={5}
                                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#C04000] focus:border-transparent outline-none transition-all resize-none`}
                                    placeholder="Indiquez-nous vos dates préférées, la taille de votre groupe ou toute question que vous pourriez avoir..."
                                    maxLength={500}
                                ></textarea>
                                {errors.message && <p className="text-red-600 text-xs mt-1" role="alert">{errors.message}</p>}
                            </div>

                            {/* Privacy Checkbox */}
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={formData.privacy}
                                    onChange={(e) => { setFormData({ ...formData, privacy: e.target.checked }); setErrors({ ...errors, privacy: '' }); }}
                                    className="mt-1 w-4 h-4 text-[#C04000] border-gray-300 rounded focus:ring-[#C04000]"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-700">
                                    J'accepte la <a href="/privacy" className="text-[#C04000] underline hover:text-[#A03000]">politique de confidentialité</a> et le traitement de mes données personnelles. <span className="text-red-500">*</span>
                                </label>
                            </div>
                            {errors.privacy && <p className="text-red-600 text-xs mt-1" role="alert">{errors.privacy}</p>}

                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    disabled={submitStatus === 'loading'}
                                    className={`flex-1 ${submitStatus === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C04000] hover:bg-[#A03000]'} text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2`}
                                >
                                    {submitStatus === 'loading' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Envoi en cours...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    disabled={submitStatus === 'loading'}
                                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Effacer le formulaire
                                </button>
                            </div>

                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-gray-600 text-sm mb-3">Ou contactez-nous directement:</p>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="https://wa.me/212751622180"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                                    >
                                        <FaWhatsapp size={20} />
                                        WhatsApp
                                    </a>
                                    <a
                                        href="mailto:contact@skyexperience.com"
                                        className="flex items-center gap-2 text-[#C04000] hover:text-[#A03000] font-medium"
                                    >
                                        <Mail size={20} />
                                        Envoyez-nous un courriel
                                    </a>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </main>
    );
}