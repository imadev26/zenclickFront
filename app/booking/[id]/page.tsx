'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Mail, Phone, MapPin, Check, AlertCircle, ChevronLeft, ChevronRight, Users, CreditCard } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Interface definitions
interface Flight {
    _id: string;
    title: string;
    price: number;
    mainImage: string;
    category: string;
    duration?: string;
}

interface BookingFormData {
    date: Date | null;
    travelers: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    pickUpLocation: string;
}

export default function BookingProcessPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [flight, setFlight] = useState<Flight | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState<BookingFormData>({
        date: null,
        travelers: 1,
        fullName: '',
        email: '',
        phoneNumber: '',
        pickUpLocation: ''
    });

    // Calculate Total
    const total = (flight?.price || 0) * formData.travelers;

    useEffect(() => {
        const fetchFlight = async () => {
            try {
                setLoading(true);
                // Using localhost:5000 as established
                const response = await axios.get(`http://localhost:5000/api/flights/${params.id}`);
                setFlight(response.data);
            } catch (err) {
                console.error('Error fetching flight:', err);
                setError("Impossible de charger les détails du vol.");
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchFlight();
        }
    }, [params.id]);

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const reservationData = {
                flight: flight?._id,
                date: formData.date,
                travelers: formData.travelers,
                total: total,
                fullName: formData.fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                pickUpLocation: formData.pickUpLocation,
            };

            await axios.post('http://localhost:5000/api/reservations', reservationData);
            setStep(4); // Success step
        } catch (err) {
            console.error('Reservation failed:', err);
            // alert('La réservation a échoué. Veuillez réessayer.');
            // In a real app, I'd show a toast or error message state
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            </div>
        );
    }

    if (error || !flight) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <AlertCircle size={48} className="text-red-500 mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Oups !</h1>
                <p className="text-gray-600 mb-6">{error || "Vol introuvable."}</p>
                <button
                    onClick={() => router.push('/booking')}
                    className="bg-sky-900 text-white px-6 py-2 rounded-lg hover:bg-sky-800"
                >
                    Retour aux vols
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 font-sans pb-20">
            <Navbar />

            {/* Flight Header Summary (Mobile/Tablet optimized) */}
            <div className="bg-sky-900 text-white pt-24 pb-8 px-4 shadow-lg">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-full md:w-32 h-32 rounded-xl overflow-hidden border-2 border-white/20">
                        <Image
                            src={flight.mainImage.startsWith('http') ? flight.mainImage : `/images/${flight.mainImage}`}
                            alt={flight.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{flight.title}</h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sky-200 text-sm">
                            <span className="bg-white/10 px-3 py-1 rounded-full">{flight.category}</span>
                            <span className="bg-white/10 px-3 py-1 rounded-full">{flight.duration || '60 min'}</span>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="text-3xl font-bold text-orange-500">{flight.price} <span className="text-sm text-sky-200">MAD</span></div>
                        <div className="text-sky-300 text-sm">par personne</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">

                    {/* LEFT: Steps Process */}
                    <div className="flex-1">
                        {/* Progress Stepper */}
                        <div className="mb-8 flex justify-between items-center relative">
                            <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -z-0"></div>
                            {[1, 2, 3, 4].map((s) => (
                                <div key={s} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= s ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {step > s ? <Check size={18} /> : s}
                                </div>
                            ))}
                        </div>

                        {/* Step Content */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 min-h-[400px]">
                            <AnimatePresence mode="wait">

                                {/* STEP 1: DATE & TRAVELERS */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <h2 className="text-2xl font-bold text-sky-900 mb-6">Dates & Voyageurs</h2>

                                        <div className="mb-8">
                                            <label className="block text-gray-700 font-medium mb-3">Choisissez une date</label>
                                            <DatePicker
                                                selected={formData.date}
                                                onChange={(date: Date | null) => setFormData(prev => ({ ...prev, date }))}
                                                minDate={new Date()}
                                                inline
                                                calendarClassName="!w-full !border-0 !shadow-none !rounded-xl"
                                                dayClassName={(date) =>
                                                    (formData.date && date.toDateString() === formData.date.toDateString())
                                                        ? "!bg-orange-500 !text-white rounded-full"
                                                        : "hover:bg-orange-100 rounded-full"
                                                }
                                            />
                                        </div>

                                        <div className="mb-8">
                                            <label className="block text-gray-700 font-medium mb-3">Nombre de voyageurs</label>
                                            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                                    <Users size={24} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-bold text-gray-800">Adultes</div>
                                                    <div className="text-sm text-gray-500">Age 12+</div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => setFormData(prev => ({ ...prev, travelers: Math.max(1, prev.travelers - 1) }))}
                                                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 font-bold text-lg"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center font-bold text-xl text-sky-900">{formData.travelers}</span>
                                                    <button
                                                        onClick={() => setFormData(prev => ({ ...prev, travelers: Math.min(20, prev.travelers + 1) }))}
                                                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 font-bold text-lg"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-4">
                                            <button
                                                onClick={handleNext}
                                                disabled={!formData.date}
                                                className="bg-sky-900 hover:bg-sky-800 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                            >
                                                Continuer <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 2: DETAILS */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <h2 className="text-2xl font-bold text-sky-900 mb-6">Vos Coordonnées</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2">Nom Complet</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input
                                                        type="text"
                                                        value={formData.fullName}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                                                        placeholder="Ex: Jean Dupont"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                                                        placeholder="Ex: jean@example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2">Téléphone (avec indicatif)</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input
                                                        type="tel"
                                                        value={formData.phoneNumber}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                                                        placeholder="Ex: +33 6 12 34 56 78"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-2">Lieu de prise en charge (Hôtel/Riad)</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input
                                                        type="text"
                                                        value={formData.pickUpLocation}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, pickUpLocation: e.target.value }))}
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                                                        placeholder="Ex: Hôtel La Mamounia"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-8">
                                            <button
                                                onClick={handleBack}
                                                className="text-gray-500 font-bold hover:text-gray-700 underline"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                disabled={!formData.fullName || !formData.email || !formData.pickUpLocation}
                                                className="bg-sky-900 hover:bg-sky-800 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                            >
                                                Vérifier <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 3: REVIEW */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <h2 className="text-2xl font-bold text-sky-900 mb-6">Récapitulatif</h2>

                                        <div className="bg-gray-50 rounded-xl p-6 space-y-4 mb-8 border border-gray-100">
                                            <div className="flex justify-between border-b border-gray-200 pb-3">
                                                <span className="text-gray-600">Date</span>
                                                <span className="font-bold text-sky-900">{formData.date?.toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200 pb-3">
                                                <span className="text-gray-600">Voyageurs</span>
                                                <span className="font-bold text-sky-900">{formData.travelers} Personne(s)</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200 pb-3">
                                                <span className="text-gray-600">Lieu de RDV</span>
                                                <span className="font-bold text-sky-900 text-right max-w-[200px]">{formData.pickUpLocation}</span>
                                            </div>
                                            <div className="flex justify-between pt-2">
                                                <span className="text-xl font-bold text-sky-900">Total à payer</span>
                                                <span className="text-xl font-bold text-orange-600">{total} MAD</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between pt-4">
                                            <button
                                                onClick={handleBack}
                                                className="text-gray-500 font-bold hover:text-gray-700 underline"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                disabled={submitting}
                                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 transition-all shadow-lg hover:shadow-green-500/30"
                                            >
                                                {submitting ? 'Traitement...' : 'Confirmer la réservation'}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 4: SUCCESS */}
                                {step === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Check className="text-green-600 w-12 h-12" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-sky-900 mb-4">Réservation Confirmée !</h2>
                                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                            Merci {formData.fullName}. Votre vol a été réservé avec succès. Un email de confirmation a été envoyé à {formData.email}.
                                        </p>
                                        <button
                                            onClick={() => router.push('/')}
                                            className="bg-sky-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-800 transition-colors"
                                        >
                                            Retour à l'accueil
                                        </button>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT: Summary Cart (Sticky) */}
                    {step < 4 && (
                        <div className="lg:w-80">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-100">
                                <h3 className="text-lg font-bold text-sky-900 mb-4">Votre Réservation</h3>
                                <div className="space-y-3 text-sm text-gray-600 mb-6">
                                    <div className="flex justify-between">
                                        <span>Vol</span>
                                        <span className="font-medium text-right">{flight.title}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Prix unitaire</span>
                                        <span className="font-medium">{flight.price} MAD</span>
                                    </div>
                                    <div className="flex justify-between text-orange-600 font-bold text-lg border-t pt-3 mt-3">
                                        <span>Total</span>
                                        <span>{total} MAD</span>
                                    </div>
                                </div>

                                <div className="bg-sky-50 p-4 rounded-xl flex items-start gap-3">
                                    <AlertCircle size={20} className="text-sky-600 mt-0.5 shrink-0" />
                                    <p className="text-xs text-sky-700">
                                        Annulation gratuite jusqu'à 48h avant le vol. Paiement sur place disponible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </main >
    );
}
